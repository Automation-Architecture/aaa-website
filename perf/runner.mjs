#!/usr/bin/env node
// perf/runner.mjs — fixed Lighthouse harness.
// Analog of prepare.py in karpathy/autoresearch. DO NOT modify mid-experiment.
//
// Usage:
//   node perf/runner.mjs run --description "baseline"
//   node perf/runner.mjs run --description "lazy framer-motion" --status keep
//
// Behavior:
//   1. Builds Next (next build).
//   2. Starts production server (next start) on PORT.
//   3. For each route: runs Lighthouse RUNS_PER_ROUTE times, takes median.
//   4. Aggregates: mean of medians across routes for each metric.
//   5. Appends one row to perf/results.tsv and one entry to perf/results.json.
//   6. Saves raw reports to perf/.runs/<commit>/<route>/<run>.json.

import { spawn, execSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync, existsSync, appendFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import net from 'node:net';

import { launch as launchChrome } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = dirname(__dirname);

// ---- FIXED CONFIG (the "prepare.py" constants) -----------------------------

const ROUTES = ['/', '/how-it-works', '/aios-vs-chatgpt'];
const RUNS_PER_ROUTE = 3;
const PORT = 3000;
const SERVER_BOOT_TIMEOUT_MS = 60_000;
const LH_TIMEOUT_MS = 90_000;
const CHROME_PATH = join(REPO_ROOT, 'perf/.chrome/chrome/linux-130.0.6723.116/chrome-linux64/chrome');

const TSV_PATH = join(REPO_ROOT, 'perf/results.tsv');
const JSON_PATH = join(REPO_ROOT, 'perf/results.json');
const RUNS_DIR = join(REPO_ROOT, 'perf/.runs');
const TSV_HEADER = 'commit\tscore\tfcp_ms\tsi_ms\ttbt_ms\tlcp_ms\tcls\tstatus\tdescription\n';

// ---- helpers ---------------------------------------------------------------

const sh = (cmd, opts = {}) =>
  execSync(cmd, { cwd: REPO_ROOT, encoding: 'utf8', stdio: 'pipe', ...opts }).trim();

const median = (arr) => {
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

const parseArgs = (argv) => {
  const out = { _: [] };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      out[a.slice(2)] = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[++i] : true;
    } else {
      out._.push(a);
    }
  }
  return out;
};

const waitForServer = (port, timeoutMs) =>
  new Promise((resolve, reject) => {
    const deadline = Date.now() + timeoutMs;
    const tryConnect = () => {
      const sock = net.connect(port, '127.0.0.1');
      sock.once('connect', () => { sock.end(); resolve(); });
      sock.once('error', () => {
        sock.destroy();
        if (Date.now() > deadline) reject(new Error(`server did not bind to :${port} within ${timeoutMs}ms`));
        else setTimeout(tryConnect, 500);
      });
    };
    tryConnect();
  });

// ---- core experiment -------------------------------------------------------

