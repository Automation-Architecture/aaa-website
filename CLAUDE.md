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

SVG illustrations in `public/images/` are recreations from Figma screenshots. Replace with actual Figma exports when API rate limits allow. Reference screenshots archived in `reference-screenshots/`.
