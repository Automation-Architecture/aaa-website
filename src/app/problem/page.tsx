import { ProblemView } from "@/feature/problem/views/ProblemView";
import { problemMetadata } from "@/lib/page-metadata";

export const metadata = problemMetadata;

export default function ProblemPage() {
  return <ProblemView />;
}
