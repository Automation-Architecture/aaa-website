import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "AIOS vs Zapier: Automation Tool vs Operating System -- AAA",
  description:
    "Zapier connects apps. An AIOS runs your business. Compare scope, intelligence, context, and compounding — and see which approach fits your operation.",
  alternates: { canonical: "/aios-vs-zapier" },
  openGraph: {
    title: "AIOS vs Zapier: Automation Tool vs Operating System",
    description:
      "Zapier connects apps. An AIOS runs your business. Compare scope, intelligence, context, and compounding — and see which approach fits your operation.",
    type: "article",
  },
};

export default function AIOSvsZapierPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          AIOS vs Zapier: When You Need an Operating System, Not an Automation Tool
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
