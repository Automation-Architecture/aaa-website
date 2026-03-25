import type { Metadata } from "next";
import { TermsView } from "@/feature/terms/views/TermsView";

export const metadata: Metadata = {
  title: "Terms of Service — Automation Architecture AI",
  description:
    "Terms of service governing your use of the Automation Architecture AI website, AI Blueprint, and related content.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — Automation Architecture AI",
    description:
      "Terms of service governing your use of the Automation Architecture AI website.",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsView />;
}
