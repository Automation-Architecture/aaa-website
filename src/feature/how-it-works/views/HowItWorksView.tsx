import { PageCTA } from "@/components/common/PageCTA";
import { JsonLd } from "@/components/common/JsonLd";
import { HowItWorksHeroSection } from "@/feature/how-it-works/components/HowItWorksHeroSection";
import { HowItWorksProcessSection } from "@/feature/how-it-works/components/HowItWorksProcessSection";
import { HowItWorksSummarySection } from "@/feature/how-it-works/components/HowItWorksSummarySection";
import {
  howItWorksArticleSchema,
  howItWorksBreadcrumbSchema,
  howItWorksHowToSchema,
} from "@/feature/how-it-works/data";

export function HowItWorksView() {
  return (
    <div className="mx-auto max-w-11/12 bg-white">
      <JsonLd data={howItWorksArticleSchema} />
      <JsonLd data={howItWorksBreadcrumbSchema} />
      <JsonLd data={howItWorksHowToSchema} />
      <article>
        <HowItWorksHeroSection />
        <div className="space-y-7 border-x px-3 py-6 tablet:px-4 tablet:py-8 desktop:px-17.5 desktop:py-42.5">
          <HowItWorksProcessSection />
          <HowItWorksSummarySection />
        </div>
      </article>
      <PageCTA />
    </div>
  );
}
