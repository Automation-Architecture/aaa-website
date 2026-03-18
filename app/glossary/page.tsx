import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "AAA Glossary: AI Operating System Key Terms",
  description:
    "17 key terms defined: AIOS, Operator Trap, compound intelligence, Business Context Data Engine, bandwidth inversion, and more. A plain-language guide.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "AAA Glossary: AI Operating System Key Terms",
    description:
      "17 key terms defined: AIOS, Operator Trap, compound intelligence, Business Context Data Engine, bandwidth inversion, and more. A plain-language guide.",
    type: "article",
  },
};

export default function GlossaryPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          AAA Glossary: Key Terms in AI Operating Systems
        </h1>
        <p className="mt-6 text-brand-gray">
          Term list coming soon. Content coming soon.
        </p>
      </article>

      <PageCTA />
    </>
  );
}
