import { UseCasesView } from "@/feature/use-cases/views/UseCasesView";
import { useCasesMetadata } from "@/lib/page-metadata";

export const metadata = useCasesMetadata;

export default function UseCasesPage() {
  return <UseCasesView />;
}
