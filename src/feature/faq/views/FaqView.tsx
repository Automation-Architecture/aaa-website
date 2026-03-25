import { JsonLd } from "@/components/common/JsonLd";
import { PageCTA } from "@/components/common/PageCTA";
import { FaqHeroSection } from "@/feature/faq/components/FaqHeroSection";
import { FaqQuestionsSection } from "@/feature/faq/components/FaqQuestionsSection";
import { faqPageSchema, faqBreadcrumbSchema } from "@/feature/faq/data";

export function FaqView() {
  return (
    <>
      <JsonLd data={faqPageSchema} />
      <JsonLd data={faqBreadcrumbSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <FaqHeroSection />

        <div className="mt-8">
          <FaqQuestionsSection />
        </div>
      </article>

      <PageCTA />
    </>
  );
}
