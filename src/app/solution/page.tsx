import { SolutionView } from "@/feature/solution/views/SolutionView";
import { solutionMetadata } from "@/lib/page-metadata";

export const metadata = solutionMetadata;

export default function SolutionPage() {
  return <SolutionView />;
}
