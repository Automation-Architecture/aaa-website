#!/usr/bin/env node
// perf/ratchet.mjs — one command to commit → evaluate → keep-or-revert.
// Analog of the agent loop in karpathy/autoresearch, human-driven.
//
// Usage (after making your code changes):
//   node perf/ratchet.mjs --description "lazy load hero animation"
//
// What it does:
//   1. Commits your staged+unstaged changes under [perf:<n>] tag
//   2. Runs Lighthouse via perf/runner.mjs (~10 min)
//   3. Applies the keep rule from program.md
//   4. KEEP  → records result, git push
//   5. DISCARD → git reset --hard HEAD~1 (code reverted, nothing pushed)

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = dirname(__dirname);
const TSV_PATH = join(REPO_ROOT, 'perf/results.tsv');
const JSON_PATH = join(REPO_ROOT, 'perf/results.json');

const sh = (cmd, opts = {}) =>
  execSync(cmd, { cwd: REPO_ROOT, encoding: 'utf8', stdio: 'pipe', ...opts }).trim();

function parseArgs(argv) {
  const out = {};
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      out[a.slice(2)] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
    }
  }
  return out;
}

function readRows(filterStatus = null) {
  if (!existsSync(TSV_PATH)) return [];
  return readFileSync(TSV_PATH, 'utf8')
    .trim()
    .split('\n')
    .slice(1) // skip header
    .map(line => {
      const [commit, score, fcp_ms, si_ms, tbt_ms, lcp_ms, cls, status] = line.split('\t');
      return {
        commit,
        score: parseFloat(score),
        fcp_ms: parseFloat(fcp_ms),
        si_ms: parseFloat(si_ms),
        tbt_ms: parseFloat(tbt_ms),
        lcp_ms: parseFloat(lcp_ms),
        cls: parseFloat(cls),
        status,
      };
    })
    .filter(r => !filterStatus || r.status === filterStatus);
}

// Keep rule from program.md:
//   KEEP if score improves ≥ 0.5
//   OR a sub-metric outside its "good" threshold improves ≥ 5%
//      with no other sub-metric regressing beyond the noise band
function shouldKeep(prev, curr) {
  const scoreDelta = curr.score - prev.score;
  if (scoreDelta >= 0.5) {
    return {
      keep: true,
      reason: `score +${scoreDelta.toFixed(2)} (${prev.score.toFixed(2)} → ${curr.score.toFixed(2)})`,
    };
  }

  const GOOD  = { fcp_ms: 1800, si_ms: 3400, tbt_ms: 200, lcp_ms: 2500 };
  const NOISE = { fcp_ms: 50,   si_ms: 50,   tbt_ms: 10,  lcp_ms: 50, cls: 0.005 };

  for (const [m, threshold] of Object.entries(GOOD)) {
    if (prev[m] > threshold) {
      const pct = (prev[m] - curr[m]) / prev[m];
      if (pct >= 0.05) {
        const regressions = Object.entries(NOISE)
          .filter(([k, n]) => (curr[k] - prev[k]) > n)
          .map(([k]) => k);
        if (!regressions.length) {
          return {
            keep: true,
            reason: `${m}: ${prev[m].toFixed(0)} → ${curr[m].toFixed(0)} (${(pct * 100).toFixed(1)}% improvement)`,
          };
        }
      }
    }
  }

  return {
    keep: false,
    reason: `score ${curr.score.toFixed(2)} vs best ${prev.score.toFixed(2)}, no qualifying improvement`,
  };
}

function updateLastTsvStatus(newStatus) {
  const tsv = readFileSync(TSV_PATH, 'utf8');
  const lines = tsv.split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim()) {
      lines[i] = lines[i].replace(/\tpending\t/, `\t${newStatus}\t`);
      break;
    }
  }
  writeFileSync(TSV_PATH, lines.join('\n'));
}

