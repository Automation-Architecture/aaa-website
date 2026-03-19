@AGENTS.md

## Figma Design-to-Code Status

The homepage has been fully implemented to match the Figma spec including:

- All 17 homepage sections matching `dev-desktop` layout
- SVG illustrations recreated from Figma reference screenshots (device mockup, agent network, tool icons, pyramid blocks, isometric cubes) in `public/images/`
- Social media sidebar (`components/SocialSidebar.tsx`) — fixed vertical bar on left, desktop only
- Mobile responsive layout verified against `dev-mobile` reference
- Header, footer, logo, burger menu all complete

**Note:** The `@theme` directive in `globals.css` must NOT use `inline` — Tailwind v4 fails to generate utility classes for color names ending in `-black` or `-white` when using `@theme inline`.

**To improve:** The SVG illustrations in `public/images/` are recreations from screenshots. When Figma API rate limits reset, export the actual illustration nodes as SVG for pixel-perfect fidelity.
