import Link from "next/link";
import { RouteNames } from "@/constants";

export function FaqFinalCtaSection() {
  return (
    <section className="relative border-x border-brand-gray2 bg-brand-black px-6 py-12 tablet:px-12 tablet:py-16 desktop:min-h-[33.125rem] desktop:px-[7.1875rem] desktop:py-0">
      <h2 className="text-center text-[2.25rem] font-medium uppercase leading-none tracking-[-0.03em] text-brand-white tablet:text-[3.25rem] desktop:absolute desktop:left-[7.1875rem] desktop:top-[4.1875rem] desktop:text-left desktop:text-[6.875rem]">
        Still Have <span className="text-brand-lime">Questions?</span>
      </h2>

      <div className="mt-8 text-left font-normal leading-[1.35] tracking-[-0.01em] text-brand-white/70 tablet:mt-10 tablet:text-[1.125rem] desktop:absolute desktop:left-[calc(50%_-_9.125rem)] desktop:top-[14.25rem] desktop:mt-0 desktop:w-[45.375rem] desktop:text-[1.6875rem]">
        <p>
          We understand that every business has unique needs. If there&apos;s
          anything you&apos;d like to clarify about our features, pricing, or
          how AIOS fits into your workflow, our support team is here to help.
        </p>
        <p className="mt-[0.625rem]">
          Reach out anytime - we&apos;ll guide you through every detail to make
          sure you get the most out of our platform.
        </p>
      </div>

      <div className="mt-8 tablet:mt-10 desktop:absolute desktop:left-[7.1875rem] desktop:top-[22.6875rem] desktop:mt-0">
        <Link
          href={RouteNames.Blueprint}
          className="hover:bg-brand-teal transition-colors duration-300 ease-in-out  hover:text-brand-white inline-flex h-15 min-w-70 items-center justify-center rounded-bl-[0.1875rem] rounded-br-2xl rounded-tl-[0.875rem] rounded-tr-[0.1875rem] bg-brand-lime px-[1.875rem] text-center text-[1.125rem] font-normal uppercase text-brand-black transition-opacity hover:opacity-90 desktop:min-w-[26.5625rem] desktop:text-[1.5rem]"
        >
          Book a Free AI Blueprint
        </Link>
      </div>
    </section>
  );
}
