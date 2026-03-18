import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "AIOS FAQ: AI Operating System Questions Answered",
  description:
    "25 questions answered about AIOS and AI automation for small businesses. Covers cost, timeline of 1-3 weeks, data security, and how AIOS actually works.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "AIOS FAQ: AI Operating System Questions Answered",
    description:
      "25 questions answered about AIOS and AI automation for small businesses. Covers cost, timeline of 1-3 weeks, data security, and how AIOS actually works.",
    type: "article",
  },
};

export default function FAQPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          Frequently Asked Questions About AIOS and AI Automation
        </h1>
        <p className="mt-6 text-brand-gray">
          FAQ accordion coming soon. Content coming soon.
        </p>
      </article>

      <PageCTA />
    </>
  );
}
