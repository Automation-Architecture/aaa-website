# Automation Architecture AI (AAA) Website

Marketing site for [automationarchitecture.ai](https://automationarchitecture.ai) — a done-for-you AI Operating System (AIOS) service for small businesses and startups.

## What is AIOS?

AIOS wraps around a business in three layers:

1. **Business Context Data Engine** — gives AI deep knowledge of the business
2. **Dashboard Intelligence** — delivers daily briefs and operational insights
3. **Automated Task Management** — handles 60-70% of recurring tasks

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Forms:** Typeform (embedded)
- **Analytics:** Google Tag Manager / GA4
- **Consent:** CookieYes
- **CRM:** HubSpot
- **Hosting:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in values:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
NEXT_PUBLIC_GTM_CONTAINER_ID=
NEXT_PUBLIC_TYPEFORM_ID=
NEXT_PUBLIC_COOKIEYES_ID=
```

## Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm run dev`   | Start dev server       |
| `npm run build` | Production build       |
| `npm run start` | Serve production build |
| `npm run lint`  | Run ESLint             |

## Project Structure

```
app/            Routes and pages (Next.js App Router)
components/     Shared UI components
lib/            Utilities, config, and schema helpers
public/         Static assets (images, icons, OG image)
types/          TypeScript type declarations
```

## Site Structure

19 pages covering the core narrative flow (problem, solution, how-it-works, value), comparison pages (AIOS vs ChatGPT, Zapier, DIY), industry verticals (agencies, coaching, ecommerce, SaaS), use cases, glossary, FAQ, privacy policy, terms of service, and a free Blueprint intake form.

See `CLAUDE.md` for full sitemap and development conventions.
