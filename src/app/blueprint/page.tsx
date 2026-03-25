import type { Metadata } from "next";
import { BlueprintView } from "@/feature/blueprint/views/BlueprintView";

export const metadata: Metadata = {
  title: "Get Your Free AI Blueprint -- Automation Architecture AI",
  description:
    "AI automation recommendations tailored to your industry. Fill out a 5-minute intake form and receive a personalized Blueprint. Free, no obligation.",
  alternates: { canonical: "/blueprint" },
  openGraph: {
    title: "Get Your Free AI Blueprint -- Automation Architecture AI",
    description:
      "AI automation recommendations tailored to your industry. Fill out a 5-minute intake form and receive a personalized Blueprint. Free, no obligation.",
    type: "website",
  },
};

export default function BlueprintPage() {
  return <BlueprintView />;
}
