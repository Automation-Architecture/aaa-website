import { HowItWorksPhaseStepCard } from "@/feature/how-it-works/components/HowItWorksPhaseStepCard";

export function HowItWorksStepFive() {
  return (
    <HowItWorksPhaseStepCard
      phaseLabel="FASE 4"
      title="BUILD"
      footer={{
        pill: "[ Timeline ]",
        description:
          "~1 week for AI Automation. ~3 weeks for Full AIOS.",
      }}
    >
      <p>
        Our team builds the system according to the approved design. We
        don&apos;t build from scratch — we use proven, pre-built modules and
        architecture patterns, then customize to your business. That&apos;s why
        timelines are weeks, not months.
      </p>
      <p>
        Throughout the build, you get weekly Loom video updates, access to the
        project board, and a dedicated support channel for questions.
      </p>
    </HowItWorksPhaseStepCard>
  );
}
