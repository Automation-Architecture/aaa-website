import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA } from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "AI Operating System for Small Business -- AIOS by AAA",
  description:
    "60-70% of recurring tasks automated in weeks, not months. We build full AI operating systems for small businesses and startups. Get your free Blueprint.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Operating System for Small Business -- AIOS by AAA",
    description:
      "60-70% of recurring tasks automated in weeks, not months. We build full AI operating systems for small businesses and startups. Get your free Blueprint.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>

      <section className="py-20 px-4 text-center">
        <h1 className="">
          How to prepare your business for the agent-to-agent economy.
        </h1>
        <p className="mt-6 text-lg text-brand-gray">Content coming soon.</p>
        <div id="hero-cta" className="mt-10 flex flex-col items-center gap-4 tablet:flex-row tablet:justify-center">
          <Link
            href="/blueprint"
            className="inline-block rounded-md bg-brand-lime px-8 py-3 font-bold text-brand-teal hover:opacity-90 transition-opacity"
          >
            Get Your Free AI Blueprint
          </Link>
          <Link
            href="/how-it-works"
            className="inline-block rounded-md border border-brand-teal px-8 py-3 font-bold text-brand-teal hover:bg-brand-teal hover:text-brand-cream transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
