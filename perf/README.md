# perf — autoresearch-style Lighthouse harness

Adapts the loop pattern from [karpathy/autoresearch](https://github.com/karpathy/autoresearch) to drive web-perf experiments via Lighthouse instead of GPT training.

## Files

- `program.md` — agent rules + decision rule (human-edited).
- `runner.mjs` — fixed Lighthouse harness (do **not** modify mid-experiment).
- `dashboard.html` — live results viewer over `results.json`.
- `results.tsv` — append-only experiment log (committed).
- `results.json` — full per-route/per-run breakdown for the dashboard (committed).
- `.chrome/` — pinned Chrome for Testing (gitignored; auto-resolved if present).
- `.runs/<commit>/` — raw Lighthouse JSON reports per experiment (gitignored).

## Run modes

### Local (against `next start`)

```bash
node perf/runner.mjs run --description "<label>"
```

Builds, starts the production server on `:3000`, runs Lighthouse 3× per route, takes medians.

### Remote (against a deployed URL)

```bash
node perf/runner.mjs run --url https://automationarchitecture.ai --description "prod baseline"
```

Skips local build/start. Requires outbound internet and an installed Chrome.

## Chrome resolution

In order:
1. `$CHROME_PATH` env var
2. Pinned bundle at `perf/.chrome/chrome/linux-130.0.6723.116/chrome-linux64/chrome`
3. `chrome-launcher` auto-detect (system Chrome / Chromium)

To install the pinned version (matches what was used for the in-repo baselines):

```bash
npx @puppeteer/browsers install chrome@130.0.6723.116 --path ./perf/.chrome
```

## Dashboard

```bash
npx serve perf/ -l 4000
# open http://localhost:4000/dashboard.html
```

Refreshes every 30s.
