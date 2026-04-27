import { LandingMetricsPyramidAnimationLazy as LandingMetricsPyramidAnimation } from "@/feature/landing/components/LazyAnimations";

const featureItems = [
  {
    title: "Away-from-Desk Autonomy",
    body: "Run your business from your phone. Full days without a laptop — nothing falls apart.",
  },
  {
    title: "Task Automation",
    body: "60-70% of recurring operational tasks, automated or heavily augmented.",
  },
  {
    title: "Revenue per Person",
    body: "More output, same team. The real advantage isn't headcount — it's what each person produces.",
  },
];

export function LandingMetricsSection() {
  return (
    <section className="border border-brand-gray2 bg-brand-white overflow-hidden mx-auto max-w-11/12 mt-20">
      <div className="grid grid-cols-1 border-b border-brand-gray2 min-[1025px]:grid-cols-2">
        <div className="bg-brand-black p-5 min-[1025px]:flex min-[1025px]:h-57.5 min-[1025px]:items-center min-[1025px]:border-r min-[1025px]:border-brand-gray2 min-[1025px]:px-15 min-[1025px]:py-11">
          <h2 className="text-[clamp(2rem,4vw,3.75rem)] font-semibold uppercase leading-[1.1] tracking-[-0.1875rem] text-brand-white">
            We measure three things for every client:
          </h2>
        </div>
        <div className="hidden min-[1025px]:block min-[1025px]:border-r min-[1025px]:border-brand-gray2" />
      </div>

      <div className="grid grid-cols-1 border-b border-brand-gray2 min-[1025px]:grid-cols-2">
        <div className="order-1 flex flex-col divide-y divide-brand-gray2 border-b border-brand-gray2 min-[1025px]:order-2 min-[1025px]:border-b-0 min-[1025px]:border-r min-[1025px]:border-brand-gray2">
          {featureItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-center gap-2.5 p-5 min-[1025px]:px-17.5 min-[1025px]:py-10"
            >
              <p className="text-[1rem] font-bold text-brand-black">
                {item.title}
              </p>
              <p className="text-[1rem] text-brand-body">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="order-2 flex items-center justify-center p-10 min-[1025px]:order-1 min-[1025px]:border-r min-[1025px]:border-brand-gray2 min-[1025px]:p-0">
          <LandingMetricsPyramidAnimation />
        </div>
      </div>

      <div className="border-b border-brand-gray2">
        {/* Figma order: full-width row first (50% → 90%), then 12-25x | 60-70% */}
        <div className="group border-b border-brand-gray2 bg-brand-teal px-6 py-8 text-brand-white transition-colors duration-300 hover:bg-brand-black tablet:px-10 min-[1025px]:px-15 min-[1025px]:py-14 wide:py-17.5">
          <div className="mx-auto flex flex-col items-center justify-center gap-2.5 tablet:flex-row tablet:gap-6 min-[1025px]:gap-7.5">
            <span className="shrink-0 text-center font-normal uppercase leading-none tracking-tight text-[clamp(2rem,4.2vw+0.5rem,4.25rem)] font-features-['lnum'] transition-colors duration-300 group-hover:text-brand-white min-[1025px]:tracking-[-0.12rem] xl:text-[clamp(4.25rem,3.6vw+2rem,4.9375rem)]">
              50% → 90%
            </span>
            <span className="max-w-md text-center font-normal leading-snug text-[clamp(0.9375rem,1.65vw+0.35rem,2.5rem)] transition-colors duration-300 group-hover:text-brand-white tablet:max-w-none min-[1025px]:text-left min-[1025px]:leading-[1.12] xl:text-[clamp(2.5rem,2.2vw+1rem,3.375rem)] xl:leading-[1.06]">
              output quality with full business context
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 min-[1025px]:grid-cols-2">
          <div className="group flex flex-col items-center gap-2.5 border-b border-brand-gray2 bg-brand-teal px-6 py-8 text-brand-white transition-colors duration-300 hover:bg-brand-black tablet:px-10 min-[1025px]:flex-row min-[1025px]:items-center min-[1025px]:gap-7.5 min-[1025px]:border-b-0 min-[1025px]:border-r min-[1025px]:px-15 min-[1025px]:py-14 wide:py-17.5">
            <span className="text-center font-normal uppercase leading-none tracking-tight text-[clamp(2rem,4.2vw+0.5rem,4.25rem)] transition-colors duration-300 group-hover:text-brand-white min-[1025px]:text-left min-[1025px]:tracking-[-0.12rem] xl:text-[clamp(4.25rem,3.6vw+2rem,4.9375rem)]">
              12-25x
            </span>
            <span className="text-center font-normal leading-snug text-[clamp(0.9375rem,1.65vw+0.35rem,2.5rem)] transition-colors duration-300 group-hover:text-brand-white min-[1025px]:text-left min-[1025px]:leading-[1.12] xl:text-[clamp(2.5rem,2.2vw+1rem,3.375rem)] xl:leading-[1.06]">
              time{" "}
              <br className="hidden min-[1025px]:block" aria-hidden="true" />
              leverage
            </span>
          </div>
          <div className="group flex flex-col items-center gap-2.5 bg-brand-teal px-6 py-8 text-brand-white transition-colors duration-300 hover:bg-brand-black min-[768px]:px-10 min-[1025px]:flex-row min-[1025px]:items-center min-[1025px]:gap-7.5 min-[1025px]:px-15 min-[1025px]:py-14 min-[1280px]:py-[4.375rem]">
            <span className="text-center font-normal uppercase leading-none tracking-tight text-[clamp(2rem,4.2vw+0.5rem,4.25rem)] transition-colors duration-300 group-hover:text-brand-white min-[1025px]:text-left min-[1025px]:tracking-[-0.12rem] xl:text-[clamp(4.25rem,3.6vw+2rem,4.9375rem)]">
              60-70%
            </span>
            <span className="text-center font-normal leading-snug text-[clamp(0.9375rem,1.65vw+0.35rem,2.5rem)] transition-colors duration-300 group-hover:text-brand-white min-[1025px]:text-left min-[1025px]:leading-[1.12] xl:text-[clamp(2.5rem,2.2vw+1rem,3.375rem)] xl:leading-[1.06]">
              tasks{" "}
              <br className="hidden min-[1025px]:block" aria-hidden="true" />
              automated
            </span>
          </div>
        </div>
      </div>

      <div className="px-[1.3125rem] py-[3.1875rem] min-[1025px]:w-1/2 min-[1025px]:border-r min-[1025px]:border-brand-gray2 min-[1025px]:px-17.5 min-[1025px]:py-19.5">
        <p className="text-[1rem] text-brand-black">
          These are methodology targets based on AIOS architecture — derived
          from time-per-task comparisons before and after AIOS deployment — and
          supported by industry research (McKinsey, 2023; Leng et al., 2024).
        </p>
      </div>
    </section>
  );
}
