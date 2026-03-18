import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Get Your Free AI Blueprint -- Automation Architecture AI",
  description:
    "AI automation recommendations tailored to your industry. Fill out a 5-minute intake form and receive a personalized Blueprint. Free, no obligation.",
  alternates: { canonical: "/blueprint" },
  openGraph: {
    title: "Get Your Free AI Blueprint -- Automation Architecture AI",
    description:
      "AI automation recommendations tailored to your industry. Fill out a 5-minute intake form and receive a personalized Blueprint. Free, no obligation.",
    type: "website",
  },
};

export default function BlueprintPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          Get Your Free AI Blueprint
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>

        {/* Typeform embed placeholder */}
        <div
          className="mt-10 flex min-h-[500px] items-center justify-center rounded-lg border-2 border-dashed border-brand-gray/30"
          aria-label="Blueprint intake form"
        >
          <p className="text-brand-gray">Typeform embed loading here.</p>
        </div>

        {/* What to Expect */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold">What to Expect</h2>
          <ol className="mt-6 space-y-4 text-brand-gray">
            <li>
              <strong>1. Fill out the intake form</strong> — Takes about 5
              minutes. We ask about your business, current tools, and biggest
              bottlenecks.
            </li>
            <li>
              <strong>2. Receive your Blueprint</strong> — A personalized
              document with AI automation recommendations tailored to your
              industry and operations.
            </li>
            <li>
              <strong>3. Book a consultation</strong> — Walk through the
              Blueprint with us, ask questions, and decide if AIOS is the right
              fit.
            </li>
          </ol>
        </section>
      </article>

      <PageCTA />
    </>
  );
}
