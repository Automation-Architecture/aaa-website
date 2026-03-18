import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "The Operator Trap: Founders Stuck in Operations -- AAA",
  description:
    "80% of a founder's week goes to keeping the lights on. 46,700 AI tools exist but none connect. The Operator Trap compounds until you break the pattern.",
  alternates: { canonical: "/problem" },
  openGraph: {
    title: "The Operator Trap: Founders Stuck in Operations",
    description:
      "80% of a founder's week goes to keeping the lights on. 46,700 AI tools exist but none connect. The Operator Trap compounds until you break the pattern.",
    type: "article",
  },
};

export default function ProblemPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          The Operator Trap: Why Founders Get Stuck Running the Business Instead of Growing It
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
