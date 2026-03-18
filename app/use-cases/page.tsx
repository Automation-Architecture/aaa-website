import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "AI Automation Use Cases: Real Outcomes From Real Businesses",
  description:
    "74 calls analyzed overnight into 1 morning brief. 15 hours of weekly lead gen reduced to zero. 7 real outcomes from businesses running on AIOS systems.",
  alternates: { canonical: "/use-cases" },
  openGraph: {
    title: "AI Automation Use Cases: Real Outcomes From Real Businesses",
    description:
      "74 calls analyzed overnight into 1 morning brief. 15 hours of weekly lead gen reduced to zero. 7 real outcomes from businesses running on AIOS systems.",
    type: "article",
  },
};

export default function UseCasesPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          Real Outcomes From Businesses Running AIOS Infrastructure
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
