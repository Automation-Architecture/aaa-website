import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "AI Automation for Agencies: Reclaim Your Bandwidth -- AAA",
  description:
    "Agencies trade client delivery for internal ops bandwidth. An AIOS automates lead pipelines, content production, and morning briefings — in weeks.",
  alternates: { canonical: "/industries/agencies" },
  openGraph: {
    title: "AI Automation for Agencies: Reclaim Your Bandwidth",
    description:
      "Agencies trade client delivery for internal ops bandwidth. An AIOS automates lead pipelines, content production, and morning briefings — in weeks.",
    type: "article",
  },
};

export default function IndustriesAgenciesPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          AI Automation for Agencies: Reclaim Your Bandwidth
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
