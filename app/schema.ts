import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import { SITE_URL } from "@/lib/site-config";
import { PUBLISHER_SCHEMA } from "@/lib/schema-constants";

export const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Automation Architecture AI \u2014 AI Operating System for Small Business",
  description:
    "AI automation agency building full AIOS infrastructure for small businesses and startups. Get your free AI Blueprint with industry-specific automation recommendations.",
  url: SITE_URL,
  datePublished: "2026-01-01",
  dateModified: "2026-03-09",
  publisher: PUBLISHER_SCHEMA,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-headline", ".hero-scene", ".pillar-summary"],
  },
  mainEntity: {
    "@type": "Service",
    name: "AIOS \u2014 AI Operating System",
    provider: {
      "@type": "Organization",
      name: "Automation Architecture AI",
    },
    description:
      "An autonomous infrastructure layer that wraps around an entire business \u2014 operations, data, intelligence, and communications \u2014 and runs whether the founder is at their desk or not.",
    serviceType: "AI Operating System Implementation",
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
              "Single workflow automation for a specific bottleneck. Typically delivered in approximately one week.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full AIOS",
            description:
              "Complete AI Operating System \u2014 context, data, intelligence, and automation across your entire business. Typically delivered in approximately three weeks.",
          },
        },
      ],
    },
  },
  potentialAction: {
    "@type": "Action",
    name: "Get Your Free AI Blueprint",
    target: `${SITE_URL}/blueprint`,
    description:
      "Fill out a short intake form and receive a personalized AI Blueprint with industry-specific automation recommendations. Free, no obligation.",
  },
};

export const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
]);
