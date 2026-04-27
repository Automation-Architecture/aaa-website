import { LandingAgentEconomySectionLazy as LandingAgentEconomySection } from "@/feature/landing/components/LazyAnimations";
import { LandingBuildSection } from "@/feature/landing/components/LandingBuildSection";
import { LandingFinalCtaSection } from "@/feature/landing/components/LandingFinalCtaSection";
import { LandingHeroSection } from "@/feature/landing/components/LandingHeroSection";
import { LandingMetricsSection } from "@/feature/landing/components/LandingMetricsSection";
import { LandingMorningRealitySection } from "@/feature/landing/components/LandingMorningRealitySection";
import { LandingOfferSection } from "@/feature/landing/components/LandingOfferSection";
import { LandingOperatorTrapSection } from "@/feature/landing/components/LandingOperatorTrapSection";
import { LandingUseCasesSection } from "@/feature/landing/components/LandingUseCasesSection";

export function LandingView() {
  return (
    <div className="space-y-0 bg-brand-white text-brand-black">
      <LandingHeroSection />
      <LandingMorningRealitySection />
      <LandingAgentEconomySection />
      <LandingOperatorTrapSection />
      <LandingBuildSection />
      <LandingUseCasesSection />
      <LandingMetricsSection />
      <LandingOfferSection />
      <LandingFinalCtaSection />
    </div>
  );
}
