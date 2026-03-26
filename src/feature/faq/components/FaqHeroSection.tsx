import Image from "next/image";

export function FaqHeroSection() {
  return (
    <section className="relative overflow-visible border border-brand-gray2 bg-brand-surface px-6 pb-8 pt-[1.5rem] tablet:px-[2.5rem] tablet:pb-[2.5rem] tablet:pt-[2.25rem] desktop:min-h-[23.5625rem] desktop:px-[2.5rem] desktop:pt-[3rem] min-[1440px]:px-[4.375rem] min-[1440px]:pt-[4.9375rem]">
      <div className="inline-flex items-center gap-2.5 rounded-[0.375rem] bg-brand-lime px-3.75 py-2.5">
        <div
          className="size-4 rounded-[0.1875rem] bg-brand-black flex items-center justify-center"
          aria-hidden="true"
        >
          <Image
            src="/icons/question.svg"
            alt="Question"
            width={6}
            height={9}
            className="h-2.5 w-auto"
          />
        </div>

        <span className="text-[0.875rem] font-semibold leading-none text-brand-black">
          Your Questions, Answered
        </span>
      </div>

      <h1 className="mt-[1rem] max-w-[47.5625rem] text-[2rem] font-semibold uppercase leading-[1.05] tracking-[-0.04em] text-brand-heading tablet:text-[3rem] desktop:max-w-[52%] desktop:text-[clamp(3rem,4.3vw,4.5625rem)]">
        Frequently Asked <span className="text-brand-teal">Questions</span>
      </h1>

      <aside className="mt-6 rounded-[0.625rem] bg-brand-black px-6 py-6 tablet:px-8 tablet:py-7 desktop:absolute desktop:-bottom-10 desktop:right-0 desktop:z-20 desktop:mt-0 desktop:w-[min(56.25rem,52%)] desktop:rounded-l-[0.625rem] desktop:rounded-r-none desktop:px-[2.5rem] desktop:py-[2rem] min-[1440px]:bottom-[-3rem] min-[1440px]:px-[6.25rem] min-[1440px]:py-[3.75rem]">
        <h2 className="text-[1.5rem] font-medium leading-tight tracking-[-0.03em] text-brand-lime tablet:text-[2rem] desktop:text-[clamp(1.75rem,2.4vw,2.5rem)]">
          Key Takeaway:
        </h2>
        <p className="mt-4 max-w-170.5 text-[1rem] leading-[1.4] text-brand-divider tablet:text-[1.0625rem] desktop:text-[clamp(0.9375rem,1.2vw,1.25rem)]">
          AAA builds done-for-you AI Operating Systems (AIOS) for small
          businesses and startups. We don&apos;t sell software subscriptions or
          DIY courses - we build, deploy, and maintain the full system.
          Engagements start with a free AI Blueprint tailored to your industry,
          followed by a consultation to determine scope and fit. Below are the
          25 most common questions we hear from founders evaluating AIOS
          infrastructure.
        </p>
      </aside>
    </section>
  );
}