function updateLastJsonStatus(newStatus) {
  if (!existsSync(JSON_PATH)) return;
  try {
    const json = JSON.parse(readFileSync(JSON_PATH, 'utf8'));
    const last = json[json.length - 1];
    if (last) last.status = newStatus;
    writeFileSync(JSON_PATH, JSON.stringify(json, null, 2));
  } catch {}
}

async function main() {
  const args = parseArgs(process.argv);
  const description = args.description;

  if (!description) {
    console.error('Usage: node perf/ratchet.mjs --description "what you changed"');
    process.exit(1);
  }

  // Must have unstaged/staged changes to commit
  const dirty = sh('git status --porcelain');
  if (!dirty) {
    console.error('[ratchet] Nothing to commit. Make your code changes first.');
    process.exit(1);
  }

  const kept    = readRows('keep');
  const expNum  = kept.length + 1;
  const bestPrev = kept.length
    ? kept.reduce((a, b) => (a.score > b.score ? a : b))
    : { score: 0, fcp_ms: 9999, si_ms: 9999, tbt_ms: 9999, lcp_ms: 9999, cls: 0 };

  console.log(`\n[ratchet] === Experiment #${expNum}: ${description} ===`);
  console.log(`[ratchet] Benchmark to beat: score=${bestPrev.score.toFixed(2)}`);

  // --- commit code changes (exclude results files — we add those after the run) ---
  console.log('[ratchet] Committing code changes...');
  sh('git add -A -- ":(exclude)perf/results.tsv" ":(exclude)perf/results.json"');
  const commitMsg =
    `[perf:${expNum}] ${description}\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`;
  sh(`git commit -m ${JSON.stringify(commitMsg)}`);
  const expCommit = sh('git rev-parse --short HEAD');
  console.log(`[ratchet] Committed as ${expCommit}`);

  // --- run Lighthouse ---
  console.log('[ratchet] Running Lighthouse (~10 min)...\n');
  let crashed = false;
  try {
    execSync(
      `node perf/runner.mjs run --description ${JSON.stringify(description)}`,
      { cwd: REPO_ROOT, stdio: 'inherit' },
    );
  } catch {
    crashed = true;
  }

  const rows = readRows();
  const lastRow = rows[rows.length - 1];

  if (crashed || !lastRow || lastRow.status === 'crash') {
    console.log('\n[ratchet] CRASH — reverting commit...');
    sh('git reset --hard HEAD~1');
    process.exit(1);
  }

  // --- decide keep / discard ---
  const { keep, reason } = shouldKeep(bestPrev, lastRow);

  if (keep) {
    updateLastTsvStatus('keep');
    updateLastJsonStatus('keep');

    sh('git add perf/results.tsv perf/results.json');
    sh(`git commit -m ${JSON.stringify(
      `[perf:${expNum}] results: score=${lastRow.score.toFixed(2)} ✓\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
    )}`);
    sh('git push');

    console.log(`\n[ratchet] ✓  KEPT — ${reason}`);
    console.log(`[ratchet]    score=${lastRow.score.toFixed(2)}  fcp=${lastRow.fcp_ms.toFixed(0)}ms  si=${lastRow.si_ms.toFixed(0)}ms  tbt=${lastRow.tbt_ms.toFixed(0)}ms  lcp=${lastRow.lcp_ms.toFixed(0)}ms  cls=${lastRow.cls.toFixed(3)}`);
    console.log('[ratchet]    Branch pushed.');
  } else {
    sh('git reset --hard HEAD~1');

    console.log(`\n[ratchet] ✗  DISCARDED — ${reason}`);
    console.log(`[ratchet]    score=${lastRow.score.toFixed(2)}  fcp=${lastRow.fcp_ms.toFixed(0)}ms  si=${lastRow.si_ms.toFixed(0)}ms  tbt=${lastRow.tbt_ms.toFixed(0)}ms  lcp=${lastRow.lcp_ms.toFixed(0)}ms  cls=${lastRow.cls.toFixed(3)}`);
    console.log('[ratchet]    Code reverted. Try a different approach.');
  }
}

main().catch(e => {
  console.error('[ratchet] Fatal:', e.message);
  process.exit(2);
});
