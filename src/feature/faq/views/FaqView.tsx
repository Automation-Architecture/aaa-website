import { JsonLd } from "@/components/common/JsonLd";
import { FaqHeroSection } from "@/feature/faq/components/FaqHeroSection";
import { FaqQuestionsSection } from "@/feature/faq/components/FaqQuestionsSection";
import { FaqFinalCtaSection } from "@/feature/faq/components/FaqFinalCtaSection";
import { faqPageSchema, faqBreadcrumbSchema } from "@/feature/faq/data";

export function FaqView() {
  return (
    <div className="bg-brand-white">
      <JsonLd data={faqPageSchema} />
      <JsonLd data={faqBreadcrumbSchema} />

      <article className="mx-auto w-full max-w-440 px-4 py-8 tablet:py-10 desktop:px-10 min-[1440px]:px-[5rem]">
        <FaqHeroSection />
        <div className="border-x px-3 py-6 tablet:px-[1rem] tablet:py-[2rem] desktop:px-17.5 desktop:py-[10.625rem]">
          <FaqQuestionsSection />
        </div>
        <FaqFinalCtaSection />
      </article>
    </div>
  );
}
