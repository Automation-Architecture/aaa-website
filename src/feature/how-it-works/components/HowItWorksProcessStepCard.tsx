export type HowItWorksProcessStep = {
  phase: string;
  title: string;
  body: string;
  receive: string;
};

type HowItWorksProcessStepCardProps = {
  step: HowItWorksProcessStep;
};

export function HowItWorksProcessStepCard({
  step,
}: HowItWorksProcessStepCardProps) {
  return (
    <article className="overflow-hidden rounded-[0.625rem] border border-brand-gray2 bg-brand-white">
      <div className="px-5 py-4">
        <span className="inline-flex rounded-[0.3125rem] bg-brand-teal px-2.5 py-1 text-xs font-bold uppercase tracking-[0.05em] text-brand-lime">
          {step.phase}
        </span>
        <h3 className="mt-3 text-[1.75rem] font-semibold uppercase leading-none tracking-[-0.03em] text-brand-heading tablet:text-[2rem]">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-gray tablet:text-base">
          {step.body}
        </p>
      </div>
      <div className="border-t border-brand-gray2 bg-[#f6f6f6] px-5 py-3.5">
        <p className="text-sm font-semibold text-brand-black">[ You Receive ]</p>
        <p className="mt-1 text-sm leading-relaxed text-brand-gray tablet:text-base">
          {step.receive}
        </p>
      </div>
    </article>
  );
}
