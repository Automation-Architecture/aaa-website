import type { Metadata } from "next";
import { SolutionView } from "@/feature/solution/views/SolutionView";

export const metadata: Metadata = {
  title: "AIOS: The AI Operating System Built for Your Business",
  description:
    "An AIOS gives your business 3 connected layers: a Context Data Engine, Dashboard Intelligence, and Automated Task Management. Output quality jumps 50% to 90%.",
  alternates: { canonical: "/solution" },
  openGraph: {
    title: "AIOS: The AI Operating System Built for Your Business",
    description:
      "An AIOS gives your business 3 connected layers: a Context Data Engine, Dashboard Intelligence, and Automated Task Management. Output quality jumps 50% to 90%.",
    type: "article",
  },
};

export default function SolutionPage() {
  return <SolutionView />;
}
