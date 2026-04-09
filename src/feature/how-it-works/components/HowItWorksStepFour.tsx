import { HowItWorksPhaseStepCard } from "@/feature/how-it-works/components/HowItWorksPhaseStepCard";

export function HowItWorksStepFour() {
  return (
    <HowItWorksPhaseStepCard
      phaseLabel="FASE 3"
      title="DESIGN"
      footer={{
        pill: "[ You receive ]",
        description:
          "An architectural design document, shared for your review and approval before we build anything.",
      }}
    >
      <p>
        After the contract is signed, we hold a kickoff call and start capturing
        context. Interviews, questionnaires, access to your existing tools and
        documents — everything we need to build the foundation.
      </p>
    </HowItWorksPhaseStepCard>
  );
}
