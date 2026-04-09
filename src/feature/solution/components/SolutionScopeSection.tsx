export function SolutionScopeSection() {
  return (
    <section className="border-b border-l border-r border-brand-gray2 bg-white">
      <div className="flex flex-col desktop:flex-row">
        <div className="hidden bg-brand-surface desktop:block desktop:min-h-[14.375rem] desktop:w-1/2 desktop:border-r desktop:border-brand-gray2" />
        <div className="flex min-h-[9.25rem] items-center justify-center bg-brand-lime px-5 py-[2.1875rem] tablet:px-10 desktop:min-h-[14.375rem] desktop:w-1/2 desktop:justify-start desktop:px-[3.75rem]">
          <h2 className="text-center text-[2rem] font-normal uppercase leading-[1.08] tracking-[-0.06em] text-brand-black tablet:text-[2.5rem] desktop:text-left desktop:text-[3.75rem] desktop:font-semibold desktop:tracking-[-0.05em]">
            Scope and Expectations
          </h2>
        </div>
      </div>

      <div className="flex flex-col border-t border-brand-gray2 desktop:flex-row">
        <div className="flex flex-1 flex-col justify-center border-b border-brand-gray2 px-5 pb-[3.125rem] pt-10 text-[1rem] leading-normal tablet:px-10 desktop:w-1/2 desktop:border-b-0 desktop:border-r desktop:px-10 desktop:py-[3.75rem] desktop:text-[1.25rem]">
          <div className="mx-auto flex max-w-[48.8125rem] flex-col gap-5 font-semibold">
            <p className="text-brand-black">
              The bandwidth inversion targets described above (80/20 →
              20-30/70-80) represent the design goal of the AIOS methodology, not
              a guaranteed outcome for every business.
            </p>
            <p className="font-medium text-brand-gray">
              Results depend on operational complexity, data readiness, team
              structure, and how deeply the system is adopted. We assess fit
              during the free consultation and set realistic expectations before
              any engagement begins.
            </p>
          </div>
        </div>
        <div className="hidden bg-white desktop:block desktop:min-h-[23.625rem] desktop:w-1/2" aria-hidden />
      </div>
    </section>
  );
}
