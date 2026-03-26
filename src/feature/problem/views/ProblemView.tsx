import { JsonLd } from "@/components/common/JsonLd";
import { PageCTA } from "@/components/common/PageCTA";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { ProblemHeroSection } from "@/feature/problem/components/ProblemHeroSection";
import { ProblemPatternSection } from "@/feature/problem/components/ProblemPatternSection";
import { ProblemSplitSection } from "@/feature/problem/components/ProblemSplitSection";
import { ProblemTrajectorySection } from "@/feature/problem/components/ProblemTrajectorySection";
import { ProblemMarginPressureSection } from "@/feature/problem/components/ProblemMarginPressureSection";
import { ProblemOverwhelmSection } from "@/feature/problem/components/ProblemOverwhelmSection";
import { ProblemCeilingSection } from "@/feature/problem/components/ProblemCeilingSection";
import { ProblemBridgeSection } from "@/feature/problem/components/ProblemBridgeSection";
import { RouteNames } from "@/constants";
import { articleSchema, breadcrumbSchema } from "@/feature/problem/data";

export function ProblemView() {
  return (
    <div className="bg-white mx-auto border border-brand-gray2 max-w-11/12">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <ProblemHeroSection />
      <ProblemPatternSection />
      <ProblemSplitSection />
      <ProblemTrajectorySection />
      <ProblemMarginPressureSection />
      <ProblemOverwhelmSection />
      <ProblemCeilingSection />
      <ProblemBridgeSection />
      <PageCTA />
    </div>
  );
}
