import { Section } from "@/components/common/Section";

export function LandingHero() {
  return (
    <Section className="bg-brand-cream">
      <div className="max-w-4xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-teal">
          Landing Baseline
        </p>
        <h1 className="hero-headline text-4xl font-semibold text-brand-black tablet:text-5xl">
          How to prepare your business for the agent-to-agent economy
        </h1>
        <p className="mt-6 max-w-2xl text-brand-body">
          This is the clean homepage skeleton in `nextjs-base`, structured for
          phased section migration.
        </p>
      </div>
    </Section>
  );
}
