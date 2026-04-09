import { HowItWorksPhaseStepCard } from "@/feature/how-it-works/components/HowItWorksPhaseStepCard";

export function HowItWorksStepSeven() {
  return (
    <HowItWorksPhaseStepCard
      phaseLabel="FASE 6"
      title="DEPLOY"
      footer={{
        pill: "[ You receive ]",
        description:
          "A deployed, running system plus full documentation covering every workflow, every automation, and how to use it all.",
      }}
    >
      <p>
        After resolving all feedback from testing, the system goes live in your
        environment.
      </p>
      <p>
        For AI Automation: single deployment — your automation is running and
        producing results from day one. For Full AIOS: gradual rollout, layer by
        layer — each layer gets its own Loom demo, feedback cycle, and
        documentation. This staged approach means you&apos;re never overwhelmed
        by a massive system change.
      </p>
    </HowItWorksPhaseStepCard>
  );
}
