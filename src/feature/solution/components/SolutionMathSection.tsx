export function SolutionMathSection() {
  return (
    <section>
      <h2 className="border border-brand-gray2 bg-brand-lime px-5 py-[2.1875rem] text-center text-[1.5rem] font-normal uppercase leading-[1.1] text-brand-black tablet:px-10 tablet:py-12 tablet:text-[2.25rem] desktop:py-[4.90625rem] desktop:text-[3.25rem] desktop:tracking-[-0.04em]">
        When the three pillars are running together,
        <br />
        the math changes
      </h2>

      <div className="flex flex-col border-b border-l border-r border-brand-gray2 bg-brand-surface desktop:flex-row desktop:items-stretch">
        <div className="flex flex-col desktop:w-1/2">
          <div className="border-b border-brand-gray2 px-5 py-[1.875rem] tablet:px-10 tablet:py-12">
            <h3 className="text-[1.5rem] font-bold leading-[1.05] text-brand-teal desktop:text-[2.0625rem] desktop:text-brand-heading">
              Before:
            </h3>
            <p className="mt-2.5 text-[1.25rem] font-semibold leading-normal text-brand-black">
              80% of your time IN the business.
            </p>
            <p className="mt-2 text-[1.25rem] font-semibold leading-normal text-brand-gray">
              20% ON the business.
            </p>
          </div>
          <div className="border-b border-brand-gray2 px-5 py-[1.875rem] tablet:px-10 tablet:py-12 desktop:border-b-0">
            <h3 className="text-[1.5rem] font-bold leading-[1.05] text-brand-teal desktop:text-[2.0625rem] desktop:text-brand-heading">
              After:
            </h3>
            <p className="mt-2.5 text-[1.25rem] font-semibold leading-normal text-brand-black">
              20-30% IN the business.
            </p>
            <p className="mt-2 text-[1.25rem] font-semibold leading-normal text-brand-gray">
              70-80% ON the business.
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center border-b border-brand-gray2 px-5 py-[1.875rem] text-[1rem] leading-normal tablet:px-10 desktop:border-b-0 desktop:border-l desktop:py-[1.9375rem] desktop:text-[1.25rem]">
          <div className="mx-auto max-w-[46.375rem]">
            <p className="font-medium text-brand-gray">
              That freed bandwidth is yours. Pour it into growth — new channels,
              new products, new markets. Or step back and run the business from
              your phone. Or both. The founders who make this shift describe it
              the same way: like pointing a laser beam at the things that
              actually matter.
            </p>
            <p className="mt-5 font-semibold text-brand-teal desktop:font-bold">
              We measure three things for every client: away-from-desk autonomy,
              task automation percentage, and revenue per person. If those
              numbers aren&apos;t moving, we haven&apos;t done our job.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
