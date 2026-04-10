import { AboutView } from "@/feature/about/views/AboutView";
import { aboutMetadata } from "@/lib/page-metadata";

export const metadata = aboutMetadata;

export default function AboutPage() {
  return <AboutView />;
}
