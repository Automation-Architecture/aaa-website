import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import { SITE_URL } from "@/lib/site-config";
import { AUTHOR_SCHEMA, PUBLISHER_SCHEMA } from "@/lib/schema-constants";

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What an AIOS Actually Is \u2014 AI Operating System for Your Business",
  description:
    "An AIOS (AI Operating System) is an autonomous infrastructure layer that wraps around an entire business \u2014 operations, data, intelligence, and communications \u2014 and runs whether the founder is at their desk or not.",
  url: `${SITE_URL}/solution`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/solution`,
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/og-default.png`,
    width: 1200,
    height: 630,
  },
  datePublished: "2026-01-01",
  dateModified: "2026-03-09",
  author: AUTHOR_SCHEMA,
  publisher: PUBLISHER_SCHEMA,
  about: [
    {
      "@type": "Thing",
      name: "AI Operating System",
      description:
        "An autonomous infrastructure layer that wraps around an entire business \u2014 operations, data, intelligence, and communications \u2014 and runs whether the founder is at their desk or not.",
    },
    {
      "@type": "Thing",
      name: "Business Context Data Engine",
      description:
        "The structured knowledge foundation that gives AI full business-specific intelligence \u2014 team, products, financials, priorities, and decisions.",
    },
    {
      "@type": "Thing",
      name: "Dashboard Intelligence",
      description:
        "Real-time, AI-powered visibility into business operations delivered as a daily brief before the founder opens their laptop.",
    },
    {
      "@type": "Thing",
      name: "Automated Task Management",
      description:
        "AI-driven task orchestration and execution that handles 60-70% of recurring operational tasks.",
    },
  ],
  articleSection: "Solution",
  keywords: [
    "AI operating system",
    "AIOS",
    "business automation",
    "compound intelligence",
    "AI infrastructure",
    "done-for-you AI",
  ],
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AIOS \u2014 AI Operating System Implementation",
  provider: {
    "@type": "Organization",
    name: "Automation Architecture AI",
    url: SITE_URL,
  },
  url: `${SITE_URL}/solution`,
  description:
    "An AIOS (AI Operating System) is an autonomous infrastructure layer that wraps around an entire business \u2014 operations, data, intelligence, and communications \u2014 and runs whether the founder is at their desk or not.",
  serviceType: "AI Operating System Implementation",
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Service Tiers",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Automation",
          description:
            "A single workflow automation for a specific bottleneck. Typically delivered in approximately one week.",
          serviceType: "AI Automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full AIOS",
          description:
            "Complete AI Operating System \u2014 context, data, intelligence, and automation across your entire business. Three pillars: Business Context Data Engine, Dashboard Intelligence, and Automated Task Management. Typically delivered in approximately three weeks.",
          serviceType: "AI Operating System Implementation",
        },
      },
    ],
  },
  termsOfService: `${SITE_URL}/faq`,
};

export const solutionBreadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "AIOS", path: "/solution" },
]);
