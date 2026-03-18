import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "How AIOS Works: 7 Phases From Blueprint to Live System",
  description:
    "7 phases from free AI Blueprint to a running system. AI Automation deploys in about 1 week. Full AIOS builds take roughly 3 weeks using proven modules.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How AIOS Works: 7 Phases From Blueprint to Live System",
    description:
      "7 phases from free AI Blueprint to a running system. AI Automation deploys in about 1 week. Full AIOS builds take roughly 3 weeks using proven modules.",
    type: "article",
  },
};

export default function HowItWorksPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          How It Works: From First Click to Running System in Weeks
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
