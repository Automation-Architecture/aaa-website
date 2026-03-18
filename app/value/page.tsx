import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "The ROI of AI Automation: Bandwidth Math for Founders -- AAA",
  description:
    "80% of your week goes to maintenance. An AIOS inverts that to 20-30%. Do the math on what recovered bandwidth means for your specific business.",
  alternates: { canonical: "/value" },
  openGraph: {
    title: "The ROI of AI Automation: Bandwidth Math for Founders",
    description:
      "80% of your week goes to maintenance. An AIOS inverts that to 20-30%. Do the math on what recovered bandwidth means for your specific business.",
    type: "article",
  },
};

export default function ValuePage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          The ROI of AI Automation: Bandwidth Math for Founders
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
