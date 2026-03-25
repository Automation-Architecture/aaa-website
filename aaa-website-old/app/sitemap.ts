import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date("2026-03-18"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/solution`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/how-it-works`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/use-cases`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/problem`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/faq`, lastModified: new Date("2026-03-18"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/glossary`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/value`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/blueprint`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/aios-vs-zapier`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/aios-vs-diy`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/aios-vs-chatgpt`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/agencies`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/coaching`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/ecommerce`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/industries/saas`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date("2026-03-21"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: new Date("2026-03-21"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
