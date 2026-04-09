const TIER_ITEMS = [
  {
    title: "Full AIOS",
    points: [
      "Complete AI Operating System with context, data, intelligence, and execution layers.",
      "Best for founders ready to redesign operations end-to-end.",
      "Typical delivery timeline: about 3 weeks.",
    ],
  },
  {
    title: "AI Automation",
    points: [
      "One focused automation to eliminate a specific operational bottleneck.",
      "Best for teams that want immediate wins before scaling broader systems.",
      "Typical delivery timeline: about 1 week.",
    ],
  },
];

export function HowItWorksTwoTiersSection() {
  return (
    <section className="border border-brand-gray2 bg-brand-white">
      <div className="border-b border-brand-gray2 px-6 py-5 tablet:px-8">
        <h2 className="text-xl font-semibold uppercase tracking-[-0.03em] text-brand-heading tablet:text-[1.75rem]">
          Two Tiers
        </h2>
      </div>
      <div className="grid gap-0 desktop:grid-cols-2">
        {TIER_ITEMS.map((tier, index) => (
          <article
            key={tier.title}
            className={`px-6 py-7 tablet:px-8 desktop:px-10 ${index === 0 ? "border-b border-brand-gray2 desktop:border-b-0 desktop:border-r" : ""}`}
          >
            <h3 className="inline-flex items-center rounded-[0.375rem] bg-brand-teal px-3 py-1.5 text-base font-semibold text-brand-lime">
              {tier.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-gray tablet:text-base">
              {tier.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
