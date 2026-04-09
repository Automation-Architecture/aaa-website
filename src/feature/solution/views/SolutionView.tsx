import { JsonLd } from "@/components/common/JsonLd";
import { PageCTA } from "@/components/common/PageCTA";
import { SolutionHeroSection } from "@/feature/solution/components/SolutionHeroSection";
import { SolutionIntroSection } from "@/feature/solution/components/SolutionIntroSection";
import { SolutionWhatIsSection } from "@/feature/solution/components/SolutionWhatIsSection";
import { SolutionVideoBreakSection } from "@/feature/solution/components/SolutionVideoBreakSection";
import { SolutionMathSection } from "@/feature/solution/components/SolutionMathSection";
import { SolutionCompoundSection } from "@/feature/solution/components/SolutionCompoundSection";
import { SolutionScopeSection } from "@/feature/solution/components/SolutionScopeSection";
import { articleSchema, serviceSchema, breadcrumbSchema } from "@/feature/solution/data";

export function SolutionView() {
  return (
    <div className="bg-white mx-auto max-w-11/12">
      <JsonLd data={articleSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <article>
        <SolutionHeroSection />
        <SolutionIntroSection />
        <SolutionWhatIsSection />
        <SolutionVideoBreakSection />
        <SolutionMathSection />
        <SolutionCompoundSection />
        <SolutionScopeSection />
      </article>
      <PageCTA />
    </div>
  );
}
