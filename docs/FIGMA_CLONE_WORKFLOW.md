# Figma Clone Workflow (AAA Website)

This document explains how each new Figma design is analyzed and converted into UI code in this project.

---

## Goal

Clone Figma UI as close as possible while following project conventions:

- Use `rem` units for spacing/sizing.
- Follow `docs/CONVENTION.md` structure.
- Keep route files simple (`src/app/page.tsx` should render a view only).
- Build section-level components in `src/feature/<feature>/components`.
- Compose sections in `src/feature/<feature>/views`.
- Reuse existing global layout components (Header/Footer) unless explicitly asked to change.

---

## 1) How I Analyze a New Figma Section

For each new Figma node (desktop/tablet/mobile):

1. **Read layout first**
   - Section width behavior (full width vs constrained).
   - Outer/inner wrappers, border, radius, and spacing.
   - Flex/grid direction and alignment.

2. **Read typography**
   - Font size, line height, tracking, weight, uppercase usage.
   - Responsive changes across breakpoints.

3. **Read positioning behavior**
   - Which elements are static flow vs absolute.
   - Layering (`z-index`) and overflow behavior.
   - Common collision points: sticky header and hero overlays.

4. **Read responsive intent**
   - What should stack on tablet/mobile.
   - What should become full width.
   - Which elements reorder between breakpoints.

5. **Map into code structure**
   - Big section = dedicated component file.
   - Small reusable piece = child component.
   - Add component to `LandingView` in visual order.

---

## 2) How I Think and Decide During Implementation

- **Accuracy before abstraction**: match layout/spacing first, then refactor if needed.
- **Mobile safety first**: ensure no clipping/overflow on smaller widths.
- **Breakpoint control**: use explicit breakpoints when design expects tablet to behave like mobile (e.g. `min-[1025px]:...` for desktop-only styles).
- **Token-first styling**: use variables/colors from `globals.css`; add new tokens if missing.
- **No fixed magic in code**: avoid one-off hardcoded values when a reusable token/class is better.

---

## 3) How Assets Are Downloaded and Organized

### Folder convention

- Section images: `public/images/...`
- Icons/SVGs: `public/icons/...`

### Naming convention

Use descriptive, section-scoped names:

- `landing-hero-animation-desktop.png`
- `landing-hero-animation-mobile.png`
- `landing-hero-task-icon.png`

### Usage rule

- Prefer local assets over hotlinking remote Figma URLs.
- Use `next/image` for raster images when appropriate.
- Keep asset names stable so future iteration is easy.

### MCP + download step (what I actually use)

1. Use Figma MCP to inspect/verify design:
   - `get_design_context`
   - `get_screenshot`
2. Copy/export the asset URL from Figma.
3. Download locally with `curl` into `public/...`.

Example commands:

```bash
# SVG icon/illustration
curl -L "FIGMA_ASSET_URL" -o "public/icons/landing-hero-task-icon.svg"

# PNG image
curl -L "FIGMA_ASSET_URL" -o "public/images/landing-hero-animation-desktop.png"
```

Preferred format:

- Use **SVG** for icons, logos, and simple vector graphics.
- Use **PNG** for complex artwork, textured visuals, or raster-heavy images.
- The output file extension must match the real asset type from Figma.

### Safe download rule (avoid SVG/PNG mismatch)

Never guess extension from filename only. Confirm type first, then save with matching extension:

```bash
# 1) Check response headers
curl -I "FIGMA_ASSET_URL"
# Look for: content-type: image/svg+xml OR image/png

# 2) Save with matching extension
# If content-type is image/svg+xml
curl -L "FIGMA_ASSET_URL" -o "public/icons/name.svg"
# If content-type is image/png
curl -L "FIGMA_ASSET_URL" -o "public/images/name.png"
```

If you already downloaded with the wrong extension, delete it and re-download with the correct one.

---

## 4) Implementation Pattern in This Repo

1. Create/update section component in:
   - `src/feature/landing/components/<SectionName>.tsx`
2. Import and place in:
   - `src/feature/landing/views/LandingView.tsx`
3. Keep page route simple:
   - `src/app/page.tsx` renders `LandingView`

Example section order is controlled only in `LandingView`.

---

## 5) Styling Rules (Important)

- Use `rem` units for all design measurements.
- Use project color tokens (`globals.css`) instead of direct hex.
- Keep borders/radius/spacing consistent with Figma.
- Preserve existing shared header/footer behavior unless a task explicitly requests updates.
- Avoid layout wrappers that force all sections into the same width; each section controls its own width strategy.

---

## 6) QA Checklist for Every New Section

Before finishing, verify:

- Desktop matches Figma node.
- Tablet layout does not clip text or overlap sticky header.
- Mobile stacks/reorders correctly.
- No right-side overflow or unexpected horizontal scroll.
- Buttons/links navigate correctly (use `RouteNames` from `src/constants.ts`).
- New section is correctly inserted in `LandingView`.

---

## 7) Common Pitfalls and Fix Strategy

- **Text clipped in hero/large title blocks**
  - Replace fixed `h-*` with `min-h-*` where content can grow.
  - Re-check `overflow-hidden` usage on smaller breakpoints.

- **Desktop styles activating too early**
  - Use explicit desktop start at `min-[1025px]:...` when needed.

- **Header overlap issues**
  - Lower section overlays (`z-20`/`z-30`) below sticky header (`z-40`+).

- **Mobile image not truly full width**
  - Remove extra parent padding on the image wrapper at mobile sizes.

---

## 8) Collaboration Flow for Iteration

When design is refined section-by-section:

1. Implement one section.
2. Compare against provided Figma node + screenshot.
3. Apply focused feedback (spacing, typography, alignment, responsive behavior).
4. Re-verify desktop/tablet/mobile after each update.

This loop is repeated until visual parity is reached.

