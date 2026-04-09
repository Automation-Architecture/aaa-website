const SUMMARY_COLUMNS = [
  {
    title: "Idea",
    points: ["AI Blueprint", "Industry-specific", "No sales call required"],
  },
  {
    title: "Consult",
    points: ["Priority bottleneck", "Tier recommendation", "Timeline alignment"],
  },
  {
    title: "Design",
    points: ["System architecture", "Data + tool map", "Execution plan"],
  },
  {
    title: "Build",
    points: ["Automations shipped", "Agent behavior setup", "Operational handoff"],
  },
  {
    title: "Test",
    points: ["Quality checks", "Edge-case handling", "Refinements"],
  },
  {
    title: "Deploy",
    points: ["Go-live support", "Team onboarding", "Live workflow tracking"],
  },
  {
    title: "Evolving",
    points: ["Continuous optimization", "New growth layers", "Long-term partnership"],
  },
];

export function HowItWorksSummarySection() {
  return (
    <section className="overflow-hidden rounded-[0.625rem] border border-brand-gray2 bg-brand-surface">
      <div className="bg-[#2b2c2f] px-6 py-4 tablet:px-8">
        <h2 className="text-xl font-semibold uppercase tracking-[-0.03em] text-white tablet:text-[1.75rem]">
          Summary
        </h2>
      </div>
      <div className="grid gap-0 tablet:grid-cols-2 desktop:grid-cols-4">
        {SUMMARY_COLUMNS.map((column, index) => (
          <div
            key={column.title}
            className={`px-5 py-4 ${index % 4 !== 3 ? "desktop:border-r desktop:border-brand-gray2" : ""} ${index < 4 ? "desktop:border-b desktop:border-brand-gray2" : ""} ${index % 2 === 0 ? "tablet:border-r tablet:border-brand-gray2" : ""} ${index < 6 ? "tablet:border-b tablet:border-brand-gray2" : ""}`}
          >
            <h3 className="text-base font-semibold uppercase text-brand-heading">
              {column.title}
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-brand-gray">
              {column.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
