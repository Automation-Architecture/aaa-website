import { PageCTA } from "@/components/common/PageCTA";
import { TypeformEmbed } from "@/components/common/TypeformEmbed";

export function BlueprintView() {
  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-brand-teal tablet:text-4xl">
          Pipeline IQ: A Free AI Audit Built for Your Business.
        </h1>

        <div className="mt-10">
          <TypeformEmbed />
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-brand-teal">What to Expect</h2>
          <ol className="mt-6 space-y-4 text-brand-teal/80">
            <li>
              <strong>1. Fill out the intake form</strong> (5 minutes) answering
              a few questions about your business.
            </li>
            <li>
              <strong>2. Receive your Blueprint</strong> — A personal, sharable
              report with your automation recommendations.
            </li>
            <li>
              <strong>3. Book a consultation</strong> (optional) to walk through
              your Blueprint together.
            </li>
          </ol>
        </section>
      </article>

      <PageCTA />
    </>
  );
}
