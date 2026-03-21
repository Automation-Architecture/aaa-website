import { SITE_URL } from "./site-config";

export const LOGO_SCHEMA = {
  "@type": "ImageObject",
  url: `${SITE_URL}/images/logo-full.svg`,
  width: 600,
  height: 60,
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Automation Architecture AI",
  alternateName: "AAA",
  description:
    "AI automation agency building full AIOS infrastructure for small businesses and startups.",
  url: SITE_URL,
  logo: LOGO_SCHEMA,
  knowsAbout: [
    "AI Operating System",
    "Business Automation",
    "AI Infrastructure",
    "Small Business AI",
    "AI Automation for Small Business",
    "Done-for-You AI Implementation",
  ],
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Automation Architecture AI",
  alternateName: "AAA",
  url: SITE_URL,
};

export const AUTHOR_SCHEMA = {
  "@type": "Person",
  name: "Brad Wilcox",
  sameAs: ["https://www.linkedin.com/in/bradwilcox/"],
};

export const PUBLISHER_SCHEMA = {
  "@type": "Organization",
  name: "Automation Architecture AI",
  url: SITE_URL,
  logo: LOGO_SCHEMA,
};