async function runExperiment({ description, status: forcedStatus }) {
  const commit = sh('git rev-parse --short HEAD');
  console.log(`[runner] commit=${commit} desc=${JSON.stringify(description)}`);

  // 1. Build
  console.log('[runner] next build...');
  try {
    execSync('npm run build', { cwd: REPO_ROOT, stdio: 'inherit' });
  } catch (e) {
    return recordCrash(commit, description, 'build failed');
  }

  // 2. Start server
  console.log(`[runner] next start on :${PORT}...`);
  const server = spawn('npm', ['run', 'start', '--', '-p', String(PORT)], {
    cwd: REPO_ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, NODE_ENV: 'production' },
  });
  let serverDied = false;
  let serverLog = '';
  server.stdout.on('data', (d) => { serverLog += d.toString(); });
  server.stderr.on('data', (d) => { serverLog += d.toString(); });
  server.once('exit', () => { serverDied = true; });

  try {
    await waitForServer(PORT, SERVER_BOOT_TIMEOUT_MS);
  } catch (e) {
    server.kill('SIGTERM');
    console.error('[runner] server boot failed:\n' + serverLog.slice(-2000));
    return recordCrash(commit, description, 'server boot failed');
  }
  if (serverDied) {
    console.error('[runner] server died early:\n' + serverLog.slice(-2000));
    return recordCrash(commit, description, 'server died early');
  }

  // 3. Lighthouse loop
  const reportsDir = join(RUNS_DIR, commit);
  mkdirSync(reportsDir, { recursive: true });
  const perRoute = {};
  let crashed = false;

  try {
    for (const route of ROUTES) {
      console.log(`[runner] route ${route}`);
      const url = `http://127.0.0.1:${PORT}${route}`;
      const runs = [];
      for (let i = 0; i < RUNS_PER_ROUTE; i++) {
        const chrome = await launchChrome({
          chromePath: CHROME_PATH,
          chromeFlags: [
            '--headless=new',
            '--no-sandbox',
            '--disable-gpu',
            '--disable-dev-shm-usage',
          ],
        });
        try {
          const result = await Promise.race([
            lighthouse(url, {
              port: chrome.port,
              output: 'json',
              logLevel: 'error',
              onlyCategories: ['performance'],
            }),
            new Promise((_, rej) => setTimeout(() => rej(new Error('lighthouse timeout')), LH_TIMEOUT_MS)),
          ]);
          const lhr = result.lhr;
          const a = lhr.audits;
          const m = {
            score: (lhr.categories.performance.score ?? 0) * 100,
            fcp_ms: a['first-contentful-paint']?.numericValue ?? 0,
            si_ms: a['speed-index']?.numericValue ?? 0,
            tbt_ms: a['total-blocking-time']?.numericValue ?? 0,
            lcp_ms: a['largest-contentful-paint']?.numericValue ?? 0,
            cls: a['cumulative-layout-shift']?.numericValue ?? 0,
          };
          runs.push(m);
          writeFileSync(
            join(reportsDir, `${route.replace(/\//g, '_') || '_root'}.${i}.json`),
            JSON.stringify(lhr, null, 2),
          );
          console.log(`  run ${i + 1}/${RUNS_PER_ROUTE}: score=${m.score.toFixed(1)} fcp=${m.fcp_ms.toFixed(0)} si=${m.si_ms.toFixed(0)} tbt=${m.tbt_ms.toFixed(0)}`);
        } finally {
          try { await Promise.resolve(chrome.kill()); } catch {}
        }
      }
      perRoute[route] = {
        runs,
        median: {
          score: median(runs.map((r) => r.score)),
          fcp_ms: median(runs.map((r) => r.fcp_ms)),
          si_ms: median(runs.map((r) => r.si_ms)),
          tbt_ms: median(runs.map((r) => r.tbt_ms)),
          lcp_ms: median(runs.map((r) => r.lcp_ms)),
          cls: median(runs.map((r) => r.cls)),
        },
      };
    }
  } catch (e) {
    console.error('[runner] lighthouse error:', e.message);
    crashed = true;
  } finally {
    server.kill('SIGTERM');
    await new Promise((r) => setTimeout(r, 500));
    if (!server.killed) server.kill('SIGKILL');
  }

  if (crashed || Object.keys(perRoute).length === 0) {
    return recordCrash(commit, description, 'lighthouse crashed');
  }

  // 4. Aggregate
  const routeKeys = Object.keys(perRoute);
  const agg = {};
  for (const k of ['score', 'fcp_ms', 'si_ms', 'tbt_ms', 'lcp_ms', 'cls']) {
    const vals = routeKeys.map((r) => perRoute[r].median[k]);
    agg[k] = vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  const status = forcedStatus || 'pending';

  // 5. Persist
  appendTsv({
    commit,
    score: agg.score,
    fcp_ms: agg.fcp_ms,
    si_ms: agg.si_ms,
    tbt_ms: agg.tbt_ms,
    lcp_ms: agg.lcp_ms,
    cls: agg.cls,
    status,
    description,
  });
  appendJson({
    timestamp: new Date().toISOString(),
    commit,
    description,
    status,
    aggregate: agg,
    perRoute,
  });

  console.log(`\n[runner] === aggregate ===`);
  console.log(`  score:  ${agg.score.toFixed(2)}`);
  console.log(`  fcp_ms: ${agg.fcp_ms.toFixed(0)}`);
  console.log(`  si_ms:  ${agg.si_ms.toFixed(0)}`);
  console.log(`  tbt_ms: ${agg.tbt_ms.toFixed(0)}`);
  console.log(`  lcp_ms: ${agg.lcp_ms.toFixed(0)}`);
  console.log(`  cls:    ${agg.cls.toFixed(3)}`);

  return { commit, status, ...agg };
}

function recordCrash(commit, description, reason) {
  console.error(`[runner] CRASH: ${reason}`);
  appendTsv({
    commit,
    score: 0,
    fcp_ms: 0,
    si_ms: 0,
    tbt_ms: 0,
    lcp_ms: 0,
    cls: 0,
    status: 'crash',
    description: `${description} (${reason})`,
  });
  appendJson({
    timestamp: new Date().toISOString(),
    commit,
    description,
    status: 'crash',
    reason,
  });
  return { commit, status: 'crash', reason };
}

function appendTsv(row) {
  if (!existsSync(TSV_PATH)) writeFileSync(TSV_PATH, TSV_HEADER);
  const desc = String(row.description).replace(/\t/g, ' ').replace(/\n/g, ' ');
  const line = [
    row.commit,
    row.score.toFixed(2),
    Math.round(row.fcp_ms),
    Math.round(row.si_ms),
    Math.round(row.tbt_ms),
    Math.round(row.lcp_ms),
    row.cls.toFixed(3),
    row.status,
    desc,
  ].join('\t') + '\n';
  appendFileSync(TSV_PATH, line);
}

function appendJson(entry) {
  let history = [];
  if (existsSync(JSON_PATH)) {
    try { history = JSON.parse(readFileSync(JSON_PATH, 'utf8')); } catch {}
  }
  history.push(entry);
  writeFileSync(JSON_PATH, JSON.stringify(history, null, 2));
}

// ---- entry point -----------------------------------------------------------

const args = parseArgs(process.argv);
const cmd = args._[0];

if (cmd === 'run') {
  const description = args.description || 'unlabeled';
  const status = args.status; // optional: pre-set keep/discard
  runExperiment({ description, status }).then(
    (r) => { process.exit(r.status === 'crash' ? 1 : 0); },
    (e) => { console.error(e); process.exit(2); },
  );
} else {
  console.error('usage: node perf/runner.mjs run --description "<text>" [--status keep|discard]');
  process.exit(64);
}
