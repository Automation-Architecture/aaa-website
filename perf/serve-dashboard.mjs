#!/usr/bin/env node
// perf/serve-dashboard.mjs — portable live dashboard for the AutoResearch-style ratchet loop.
//
// Zero dependencies — pure Node.js built-ins only.
// Works with ANY project that has:
//   perf/results.tsv   (the ratchet results log)
//   perf/results.json  (optional — richer per-route data)
//
// Usage:
//   node perf/serve-dashboard.mjs           # serves on http://localhost:8788
//   node perf/serve-dashboard.mjs --port 9000
//
// To add to a new project: copy this single file into perf/ alongside results.tsv.

import http from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = dirname(__dirname);
const TSV_PATH  = join(REPO_ROOT, 'perf/results.tsv');
const JSON_PATH = join(REPO_ROOT, 'perf/results.json');

const args   = process.argv.slice(2);
const pIdx   = args.indexOf('--port');
const PORT   = pIdx !== -1 ? parseInt(args[pIdx + 1], 10) : 8788;
const TITLE  = (() => { try { return JSON.parse(readFileSync(join(REPO_ROOT, 'package.json'), 'utf8')).name || 'project'; } catch { return 'project'; } })();

// ── data helpers ─────────────────────────────────────────────────────────────

function loadRows() {
  if (existsSync(JSON_PATH)) {
    try {
      return JSON.parse(readFileSync(JSON_PATH, 'utf8'));
    } catch {}
  }
  if (!existsSync(TSV_PATH)) return [];
  return readFileSync(TSV_PATH, 'utf8')
    .trim().split('\n').slice(1)
    .map(line => {
      const [commit, score, fcp_ms, si_ms, tbt_ms, lcp_ms, cls, status, ...rest] = line.split('\t');
      return {
        commit,
        description: rest.join('\t'),
        status,
        aggregate: {
          score:  parseFloat(score),
          fcp_ms: parseFloat(fcp_ms),
          si_ms:  parseFloat(si_ms),
          tbt_ms: parseFloat(tbt_ms),
          lcp_ms: parseFloat(lcp_ms),
          cls:    parseFloat(cls),
        },
        timestamp: null,
      };
    });
}

// ── HTML template ─────────────────────────────────────────────────────────────

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Perf Dashboard — ${TITLE}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root {
    --bg:       #0f1117;
    --surface:  #181c26;
    --border:   #2a2f3e;
    --text:     #e2e8f0;
    --muted:    #64748b;
    --green:    #22c55e;
    --green-bg: #052e16;
    --red:      #ef4444;
    --red-bg:   #2d0a0a;
    --yellow:   #eab308;
    --yellow-bg:#2d2000;
    --orange:   #f97316;
    --orange-bg:#2d1100;
    --blue:     #3b82f6;
    --font:     'SF Mono', 'Fira Code', 'Consolas', monospace;
  }
  body { background: var(--bg); color: var(--text); font-family: var(--font); font-size: 13px; line-height: 1.5; padding: 24px; }
  header { display: flex; align-items: baseline; gap: 16px; margin-bottom: 24px; border-bottom: 1px solid var(--border); padding-bottom: 16px; }
  header h1 { font-size: 18px; font-weight: 600; letter-spacing: -0.02em; }
  header .project { color: var(--blue); }
  header .live { font-size: 11px; color: var(--muted); margin-left: auto; }
  header .live span { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--green); margin-right: 5px; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

  .summary { display: flex; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; }
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 14px 18px; min-width: 120px; }
  .card .label { font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); margin-bottom: 4px; }
  .card .value { font-size: 26px; font-weight: 700; }
  .card .value.good  { color: var(--green); }
  .card .value.warn  { color: var(--yellow); }
  .card .value.bad   { color: var(--red); }
  .card .sub  { font-size: 11px; color: var(--muted); margin-top: 2px; }

  .chart-wrap { background: var(--surface); border: 1px solid var(--border); border-radius: 8px; padding: 14px 18px; margin-bottom: 24px; }
  .chart-wrap .label { font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); margin-bottom: 10px; }
  canvas { width: 100%; height: 80px; display: block; }

  table { width: 100%; border-collapse: collapse; }
  thead th { text-align: left; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; color: var(--muted); padding: 0 10px 8px; border-bottom: 1px solid var(--border); white-space: nowrap; }
  tbody tr { border-bottom: 1px solid var(--border); transition: background .1s; }
  tbody tr:last-child { border-bottom: none; }
  tbody tr:hover { background: rgba(255,255,255,.03); }
  tbody td { padding: 9px 10px; white-space: nowrap; }
  td.desc { white-space: normal; max-width: 280px; color: var(--muted); }
  td.desc.keep { color: var(--text); }

  .badge { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; }
  .badge.keep    { background: var(--green-bg);  color: var(--green);  }
  .badge.discard { background: var(--red-bg);    color: var(--red);    }
  .badge.crash   { background: var(--orange-bg); color: var(--orange); }
  .badge.pending { background: var(--yellow-bg); color: var(--yellow); animation: pulse 1.5s infinite; }

  .score { font-weight: 700; }
  .score.good  { color: var(--green); }
  .score.warn  { color: var(--yellow); }
  .score.bad   { color: var(--red); }

  .delta { font-size: 11px; }
  .delta.pos { color: var(--green); }
  .delta.neg { color: var(--red); }
  .delta.neu { color: var(--muted); }

  .empty { text-align: center; padding: 48px; color: var(--muted); }
  .ts { color: var(--muted); font-size: 11px; }

  .running-banner { background: var(--yellow-bg); border: 1px solid var(--yellow); border-radius: 8px; padding: 10px 16px; margin-bottom: 16px; color: var(--yellow); font-size: 12px; display: none; }
  .running-banner.show { display: flex; align-items: center; gap: 8px; }
  .spinner { width: 12px; height: 12px; border: 2px solid var(--yellow); border-top-color: transparent; border-radius: 50%; animation: spin .8s linear infinite; flex-shrink: 0; }
  @keyframes spin { to { transform: rotate(360deg); } }
