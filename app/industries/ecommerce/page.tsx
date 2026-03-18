import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "AI Automation for Ecommerce: Data, Leads, and Reporting -- AAA",
  description:
    "Ecommerce margins are thin and data lives in 7 platforms. An AIOS consolidates dashboards, automates lead pipelines, and delivers CFO reports on demand.",
  alternates: { canonical: "/industries/ecommerce" },
  openGraph: {
    title: "AI Automation for Ecommerce: Data, Leads, and Reporting",
    description:
      "Ecommerce margins are thin and data lives in 7 platforms. An AIOS consolidates dashboards, automates lead pipelines, and delivers CFO reports on demand.",
    type: "article",
  },
};

export default function IndustriesEcommercePage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          AI Automation for Ecommerce: Data, Leads, and Reporting
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
