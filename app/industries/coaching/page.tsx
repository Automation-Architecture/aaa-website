import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "AI Automation for Coaches: Scale Without Losing You -- AAA",
  description:
    "Coaches trade time for money. An AIOS handles content pipelines, landing pages, and daily briefings — so you focus on the clients, not the admin.",
  alternates: { canonical: "/industries/coaching" },
  openGraph: {
    title: "AI Automation for Coaches: Scale Without Losing You",
    description:
      "Coaches trade time for money. An AIOS handles content pipelines, landing pages, and daily briefings — so you focus on the clients, not the admin.",
    type: "article",
  },
};

export default function IndustriesCoachingPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          AI Automation for Coaches: Scale Without Losing You
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