</style>
</head>
<body>
<header>
  <h1>Perf Dashboard <span class="project">${TITLE}</span></h1>
  <div class="live"><span></span>Live · refreshes every 10s</div>
</header>

<div class="summary" id="summary"></div>
<div class="running-banner" id="runningBanner"><div class="spinner"></div><span id="runningText">Experiment running…</span></div>
<div class="chart-wrap"><div class="label">Score over kept experiments</div><canvas id="chart"></canvas></div>
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Commit</th>
      <th>Time</th>
      <th>Score</th>
      <th>Δ</th>
      <th>FCP</th>
      <th>SI</th>
      <th>TBT</th>
      <th>LCP</th>
      <th>CLS</th>
      <th>Status</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody id="tbody"></tbody>
</table>

<script>
const scoreColor = s => s >= 90 ? 'good' : s >= 50 ? 'warn' : 'bad';
const fmt = (n, d=0) => n == null || isNaN(n) ? '—' : n.toFixed(d);
const fmtMs = n => n == null || isNaN(n) ? '—' : Math.round(n) + 'ms';
const fmtTs = ts => { if (!ts) return ''; try { const d=new Date(ts); return d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}); } catch{return '';} };

function drawChart(rows) {
  const kept = rows.filter(r => r.status === 'keep');
  const canvas = document.getElementById('chart');
  const W = canvas.offsetWidth || 800;
  const H = 80;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, W, H);
  if (kept.length < 2) return;

  const scores = kept.map(r => r.aggregate?.score ?? 0);
  const minS = Math.max(0, Math.min(...scores) - 5);
  const maxS = Math.min(100, Math.max(...scores) + 2);
  const range = maxS - minS || 1;

  const x = i => (i / (kept.length - 1)) * (W - 20) + 10;
  const y = v => H - 8 - ((v - minS) / range) * (H - 20);

  // gradient fill
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(34,197,94,.25)');
  grad.addColorStop(1, 'rgba(34,197,94,0)');
  ctx.beginPath();
  ctx.moveTo(x(0), y(scores[0]));
  scores.forEach((s, i) => { if (i) ctx.lineTo(x(i), y(s)); });
  ctx.lineTo(x(scores.length-1), H);
  ctx.lineTo(x(0), H);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // line
  ctx.beginPath();
  ctx.moveTo(x(0), y(scores[0]));
  scores.forEach((s, i) => { if (i) ctx.lineTo(x(i), y(s)); });
  ctx.strokeStyle = '#22c55e';
  ctx.lineWidth = 2;
  ctx.stroke();

  // dots
  scores.forEach((s, i) => {
    ctx.beginPath();
    ctx.arc(x(i), y(s), 3, 0, Math.PI * 2);
    ctx.fillStyle = '#22c55e';
    ctx.fill();
  });
}

