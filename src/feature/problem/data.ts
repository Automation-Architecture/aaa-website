import {
  AUTHOR_SCHEMA,
  PUBLISHER_SCHEMA,
  SITE_URL,
} from "@/lib/schema-constants";

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Operator Trap — Why Small Business Founders Are Stuck in Operations",
  description:
    "The Operator Trap is a pattern where 80% of a founder's working hours go to operational maintenance, leaving only 20% for growth work. Here's why it happens and what breaks it.",
  url: `${SITE_URL}/problem`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/problem` },
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
  articleSection: "Problem",
  keywords: [
    "operator trap",
    "small business operations",
    "founder burnout",
    "operational maintenance",
    "business automation need",
    "AI for small business",
  ],
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Operator Trap",
      item: `${SITE_URL}/problem`,
    },
  ],
};
