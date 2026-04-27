# perf/program.md

Adapted from Karpathy's `program.md` in `karpathy/autoresearch`. Same loop, different metric.

## Setup

This run's working branch is `claude/improve-website-performance-jduyh` (set by the harness — do not create `perf/<tag>` branches; use commit message tags `[perf:<n>]` instead).

In-scope files for context:
- `perf/program.md` — these rules (human-edited).
- `perf/runner.mjs` — fixed Lighthouse harness (do **NOT** modify mid-run; analog of `prepare.py`).
- `next.config.ts`, `package.json`, anything under `src/` — the agent edits these.

## What you CAN do

- Modify build config (`next.config.ts`), dependencies, source under `src/`.
- Replace, lazy-load, or restructure code paths.
- Swap libraries with equivalent-behavior alternatives (e.g. `axios` → `fetch`).
- Optimize public assets in-place (lossless re-encode, compression).

## What you CANNOT do

- **No UI changes.** No DOM/text/visual changes. The rendered page must look and read identically before and after.
- **No removed features.** Do not delete pages, routes, components, or content.
- **No modifying `perf/runner.mjs`.** The metric harness is fixed.
- **No new heavy dependencies.** If a change requires installing something large, propose first.

## Metric

The driving metric is `score` — Lighthouse Performance score, 0-100 (higher is better). It's a weighted composite of FCP, SI, TBT, LCP, CLS — exactly the Google docs the user linked. Sub-metrics are also recorded for diagnosis.

For each experiment we run Lighthouse on a fixed list of routes (mobile preset, 3 runs, median per metric per route, then mean of medians across routes for the aggregate `score`).

## Decision rule (keep / revert)

Keep an experiment if **either**:
- `score` improves by ≥ 0.5, OR
- a sub-metric outside its "good" threshold improves by ≥ 5% AND no other sub-metric regresses by more than the noise band (FCP/SI/LCP ±50ms, TBT ±10ms, CLS ±0.005).

Otherwise revert. The score-only rule was insufficient when sub-metrics were already saturated (e.g. score=96 ceiling masks a real LCP improvement).

## Output format

Each experiment appends one row to `perf/results.tsv`:

```
commit	score	fcp_ms	si_ms	tbt_ms	lcp_ms	cls	status	description
```

- `commit`: short SHA after the experiment's commit.
- `score`: 0-100, two decimals (e.g. `78.50`); `0.00` for crashes.
- `fcp_ms` / `si_ms` / `tbt_ms` / `lcp_ms` / `cls`: median values; `0` for crashes.
- `status`: `keep`, `discard`, or `crash`.
- `description`: short text, NO TABS.

Full JSON breakdown (per route, per run) goes to `perf/results.json` (committed) for the dashboard. Raw Lighthouse reports go to `perf/.runs/<commit>/...` (gitignored).

## The experiment loop

Mirroring autoresearch:

```
LOOP UNTIL stop condition:
  1. Look at git state.
  2. Pick an experimental change. Apply it. (Source/config only — no UI changes.)
  3. git commit with message: [perf:<n>] <short description>
  4. node perf/runner.mjs run --description "<short description>"
  5. Read aggregate score from perf/results.tsv last row.
  6. If crashed: tail run.log, fix if trivial, else log "crash" and revert.
  7. If score IMPROVED vs current best: keep commit, advance branch.
  8. If score is EQUAL or WORSE: git reset --hard HEAD~1.
  9. Push branch so dashboard updates upstream.
```

## Stop conditions

Stop when ANY of:
- Aggregate `score` ≥ 90 (Google "good") AND `fcp_ms` < 1800 AND `si_ms` < 3400 AND `tbt_ms` < 200, OR
- Three consecutive experiments produce no improvement after exhausting the planned ideas list, OR
- The user interrupts.

## NEVER STOP (mid-loop)

Once the loop starts, do not pause to ask the user "should I keep going?" between iterations. Each iteration commits + pushes so the dashboard reflects progress. Only stop on the conditions above or explicit interruption.

## Initial route set

- `/`
- `/how-it-works`
- `/aios-vs-chatgpt`

(Adjustable in `perf/runner.mjs` `ROUTES` constant. Three routes balance signal vs. ~3-min cycle time.)
