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

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file with:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
NEXT_PUBLIC_GTM_CONTAINER_ID=
NEXT_PUBLIC_TYPEFORM_ID=
NEXT_PUBLIC_COOKIEYES_ID=
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Site Structure

The site includes pages for the core narrative flow (problem, solution, how-it-works, value), comparison pages (AIOS vs ChatGPT, Zapier, DIY), industry verticals, use cases, a glossary, FAQ, and a free Blueprint intake form.
