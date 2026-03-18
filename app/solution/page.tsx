import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "AIOS: The AI Operating System Built for Your Business",
  description:
    "An AIOS gives your business 3 connected layers: a Context Data Engine, Dashboard Intelligence, and Automated Task Management. Output quality jumps 50% to 90%.",
  alternates: { canonical: "/solution" },
  openGraph: {
    title: "AIOS: The AI Operating System Built for Your Business",
    description:
      "An AIOS gives your business 3 connected layers: a Context Data Engine, Dashboard Intelligence, and Automated Task Management. Output quality jumps 50% to 90%.",
    type: "article",
  },
};

export default function SolutionPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          AIOS: The AI Operating System Built Around Your Business
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
