import type { Metadata } from "next";
import { AiosVsChatgptView } from "@/feature/aios-vs-chatgpt/views/AiosVsChatgptView";

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
  return <AiosVsChatgptView />;
}
