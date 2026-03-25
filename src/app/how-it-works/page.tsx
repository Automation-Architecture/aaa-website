import type { Metadata } from "next";
import { HowItWorksView } from "@/feature/how-it-works/views/HowItWorksView";

export const metadata: Metadata = {
  title: "How AIOS Works: 7 Phases From Blueprint to Live System",
  description:
    "7 phases from free AI Blueprint to a running system. AI Automation deploys in about 1 week. Full AIOS builds take roughly 3 weeks using proven modules.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How AIOS Works: 7 Phases From Blueprint to Live System",
    description:
      "7 phases from free AI Blueprint to a running system. AI Automation deploys in about 1 week. Full AIOS builds take roughly 3 weeks using proven modules.",
    type: "article",
  },
};

export default function HowItWorksPage() {
  return <HowItWorksView />;
}