function render(rows) {
  // summary
  const kept    = rows.filter(r => r.status === 'keep');
  const last    = rows[rows.length - 1];
  const best    = kept.reduce((a,b) => ((a.aggregate?.score??0) > (b.aggregate?.score??0) ? a : b), {aggregate:{score:0}});
  const isPending = last?.status === 'pending';

  const banner = document.getElementById('runningBanner');
  if (isPending) {
    banner.classList.add('show');
    document.getElementById('runningText').textContent = 'Running: ' + (last.description || 'experiment…');
  } else {
    banner.classList.remove('show');
  }

  const bestScore = best.aggregate?.score ?? 0;
  const bestLcp   = best.aggregate?.lcp_ms ?? 0;
  const bestTbt   = best.aggregate?.tbt_ms ?? 0;
  document.getElementById('summary').innerHTML = \`
    <div class="card"><div class="label">Best Score</div><div class="value \${scoreColor(bestScore)}">\${fmt(bestScore,1)}</div><div class="sub">/100</div></div>
    <div class="card"><div class="label">Best LCP</div><div class="value \${bestLcp<2500?'good':bestLcp<4000?'warn':'bad'}">\${fmtMs(bestLcp)}</div></div>
    <div class="card"><div class="label">Best TBT</div><div class="value \${bestTbt<200?'good':bestTbt<600?'warn':'bad'}">\${fmtMs(bestTbt)}</div></div>
    <div class="card"><div class="label">Experiments</div><div class="value">\${rows.length}</div><div class="sub">\${kept.length} kept</div></div>
  \`;

  // chart
  drawChart(rows);

  // table
  const tbody = document.getElementById('tbody');
  if (!rows.length) { tbody.innerHTML = '<tr><td colspan="12" class="empty">No results yet — run an experiment.</td></tr>'; return; }

  let prevKeptScore = null;
  tbody.innerHTML = rows.map((r, i) => {
    const a = r.aggregate ?? {};
    const sc = a.score ?? 0;
    const delta = prevKeptScore !== null ? sc - prevKeptScore : null;
    if (r.status === 'keep') prevKeptScore = sc;
    const deltaHtml = delta === null ? '<span class="delta neu">—</span>' :
      delta > 0 ? \`<span class="delta pos">+\${fmt(delta,2)}</span>\` :
      delta < 0 ? \`<span class="delta neg">\${fmt(delta,2)}</span>\` :
      '<span class="delta neu">±0</span>';
    return \`<tr>
      <td class="muted">\${i+1}</td>
      <td class="ts">\${r.commit ?? '—'}</td>
      <td class="ts">\${fmtTs(r.timestamp)}</td>
      <td><span class="score \${scoreColor(sc)}">\${fmt(sc,2)}</span></td>
      <td>\${deltaHtml}</td>
      <td>\${fmtMs(a.fcp_ms)}</td>
      <td>\${fmtMs(a.si_ms)}</td>
      <td>\${fmtMs(a.tbt_ms)}</td>
      <td>\${fmtMs(a.lcp_ms)}</td>
      <td>\${fmt(a.cls,3)}</td>
      <td><span class="badge \${r.status ?? 'pending'}">\${r.status ?? 'pending'}</span></td>
      <td class="desc \${r.status === 'keep' ? 'keep' : ''}">\${(r.description ?? '').replace(/</g,'&lt;')}</td>
    </tr>\`;
  }).reverse().join('');  // newest first
}

async function refresh() {
  try {
    const res = await fetch('/data?t=' + Date.now());
    if (!res.ok) return;
    const rows = await res.json();
    render(rows);
  } catch {}
}

refresh();
setInterval(refresh, 10_000);
window.addEventListener('resize', () => {
  fetch('/data').then(r=>r.json()).then(drawChart).catch(()=>{});
});
</script>
</body>
</html>`;

// ── HTTP server ───────────────────────────────────────────────────────────────

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/data') {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Access-Control-Allow-Origin', '*');
    try {
      const rows = loadRows();
      res.end(JSON.stringify(rows));
    } catch (e) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: e.message }));
    }
    return;
  }

  // serve dashboard for any other path
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(HTML);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[perf-dashboard] http://localhost:${PORT}  (auto-refreshes every 10s)`);
  console.log(`[perf-dashboard] Reading from: ${TSV_PATH}`);
  console.log(`[perf-dashboard] Ctrl+C to stop`);
});
