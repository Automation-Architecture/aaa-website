import type { MetadataRoute } from "next";
import { appConfig } from "@/config";

const paths = [
  "",
  "/blueprint",
  "/problem",
  "/solution",
  "/value",
  "/how-it-works",
  "/use-cases",
  "/about",
  "/faq",
  "/glossary",
  "/industries/agencies",
  "/industries/coaching",
  "/industries/ecommerce",
  "/industries/saas",
  "/aios-vs-chatgpt",
  "/aios-vs-diy",
  "/aios-vs-zapier",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: `${appConfig.siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
