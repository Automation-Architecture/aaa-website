@AGENTS.md

## Stack

Next.js 16 + React 19 + Tailwind CSS v4. No component library — all components are custom.

## Sitemap

```text
/                           Homepage (Figma design, 17 sections)
/blueprint                  Typeform intake → free AI Blueprint
/problem                    Problem awareness content
/solution                   AIOS solution explainer
/value                      ROI / value framing
/how-it-works               Process & phases
/use-cases                  Real-world examples
/about                      Company / team
/faq                        FAQ accordion
/glossary                   Term definitions
/industries/agencies        Industry vertical
/industries/coaching        Industry vertical
/industries/ecommerce       Industry vertical
/industries/saas            Industry vertical
/aios-vs-chatgpt            Comparison page
/aios-vs-diy                Comparison page
/aios-vs-zapier             Comparison page
/privacy                    Privacy policy
/terms                      Terms of service
```

## Key conventions

- **`@theme` in `globals.css` must NOT use `inline`** — Tailwind v4 fails to generate utilities for color names ending in `-black` or `-white` with `@theme inline`.
- Brand colors: `brand-lime` (#E6FF2B), `brand-teal` (#004D43), `brand-cream` (#F9F7F2), `brand-gray` (#898A8D), `brand-black` (#010101), `brand-white` (#FFFFFF).
- Breakpoints: `tablet` (768px), `desktop` (1024px), `wide` (1280px).
- Footer is a server component. Newsletter form state lives in `components/NewsletterForm.tsx`.
- Integrations: Typeform (Blueprint form), GTM/GA4 (analytics), CookieYes (consent).

## Illustrations

SVG illustrations in `public/images/` are recreations from Figma screenshots. Replace with actual Figma exports when API rate limits allow.

## Figma-to-Code Workflow

- When given a Figma spec (YAML from Specs plugin), follow the implementation instructions in the spec header exactly.
- Use `get_screenshot` from the Figma MCP server to capture the design. Save to `.figma/` and reference it — don't re-fetch.
- Read the YAML `chunks` for anatomy (structure), layout (flex/grid), and repeats (deduplicated instances).
- Use `resolved_tokens` to map design token names to actual values (hex, font names).
- Match `instance_of` names to your icon library (Phosphor, Lucide, etc.) — check `package.json`.
- **Placeholders**: If you cannot find a matching icon, SVG, image, or vector asset, use a placeholder (`https://placehold.co/{width}x{height}`) sized to the element's `w` and `h` from specs. Do NOT stop or ask — keep building.
- Detect the framework from `package.json` and build accordingly.
- After building, screenshot your output and compare with the `.figma/*.png` reference. Fix differences.
- Keep implementations minimal — only build what the spec describes.
- **Summary**: After completing the build, list: what was built and file location, any placeholder images/icons used (with the original `instance_of` or element name so the user can replace them), and any assumptions or deviations.

## Remaining tasks

- [ ] **Production deployment** — env vars, domain, DNS
- [ ] **Figma illustration exports** — replace SVG recreations with actual exports
- [ ] **Testing** — no test suite yet
