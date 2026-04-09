import {
  HowItWorksProcessStepCard,
  type HowItWorksProcessStep,
} from "@/feature/how-it-works/components/HowItWorksProcessStepCard";

const PROCESS_STEPS: HowItWorksProcessStep[] = [
  {
    phase: "Phase 1",
    title: "Idea",
    body: "You submit a short intake form. We turn your context into a practical AI Blueprint tailored to your industry.",
    receive: "A free AI Blueprint with clear, actionable automation opportunities.",
  },
  {
    phase: "Phase 2",
    title: "Consult",
    body: "We align on your highest-value bottleneck and define the right implementation tier for your current stage.",
    receive: "A focused rollout scope with timeline and success criteria.",
  },
  {
    phase: "Phase 3",
    title: "Design",
    body: "We architect workflows, data paths, and system behavior around your team and operating reality.",
    receive: "A production-ready system design document.",
  },
  {
    phase: "Phase 4",
    title: "Build",
    body: "We implement the automation logic, integrations, and operational flows directly in your business stack.",
    receive: "Working AI workflows connected to your tools.",
  },
  {
    phase: "Phase 5",
    title: "Test",
    body: "We validate quality, stress edge cases, and refine behavior until the system is stable for day-to-day use.",
    receive: "A validated, resilient system ready to go live.",
  },
  {
    phase: "Phase 6",
    title: "Deploy",
    body: "We launch the system and hand over a clean operating rhythm so your team can run with confidence.",
    receive: "A live AI system embedded into your business operations.",
  },
  {
    phase: "Phase 7",
    title: "Ongoing Partnership",
    body: "We continue optimizing and extending the system as your business grows and priorities evolve.",
    receive: "Compounding gains from continuous improvement.",
  },
];

export function HowItWorksProcessSection() {
  return (
    <section className="border border-brand-gray2 bg-brand-white">
      <div className="grid desktop:grid-cols-[14.25rem_minmax(0,1fr)]">
        <aside className="relative border-b border-brand-gray2 px-5 py-6 desktop:border-b-0 desktop:border-r desktop:px-6 desktop:py-8">
          <div className="desktop:sticky desktop:top-20">
            <h2 className="text-[1.875rem] font-medium leading-[0.95] tracking-[-0.03em] text-brand-heading">
              You clicked the button.
              <br />
              Now what?
            </h2>
            <p className="mt-4 max-w-[10.625rem] text-[0.75rem] leading-[1.4] text-brand-gray">
              Here&apos;s the path from first contact to running system - with
              zero chaos.
            </p>
          </div>

          <span
            className="absolute -right-[0.625rem] top-[7.875rem] hidden h-[2.75rem] w-[1.875rem] bg-brand-teal [mask-image:url('/icons/right-arrow.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] desktop:block"
            aria-hidden
          />
        </aside>

        <div className="space-y-4 px-4 py-4 tablet:px-5 tablet:py-5 desktop:px-4 desktop:py-4">
          {PROCESS_STEPS.map((step) => (
            <HowItWorksProcessStepCard key={step.phase} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
