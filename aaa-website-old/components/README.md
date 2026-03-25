# Components

Shared UI components. All custom — no component library.

## Layout

| Component | Description |
|-----------|-------------|
| `Header.tsx` | Sticky header with desktop nav (corner-bracket hover), hamburger menu, CTAs. Client component. |
| `Footer.tsx` | Site footer with link columns, newsletter form, legal links. Server component. |
| `MobileCTABar.tsx` | Fixed bottom CTA bar on mobile, hidden when hero CTA is visible (IntersectionObserver). |
| `SocialSidebar.tsx` | Fixed left sidebar with social media links. |
| `Logo.tsx` | SVG logo with light/dark variants. |
| `Section.tsx` | Semantic `<section>` wrapper with `id` and optional className. |

## Interactive

| Component | Description |
|-----------|-------------|
| `FaqAccordion.tsx` | FAQ accordion context provider managing open/close state. |
| `FaqAccordionItem.tsx` | Individual FAQ item (client component, consumes accordion context). |
| `NewsletterForm.tsx` | Newsletter signup form with client-side state. |
| `TypeformEmbed.tsx` | Typeform widget embed for the Blueprint intake form. |
| `GlossaryTerm.tsx` | Expandable glossary term definition. |
| `CookiePreferencesLink.tsx` | Footer link to open CookieYes preferences. |

## Content

| Component | Description |
|-----------|-------------|
| `PageCTA.tsx` | Full-width CTA banner (lime bg, black text). Used at bottom of content pages. |
| `GhostButton.tsx` | Outline button (`rounded-[10px]`, lime hover fill). |
| `ResponsiveTable.tsx` | Desktop table + mobile card layout. String-only cells. |
| `RelatedLinks.tsx` | "Related" link list for bottom of content pages. |
| `KeyTakeaway.tsx` | Highlighted takeaway box with lime left border. |
| `QuotableStatement.tsx` | Quotable statement with Quotation JSON-LD and `data-cite="true"`. |

## Scripts & Tracking

| Component | Description |
|-----------|-------------|
| `GtmScript.tsx` | Google Tag Manager script + noscript tags. |
| `CookieYesScript.tsx` | CookieYes consent banner script. |
| `JsonLd.tsx` | JSON-LD structured data injection. |
| `TrackedLink.tsx` | Next.js `Link` wrapper that fires analytics events on click. |
