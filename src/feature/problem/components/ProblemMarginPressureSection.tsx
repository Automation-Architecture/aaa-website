export function ProblemMarginPressureSection() {
  return (
    <section
      id="section-the-margin-pressure"
      className="border-b border-brand-gray2"
    >
      <div className="bg-brand-black px-5 py-5 text-center tablet:px-8 tablet:py-6 desktop:hidden">
        <h2
          id="the-margin-pressure"
          className="text-2xl font-medium uppercase tracking-[-0.04em] text-brand-white"
        >
          The Margin Pressure
        </h2>
      </div>

      <div className="desktop:hidden">
        <div className="mx-5 border-x border-brand-gray2 px-5 py-7 tablet:mx-8 tablet:px-7 tablet:py-8">
          <p className="leading-[1.3] text-brand-gray">
            Meanwhile, AI is compressing costs across every industry.{" "}
            <span className="font-bold text-brand-teal">McKinsey</span> puts it
            at 60 to 70% - that&apos;s the share of employee tasks that
            generative AI could automate.
          </p>
          <p className="mt-4 font-bold leading-[1.3] text-brand-teal">
            That&apos;s not a projection about some distant future - it&apos;s
            the math that&apos;s already reshaping pricing.
          </p>
          <div className="mt-6 rounded-[0.625rem] bg-brand-offwhite px-5 py-6">
            <span className="block text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-brand-heading">
              In practice:
            </span>
            <p className="mt-4 leading-[1.3] text-brand-gray">
              Creative agencies that charged $5,000 for an ad campaign now face
              AI-assisted competitors delivering fifty ads for $1,000.
            </p>
            <p className="mt-3 leading-[1.3] text-brand-gray">
              Service businesses that took a week to produce a deliverable now
              compete with firms that do it in a day.
            </p>
          </div>
          <p className="mt-6 leading-[1.3] text-brand-gray">
            Businesses stuck in operational maintenance won&apos;t have the
            bandwidth to pivot when margin pressure arrives. And it&apos;s
            arriving. The ones who can adapt will have the infrastructure to
            move quickly. The rest will be too busy keeping the lights on to
            respond.
          </p>
        </div>
      </div>

      <div className="hidden desktop:grid desktop:grid-cols-[27.8125rem_1fr]">
        <div className="border-r border-brand-gray2 bg-brand-white desktop:flex desktop:flex-col">
          <div className="bg-brand-black px-10 py-10">
            <h2 className="text-4xl font-bold uppercase leading-[1.05] tracking-[-0.03em] text-brand-white">
              The Margin
              <br />
              Pressure
            </h2>
          </div>
          <div className="mt-auto px-10 pb-14 pt-24 min-[1200px]:pt-34">
            <p className="text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-brand-gray">
              The math is changing - fast.
            </p>
          </div>
        </div>

        <div className="min-w-0 border-r border-brand-gray2">
          <div className="flex flex-wrap items-start gap-8 px-16 py-16 min-[1200px]:px-20 min-[1200px]:py-17 min-[1600px]:flex-nowrap">
            <div className="min-w-0 flex-1 basis-156 min-[1600px]:basis-0">
              <p className="text-xl leading-[1.35] text-brand-gray">
                Meanwhile, AI is compressing costs across every industry.{" "}
                <span className="font-bold text-brand-teal pr-1">McKinsey</span>{" "}
                puts it at 60 to 70% - that&apos;s the share of employee tasks
                that generative AI could automate.
              </p>
              <p className="mt-6 text-xl font-bold leading-[1.35] text-brand-teal">
                That&apos;s not a projection about some distant future -
                it&apos;s the math that&apos;s already reshaping pricing.
              </p>
              <p className="mt-10 max-w-148 text-xl leading-[1.35] text-brand-gray">
                Businesses stuck in operational maintenance won&apos;t have the
                bandwidth to pivot when margin pressure arrives. And it&apos;s
                arriving. The ones who can adapt will have the infrastructure to
                move quickly. The rest will be too busy keeping the lights on to
                respond.
              </p>
            </div>

            <aside className="w-full rounded-[0.625rem] border border-brand-offwhite bg-brand-offwhite px-7.5 py-12.5 min-[1200px]:w-131 min-[1200px]:min-h-85.5 min-[1600px]:shrink-0">
              <span className="block text-[2rem] font-medium leading-[1.1] tracking-[-0.02em] text-brand-heading">
                In practice:
              </span>
              <div className="mt-8 space-y-5 text-xl leading-[1.35] text-brand-gray">
                <p>
                  Creative agencies that charged $5,000 for an ad campaign now
                  face AI-assisted competitors delivering fifty ads for $1,000.
                </p>
                <p>
                  Service businesses that took a week to produce a deliverable
                  now compete with firms that do it in a day.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
