import { LandingView } from "@/feature/landing/views/LandingView";
import { homeMetadata } from "@/lib/page-metadata";

export const metadata = homeMetadata;

export default function HomePage() {
  return <LandingView />;
}
