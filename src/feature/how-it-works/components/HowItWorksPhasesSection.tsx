const PHASES = [
  {
    phase: "PHASE 1",
    title: "Idea",
    description:
      "You fill out a short intake form. We turn that into a clear AI Blueprint tailored to your industry and priorities.",
    deliverable: "A practical blueprint showing where AI should start in your business.",
  },
  {
    phase: "PHASE 2",
    title: "Consult",
    description:
      "We align on the bottleneck to solve first and choose implementation scope based on your current stage.",
    deliverable: "A prioritized rollout path and confirmed success metrics.",
  },
  {
    phase: "PHASE 3",
    title: "Design",
    description:
      "We map processes, tool stack, and data dependencies into an architecture your team can run every day.",
    deliverable: "System blueprint ready for build and integration.",
  },
  {
    phase: "PHASE 4",
    title: "Build",
    description:
      "We implement agents, automations, and logic in production-ready workflows adapted to your context.",
    deliverable: "Working AI workflows connected to your real operations.",
  },
  {
    phase: "PHASE 5",
    title: "Test",
    description:
      "We validate output quality and edge cases, then refine prompts, routing, and safeguards before go-live.",
    deliverable: "A stable system with verified operational behavior.",
  },
  {
    phase: "PHASE 6",
    title: "Deploy",
    description:
      "The system is launched inside your stack with handoff guidance so your team can adopt it without friction.",
    deliverable: "Live AI system embedded into day-to-day execution.",
  },
  {
    phase: "PHASE 7",
    title: "Ongoing Partnership",
    description:
      "We continuously improve based on live usage, expanding intelligence and automation as your company grows.",
    deliverable: "Compounding operational gains month over month.",
  },
];

export function HowItWorksPhasesSection() {
  return (
    <section className="space-y-5">
      {PHASES.map((item) => (
        <article
          key={item.phase}
          className="grid overflow-hidden rounded-[0.625rem] border border-brand-gray2 bg-brand-white desktop:grid-cols-[10.5rem_minmax(0,1fr)]"
        >
          <div className="flex items-start border-b border-brand-gray2 bg-brand-surface px-5 py-4 desktop:border-b-0 desktop:border-r">
            <span className="inline-flex rounded-[0.3125rem] bg-brand-teal px-2.5 py-1 text-xs font-bold tracking-[0.04em] text-brand-lime">
              {item.phase}
            </span>
          </div>
          <div className="px-5 py-5 tablet:px-7 desktop:px-8 desktop:py-6">
            <h3 className="text-2xl font-semibold uppercase tracking-[-0.03em] text-brand-heading tablet:text-[2rem]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray tablet:text-base">
              {item.description}
            </p>
            <div className="mt-4 rounded-[0.5rem] bg-[#f7f7f7] px-4 py-3">
              <p className="text-sm font-semibold text-brand-black">
                [ You Receive ]
              </p>
              <p className="mt-1 text-sm leading-relaxed text-brand-gray tablet:text-base">
                {item.deliverable}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
