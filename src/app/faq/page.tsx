import type { Metadata } from "next";
import { FaqView } from "@/feature/faq/views/FaqView";

export const metadata: Metadata = {
  title: "AIOS FAQ: AI Operating System Questions Answered",
  description:
    "25 questions answered about AIOS and AI automation for small businesses. Covers cost, timeline of 1-3 weeks, data security, and how AIOS actually works.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "AIOS FAQ: AI Operating System Questions Answered",
    description:
      "25 questions answered about AIOS and AI automation for small businesses. Covers cost, timeline of 1-3 weeks, data security, and how AIOS actually works.",
    type: "article",
  },
};

export default function FaqPage() {
  return <FaqView />;
}
