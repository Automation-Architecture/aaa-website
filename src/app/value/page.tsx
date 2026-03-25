import type { Metadata } from "next";
import { ValueView } from "@/feature/value/views/ValueView";

export const metadata: Metadata = {
  title: "The ROI of AI Automation: Bandwidth Math for Founders -- AAA",
  description:
    "80% of your week goes to maintenance. An AIOS inverts that to 20-30%. Do the math on what recovered bandwidth means for your specific business.",
  alternates: { canonical: "/value" },
  openGraph: {
    title: "The ROI of AI Automation: Bandwidth Math for Founders",
    description:
      "80% of your week goes to maintenance. An AIOS inverts that to 20-30%. Do the math on what recovered bandwidth means for your specific business.",
    type: "article",
  },
};

export default function ValuePage() {
  return <ValueView />;
}
