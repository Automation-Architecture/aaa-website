import { JsonLd } from "@/components/common/JsonLd";
import { FaqHeroSection } from "@/feature/faq/components/FaqHeroSection";
import { FaqQuestionsSection } from "@/feature/faq/components/FaqQuestionsSection";
import { FaqFinalCtaSection } from "@/feature/faq/components/FaqFinalCtaSection";
import { faqPageSchema, faqBreadcrumbSchema } from "@/feature/faq/data";

export function FaqView() {
  return (
    <div className="bg-white mx-auto max-w-11/12">
      <JsonLd data={faqPageSchema} />
      <JsonLd data={faqBreadcrumbSchema} />
      <FaqHeroSection />
      <article>
        <div className="border-x px-3 py-6 tablet:px-4 tablet:py-8 desktop:px-17.5 desktop:py-42.5">
          <FaqQuestionsSection />
        </div>
        <FaqFinalCtaSection />
      </article>
    </div>
  );
}
