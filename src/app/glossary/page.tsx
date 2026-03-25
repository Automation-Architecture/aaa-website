import type { Metadata } from "next";
import { GlossaryView } from "@/feature/glossary/views/GlossaryView";

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
  return <GlossaryView />;
}
