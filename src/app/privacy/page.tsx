import { PrivacyView } from "@/feature/privacy/views/PrivacyView";
import { privacyMetadata } from "@/lib/page-metadata";

export const metadata = privacyMetadata;

export default function PrivacyPage() {
  return <PrivacyView />;
}
