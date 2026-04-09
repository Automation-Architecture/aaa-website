
export function SolutionHeroSection() {
  return (
    <section className="relative overflow-hidden border border-brand-gray2 bg-brand-surface px-6 pt-[1.5rem] pb-12 tablet:px-[2.5rem] tablet:pt-[2.25rem] tablet:pb-14 desktop:min-h-[23.5625rem] desktop:px-[2.5rem] desktop:pb-16 desktop:pt-[3rem] min-[1440px]:px-[4.375rem] min-[1440px]:pt-[4.9375rem]">
      <div className="relative z-10 inline-flex items-center gap-2.5 rounded-[0.375rem] bg-brand-lime px-3.75 py-2.5">
        <img
          src="/icons/grid.svg"
          alt="Grid"
          width={20}
          height={20}
          className="size-5 shrink-0 text-brand-black"
          decoding="async"
          loading="lazy"
        />

        <span className="text-[0.875rem] font-semibold leading-none text-brand-black tablet:text-[1.125rem]">
          From Chaos to System
        </span>
      </div>

      <h1 className="relative z-10 mt-[1rem] max-w-[min(100%,42rem)] text-[2rem] font-semibold uppercase leading-[1.05] tracking-[-0.04em] text-brand-heading tablet:max-w-[min(100%,46rem)] tablet:text-[3rem] desktop:max-w-[min(100%,52%)] desktop:text-[clamp(2.75rem,3.8vw,4.5625rem)]">
        AI Operating System
      </h1>

      {/* Figma 112:1947: wrapper right 11.52% of frame, top 53.14px, width 21.92% max 386px, rotate 15.49° */}
      <div
        className="pointer-events-none absolute right-[14%] top-[4.2rem] z-0 hidden w-[min(24.1rem,21.92%)] min-w-[10.5rem] desktop:block"
        aria-hiddens
      >
        <img
          src="/images/solution-hero-mark.svg"
          alt=""
          width={341}
          height={343}
          decoding="async"
          className="h-auto w-full rotate-[15.49deg] select-none"
        />
      </div>

      <div
        className="pointer-events-none absolute bottom-[-10%] right-[-6%] z-0 w-[clamp(7.25rem,19vw,11rem)] desktop:hidden"
        aria-hidden
      >
        <img
          src="/images/solution-hero-mark.svg"
          alt=""
          width={341}
          height={343}
          decoding="async"
          className="h-auto w-full rotate-[15.49deg] select-none"
        />
      </div>
    </section>
  );
}
