import { AUTHOR_SCHEMA, PUBLISHER_SCHEMA, SITE_URL } from "@/lib/schema-constants";

export const howItWorksArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How AIOS Works: 7 Phases From Blueprint to Live System",
  description:
    "See the complete 7-phase path from intake to ongoing partnership. AI Automation typically launches in about one week, while a full AIOS implementation is delivered in about three weeks.",
  url: `${SITE_URL}/how-it-works`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/how-it-works` },
  image: { "@type": "ImageObject", url: `${SITE_URL}/og-default.png`, width: 1200, height: 630 },
  datePublished: "2026-01-01",
  dateModified: "2026-04-09",
  author: AUTHOR_SCHEMA,
  publisher: PUBLISHER_SCHEMA,
  articleSection: "How It Works",
  keywords: [
    "how AIOS works",
    "AI automation process",
    "AI operating system rollout",
    "business automation phases",
  ],
};

export const howItWorksBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "How It Works", item: `${SITE_URL}/how-it-works` },
  ],
};

export const howItWorksHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How our AIOS implementation works",
  description:
    "A step-by-step implementation from intake and blueprint to deployment and long-term system optimization.",
  totalTime: "P3W",
  step: [
    { "@type": "HowToStep", name: "Idea", text: "Submit a short intake. We produce a free AI Blueprint tailored to your business." },
    { "@type": "HowToStep", name: "Consult", text: "Review priorities and select the right implementation tier for your current bottleneck." },
    { "@type": "HowToStep", name: "Design", text: "Map systems, data, and workflows into an execution-ready architecture." },
    { "@type": "HowToStep", name: "Build", text: "Implement AI workflows and logic with production-level reliability standards." },
    { "@type": "HowToStep", name: "Test", text: "Validate outputs, edge cases, and handoff behavior across real operations." },
    { "@type": "HowToStep", name: "Deploy", text: "Launch into your stack and onboard your team on the new operating rhythm." },
    { "@type": "HowToStep", name: "Ongoing Partnership", text: "Continuously optimize based on live feedback, performance, and growth goals." },
  ],
};
