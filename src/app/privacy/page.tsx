import type { Metadata } from "next";
import { PrivacyView } from "@/feature/privacy/views/PrivacyView";

export const metadata: Metadata = {
  title: "Privacy Policy — Automation Architecture AI",
  description:
    "How Automation Architecture AI collects, uses, and protects your information. Covers Typeform, Google Analytics, CookieYes, and your data rights.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy — Automation Architecture AI",
    description:
      "How Automation Architecture AI collects, uses, and protects your information.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
