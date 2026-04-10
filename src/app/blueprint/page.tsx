import { BlueprintView } from "@/feature/blueprint/views/BlueprintView";
import { blueprintMetadata } from "@/lib/page-metadata";

export const metadata = blueprintMetadata;

export default function BlueprintPage() {
  return <BlueprintView />;
}
