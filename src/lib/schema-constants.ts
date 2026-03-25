import { appConfig } from "@/config";

export const SITE_URL = appConfig.siteUrl;

export const AUTHOR_SCHEMA = {
  "@type": "Person",
  name: "Brad Wilcox",
  url: SITE_URL,
} as const;

export const PUBLISHER_SCHEMA = {
  "@type": "Organization",
  name: "Automation Architecture AI",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon.png`,
  },
} as const;
