import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "About AAA: The Philosophy Behind the AI Operating System",
  description:
    "We build AI operating systems founders own, not rent. Compound intelligence means your system gets smarter every day it runs. Done-for-you in 1-3 weeks.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AAA: The Philosophy Behind the AI Operating System",
    description:
      "We build AI operating systems founders own, not rent. Compound intelligence means your system gets smarter every day it runs. Done-for-you in 1-3 weeks.",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          What We Believe: The Philosophy Behind AAA
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
