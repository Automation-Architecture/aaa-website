import Image from "next/image";

export function ProblemCeilingSection() {
  return (
    <section id="section-the-ceiling" className="border-b border-brand-gray2">
      <div className="bg-brand-black px-5 py-5 text-center tablet:px-8 tablet:py-6 desktop:hidden">
        <h2
          id="the-ceiling"
          className="text-2xl font-medium uppercase tracking-[-0.04em] text-brand-white"
        >
          The Ceiling
        </h2>
      </div>

      <div className="desktop:hidden">
        <div className="mx-5 border-x border-brand-gray2 px-5 pb-15 pt-7 tablet:mx-8 tablet:px-7 tablet:py-8">
          <div className="tablet:grid tablet:grid-cols-[minmax(0,1fr)_16.5rem] tablet:items-start tablet:gap-6">
            <Image
              src="/images/i_tried_using.png"
              alt="I've tried using AI in my business and hit a wall."
              width={680}
              height={220}
              className="h-auto w-full"
            />
            <Image
              src="/images/50_90_paper.png"
              alt="Output quality increases from 50% to around 90%."
              width={560}
              height={640}
              className="mt-5 hidden h-auto w-full tablet:mt-0 tablet:block"
            />
          </div>

          <p className="mt-6 font-bold leading-[1.3] text-brand-teal">
            Most founders hit this wall around the same point.
          </p>
          <p className="mt-4 leading-[1.3] text-brand-gray">
            Chatbots get you maybe fifty percent of the way there. You paste in
            context every session. You repeat yourself. You get output
            that&apos;s close but never quite right - because the AI
            doesn&apos;t know your team, your priorities, your products, or your
            decisions.
          </p>

          <div className="mt-6 rounded-[1.25rem] bg-brand-teal px-5 py-6 text-brand-white">
            <p className="text-[2rem] font-medium leading-[1.1] tracking-[-0.02em]">
              The AIOS methodology
            </p>
            <p className="mt-3 leading-[1.3]">
              is designed to push output quality - measured as the percentage of
              deliverables usable with minimal editing - from roughly fifty
              percent to ninety percent once full business context is in place.
              Databricks found the same thing: even top-tier LLMs can&apos;t
              exceed ~80% accuracy without structured context (Leng et al.,
              2024).
            </p>
          </div>

          <Image
            src="/images/50_90_paper.png"
            alt="Output quality increases from 50% to around 90%."
            width={560}
            height={640}
            className="mt-6 h-auto w-full tablet:hidden"
          />

          <p className="mt-6 leading-[1.3] text-2xl  text-brand-gray">
            The difference isn&apos;t the model. It&apos;s the architecture
            underneath it.
          </p>
        </div>
      </div>

      <div className="hidden desktop:grid desktop:grid-cols-[27.8125rem_1fr]">
        <div className="border-r border-brand-gray2 bg-brand-white desktop:flex desktop:flex-col">
          <div className="bg-brand-black px-10 py-10">
            <h2 className="text-4xl font-bold uppercase leading-[1.05] tracking-[-0.03em] text-brand-white">
              The Ceiling
            </h2>
          </div>
          <div className="mt-auto px-10 pb-14 pt-24 min-[1200px]:pt-34">
            <p className="text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-brand-gray">
              The difference isn&apos;t the model. It&apos;s the architecture
              underneath it.
            </p>
          </div>
        </div>

        <div className="min-w-0 border-r border-brand-gray2 overflow-hidden">
          <div className="px-16 py-16 min-[1200px]:px-20 min-[1200px]:py-17">
            <div className="min-[1400px]:grid min-[1400px]:grid-cols-[44rem] min-[1400px]:gap-x-8 min-[1800px]:grid-cols-[44rem_33.5rem]">
              <div>
                <Image
                  src="/images/i_tried_using.png"
                  alt="I've tried using AI in my business and hit a wall."
                  width={680}
                  height={220}
                  className="h-auto w-full max-w-170"
                />

                <p className="mt-8 max-w-155 text-xl font-bold leading-[1.35] text-brand-teal">
                  Most founders hit this wall around the same point.
                </p>
                <p className="mt-4 max-w-155 text-xl leading-[1.35] text-brand-gray">
                  Chatbots get you maybe fifty percent of the way there. You
                  paste in context every session. You repeat yourself. You get
                  output that&apos;s close but never quite right - because the
                  AI doesn&apos;t know your team, your priorities, your
                  products, or your decisions.
                </p>

                <div className="relative z-10 mt-8 max-w-176 rounded-[1.25rem] bg-brand-teal px-12.5 py-10 text-brand-white min-[1400px]:pr-28">
                  <p className="max-w-120 text-[2rem] font-medium leading-[1.1] tracking-[-0.02em]">
                    The AIOS methodology
                  </p>
                  <p className="mt-3 max-w-lg text-xl leading-[1.35]">
                    is designed to push output quality - measured as the
                    percentage of deliverables usable with minimal editing -
                    from roughly fifty percent to ninety percent once full
                    business context is in place. Databricks found the same
                    thing: even top-tier LLMs can&apos;t exceed ~80% accuracy
                    without structured context (Leng et al., 2024).
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-end min-[1400px]:ml-0 min-[1400px]:mt-0 min-[1400px]:justify-start min-[1400px]:self-start min-[1800px]:-ml-30 min-[1800px]:self-end">
                <Image
                  src="/images/50_90_paper.png"
                  alt="Output quality increases from 50% to around 90%."
                  width={560}
                  height={640}
                  className="relative z-20 h-auto w-full max-w-134"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
