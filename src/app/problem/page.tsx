import type { Metadata } from "next";
import { ProblemView } from "@/feature/problem/views/ProblemView";

export const metadata: Metadata = {
  title: "The Operator Trap: Founders Stuck in Operations -- AAA",
  description:
    "80% of a founder's week goes to keeping the lights on. 46,700 AI tools exist but none connect. The Operator Trap compounds until you break the pattern.",
  alternates: { canonical: "/problem" },
  openGraph: {
    title: "The Operator Trap: Founders Stuck in Operations",
    description:
      "80% of a founder's week goes to keeping the lights on. 46,700 AI tools exist but none connect. The Operator Trap compounds until you break the pattern.",
    type: "article",
  },
};

export default function ProblemPage() {
  return <ProblemView />;
}
