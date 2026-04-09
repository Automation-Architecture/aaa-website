import { HowItWorksPhaseStepCard } from "@/feature/how-it-works/components/HowItWorksPhaseStepCard";

export function HowItWorksStepSix() {
  return (
    <HowItWorksPhaseStepCard
      phaseLabel="FASE 5"
      title="TEST"
      footer={{
        pill: "[ You receive ]",
        description:
          "A Loom demo walkthrough of the completed system. You watch it on your own time, flag anything that needs adjustment, and we incorporate your feedback before deployment. Nothing goes live until you're satisfied.",
      }}
    >
      <p>
        We test everything internally first. Every automation, every data
        connection, every workflow — verified and stress-tested. All issues are
        identified and resolved before you see anything.
      </p>
    </HowItWorksPhaseStepCard>
  );
}
