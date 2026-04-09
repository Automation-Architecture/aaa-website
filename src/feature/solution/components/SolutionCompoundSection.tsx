import Image from "next/image";

export function SolutionCompoundSection() {
  return (
    <section className="border-b border-l border-r border-brand-gray2 bg-brand-surface">
      <div className="flex flex-col desktop:flex-row">
        <div className="flex min-h-[7.25rem] items-center bg-brand-black px-5 py-6 tablet:min-h-[10rem] tablet:px-10 desktop:min-h-[14.375rem] desktop:w-1/2 desktop:px-[3.75rem]">
          <h2 className="text-[2rem] font-medium uppercase leading-[1.05] tracking-[-0.06em] text-white tablet:text-[2.5rem] desktop:text-[3.75rem]">
            Compound Intelligence
          </h2>
        </div>
        <div className="hidden desktop:block desktop:min-h-[14.375rem] desktop:w-1/2 desktop:border-l desktop:border-brand-gray2" />
      </div>

      <div className="flex flex-col border-t border-brand-gray2 desktop:flex-row desktop:items-stretch">
        <div className="order-1 flex flex-col justify-center gap-5 border-b border-brand-gray2 bg-white px-5 py-[1.875rem] text-[1rem] leading-normal tablet:px-10 tablet:text-[1.125rem] desktop:order-2 desktop:w-1/2 desktop:border-b-0 desktop:border-l desktop:px-[2.625rem]">
          <div className="mx-auto max-w-[46.375rem] font-medium text-brand-gray desktop:max-w-[46.375rem]">
            <p>
              <span className="font-semibold text-brand-teal">
                Compound Intelligence{" "}
              </span>
              is the principle that an AIOS accumulates knowledge over time —
              every decision logged, every skill refined — becoming an
              appreciating asset rather than a recurring cost. Unlike chatbots,
              which are stateless and start from zero every session, an AIOS
              builds on everything it learns.
            </p>
          </div>
          <p className="mx-auto max-w-[46.375rem] font-medium text-brand-gray desktop:max-w-[46.375rem]">
            Every research report saved. Every decision logged. Every skill
            refined from feedback. Every automation tuned. After a month of
            daily use, the system knows the business deeply. After a year,
            it&apos;s institutional memory that can&apos;t walk out the door.
          </p>
          <p className="mx-auto max-w-[46.375rem] font-semibold text-brand-teal desktop:max-w-[46.375rem]">
            This isn&apos;t a subscription you pay for. It&apos;s an asset you
            build. The longer it runs, the more valuable it becomes. Context
            compounds. Every module makes every other module smarter. A year from
            now, the system running your business will be fundamentally more
            capable than the one we deploy on day one — and you didn&apos;t have
            to build any of it yourself.
          </p>
        </div>

        <div className="order-2 flex justify-center border-b border-brand-gray2 bg-white px-5 pb-[3.75rem] pt-[1.875rem] tablet:px-10 desktop:order-1 desktop:w-1/2 desktop:border-b-0 desktop:border-r desktop:px-0 desktop:py-[1.875rem]">
          <div className="relative h-[20.5625rem] w-full max-w-[20.3125rem] tablet:h-[38rem] tablet:max-w-[38rem] desktop:h-[46.9375rem] desktop:max-w-[46.3125rem]">
            <Image
              src="/images/compound_intelligence.png"
              alt="Compound intelligence network diagram"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 325px, (max-width: 1024px) 608px, 741px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
