# Lib

Utilities, configuration, and schema helpers.

| File | Description |
|------|-------------|
| `site-config.ts` | Site URL, nav items, CTA config, footer columns. Single source of truth for navigation and links. |
| `analytics.ts` | `trackEvent()` helper that pushes to GTM dataLayer. |
| `breadcrumbs.ts` | `generateBreadcrumbSchema()` — builds BreadcrumbList JSON-LD from path segments. |
| `schema-constants.ts` | Organization and Website JSON-LD schemas, shared author/publisher objects. |
| `cn.ts` | `cn()` utility for conditional className merging. |
