import type { Metadata } from "next";
import { AiosVsDiyView } from "@/feature/aios-vs-diy/views/AiosVsDiyView";

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
  return <AiosVsDiyView />;
}
