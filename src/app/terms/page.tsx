import { TermsView } from "@/feature/terms/views/TermsView";
import { termsMetadata } from "@/lib/page-metadata";

export const metadata = termsMetadata;

export default function TermsPage() {
  return <TermsView />;
}
