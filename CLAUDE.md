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
- Brand colors: `brand-lime` (#E6FF2B), `brand-teal` (#004D43), `brand-cream` (#F9F7F2), `brand-gray` (#898A8D), `brand-gray2` (#9E9E9E), `brand-divider` (#D8D8D8), `brand-body` (#636363), `brand-black` (#010101), `brand-white` (#FFFFFF).
- Breakpoints: `tablet` (768px), `desktop` (1024px), `wide` (1280px).
- Buttons use `rounded-[10px]`, not `rounded-full`. Hover states use color transitions (cream, black, or lime fills) — never `opacity` dim.
- Desktop nav links have corner-bracket hover decorations (lime, 2px) via `NavBracketLink` in `Header.tsx`.
- Mobile header shows "Apply Now" lime button + hamburger (cream bars). Mobile nav overlay uses lime X close icon (two 30px bars rotated ±45°).
- Mobile nav overlay header uses `h-[70px]` to match the closed-state header height.
- Footer is a server component. Newsletter form state lives in `components/NewsletterForm.tsx`.
- Integrations: Typeform (Blueprint form), GTM/GA4 (analytics), CookieYes (consent), HubSpot (CRM + newsletter).
- Newsletter form posts to `POST /api/subscribe` → creates HubSpot contacts. Rate-limited (5/min per IP), 10s timeout.
- `QuotableStatement` renders `schema.org/Quotation` JSON-LD with `data-cite="true"`. Pass a `text` prop for the citation.
- `id="footer-cta"` is shared between `PageCTA.tsx` and homepage — `MobileCTABar` depends on it via IntersectionObserver.
- `.hero-headline` class on homepage H1 is a `SpeakableSpecification` schema selector — do not remove.

## Figma layouts

Source file: `https://www.figma.com/design/0AT0J9OTCDI4lkjnnr7Ke7/New-Site-Local` (file key: `0AT0J9OTCDI4lkjnnr7Ke7`)

These are the only layouts being coded so far — other pages will be added when ready for dev.

| Layout | Node ID | Figma URL |
|--------|---------|-----------|
| Desktop | `2029:5811` | [dev-desktop](https://www.figma.com/design/0AT0J9OTCDI4lkjnnr7Ke7/New-Site-Local?node-id=2029-5811&m=dev) |
| Mobile | `2392:1137` | [dev-mobile](https://www.figma.com/design/0AT0J9OTCDI4lkjnnr7Ke7/New-Site-Local?node-id=2392-1137&m=dev) |
| Burger menu | `2526:3672` | [dev-burger](https://www.figma.com/design/0AT0J9OTCDI4lkjnnr7Ke7/New-Site-Local?node-id=2526-3672&m=dev) |

## Figma specs

- `dev-burger-specs.md` — mobile burger menu (implemented and aligned in `Header.tsx`)
- `dev-kit-specs.md` — design system reference (audited, components aligned)

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

- [x] **Figma illustration exports** — all SVGs are direct Figma exports; `device-mockup` replaced with Figma PNG
- [ ] **OG images per page** — all schemas use `/og-default.png`; create page-specific 1200x630 images
- [x] **Testing** — Vitest + React Testing Library (56 tests across 8 files)
- [ ] **Custom domain** — `automationarchitecture.ai` DNS not yet pointed to Vercel
