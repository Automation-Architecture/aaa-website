import type { Metadata } from "next";
import { UseCasesView } from "@/feature/use-cases/views/UseCasesView";

export const metadata: Metadata = {
  title: "AI Automation Use Cases: Real Outcomes From Real Businesses",
  description:
    "74 calls analyzed overnight into 1 morning brief. 15 hours of weekly lead gen reduced to zero. 7 real outcomes from businesses running on AIOS systems.",
  alternates: { canonical: "/use-cases" },
  openGraph: {
    title: "AI Automation Use Cases: Real Outcomes From Real Businesses",
    description:
      "74 calls analyzed overnight into 1 morning brief. 15 hours of weekly lead gen reduced to zero. 7 real outcomes from businesses running on AIOS systems.",
    type: "article",
  },
};

export default function UseCasesPage() {
  return <UseCasesView />;
}
