import { ValueView } from "@/feature/value/views/ValueView";
import { valueMetadata } from "@/lib/page-metadata";

export const metadata = valueMetadata;

export default function ValuePage() {
  return <ValueView />;
}
