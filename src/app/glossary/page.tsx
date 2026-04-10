import { GlossaryView } from "@/feature/glossary/views/GlossaryView";
import { glossaryMetadata } from "@/lib/page-metadata";

export const metadata = glossaryMetadata;

export default function GlossaryPage() {
  return <GlossaryView />;
}
