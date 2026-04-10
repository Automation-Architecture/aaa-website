import { FaqView } from "@/feature/faq/views/FaqView";
import { faqMetadata } from "@/lib/page-metadata";

export const metadata = faqMetadata;

export default function FaqPage() {
  return <FaqView />;
}
