import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "AIOS vs DIY: Done-for-You AI vs Building It Yourself -- AAA",
  description:
    "46,700 AI tools exist. Building your own system takes months and developer-level skill. Done-for-you deploys in 1-3 weeks. Here's how to decide.",
  alternates: { canonical: "/aios-vs-diy" },
  openGraph: {
    title: "AIOS vs DIY: Done-for-You AI vs Building It Yourself",
    description:
      "46,700 AI tools exist. Building your own system takes months and developer-level skill. Done-for-you deploys in 1-3 weeks. Here's how to decide.",
    type: "article",
  },
};

export default function AIOSvsDIYPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          AIOS vs DIY: Done-for-You AI vs Building It Yourself
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
