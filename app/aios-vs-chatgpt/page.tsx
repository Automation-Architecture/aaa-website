import type { Metadata } from "next";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";

export const metadata: Metadata = {
  title: "AIOS vs ChatGPT: Why a Chatbot Isn't Enough -- AAA",
  description:
    "ChatGPT gets you 50% of the way there. An AIOS with full business context reaches 90%. Compare what a chatbot does vs what an operating system does.",
  alternates: { canonical: "/aios-vs-chatgpt" },
  openGraph: {
    title: "AIOS vs ChatGPT: Why a Chatbot Isn't Enough",
    description:
      "ChatGPT gets you 50% of the way there. An AIOS with full business context reaches 90%. Compare what a chatbot does vs what an operating system does.",
    type: "article",
  },
};

export default function AIOSvsChatGPTPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="">
          AIOS vs ChatGPT: Why a Chatbot Isn't an Operating System
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
        <KeyTakeaway>Placeholder key takeaway.</KeyTakeaway>
      </article>

      <PageCTA />
    </>
  );
}
