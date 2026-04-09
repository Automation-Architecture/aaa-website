import Image from "next/image";

export function HowItWorksHeroSection() {
  return (
    <section className="border relative overflow-visible border-b border-brand-gray2 bg-brand-surface px-6 pb-8 pt-6 tablet:px-10 tablet:pb-10 tablet:pt-9 desktop:min-h-94.25 desktop:px-10 desktop:pt-12 min-[1440px]:px-17.5 min-[1440px]:pt-19.75">
      <div className="inline-flex items-center gap-2.5 rounded-[0.375rem] bg-brand-lime px-3.75 py-2.5">
        <Image
          src="/icons/grid.svg"
          alt="Vector"
          width={6}
          height={9}
          className="h-5 w-auto rounded-sm"
        />
        <span className="text-[0.875rem] font-semibold leading-none text-brand-black">
          From Click to System
        </span>
      </div>

      <h1 className="mt-4 max-w-190.25 text-[2rem] font-semibold uppercase leading-[1.05] tracking-[-0.04em] text-brand-heading tablet:text-[3rem] desktop:max-w-[52%] desktop:text-[clamp(3rem,4.3vw,4.5625rem)]">
        How It Works
      </h1>

      <aside className="mt-6 rounded-[0.625rem] bg-brand-black px-6 py-6 tablet:px-8 tablet:py-7 desktop:absolute desktop:-bottom-10 desktop:right-0 desktop:z-20 desktop:mt-0 desktop:w-[min(56.25rem,52%)] desktop:rounded-l-[0.625rem] desktop:rounded-r-none desktop:px-10 desktop:py-8 min-[1440px]:-bottom-12 min-[1440px]:px-25 min-[1440px]:py-12">
        <h2 className="text-[1.5rem] font-medium leading-tight tracking-[-0.03em] text-brand-lime tablet:text-[2rem] desktop:text-[clamp(1.75rem,2.4vw,2.5rem)]">
          Key Takeaway:
        </h2>
        <p className="mt-4 max-w-170.5 text-[1rem] leading-[1.4] text-brand-divider tablet:text-[1.0625rem] desktop:text-[clamp(0.9375rem,1.2vw,1.25rem)]">
          AAA delivers through a 7-phase process (IDEA → CONSULT → DESIGN → BUILD → TEST → DEPLOY → ONGOING PARTNERSHIP) with two tiers: AI Automation (~1 week, single workflow) and Full AIOS (~3 weeks, complete system). We assemble proven, pre-built modules — not build from scratch — which is why timelines are weeks, not months.
        </p>
      </aside>
    </section>
  );
}
