# App Directory

Next.js App Router pages and layouts. Each subdirectory is a route.

## Layout

- `layout.tsx` — Root layout with Jura font, header, footer, social sidebar, GTM/CookieYes scripts, and Organization/Website JSON-LD.
- `globals.css` — Tailwind v4 theme tokens (colors, fonts, breakpoints, z-indices) and base typography.
- `robots.ts` — Robots.txt allowing all crawlers including AI bots.
- `sitemap.ts` — XML sitemap with all 19 routes.

## Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `page.tsx` | Homepage (17 sections, Figma design) |
| `/blueprint` | `blueprint/page.tsx` | Typeform intake form |
| `/problem` | `problem/page.tsx` | Problem awareness content |
| `/solution` | `solution/page.tsx` | AIOS solution explainer |
| `/value` | `value/page.tsx` | ROI / value framing |
| `/how-it-works` | `how-it-works/page.tsx` | Process and phases |
| `/use-cases` | `use-cases/page.tsx` | Real-world examples |
| `/about` | `about/page.tsx` | Company / team |
| `/faq` | `faq/page.tsx` | FAQ accordion |
| `/glossary` | `glossary/page.tsx` | Term definitions |
| `/industries/*` | `industries/*/page.tsx` | Industry verticals (agencies, coaching, ecommerce, SaaS) |
| `/aios-vs-*` | `aios-vs-*/page.tsx` | Comparison pages (ChatGPT, DIY, Zapier) |
| `/privacy` | `privacy/page.tsx` | Privacy policy |
| `/terms` | `terms/page.tsx` | Terms of service |
