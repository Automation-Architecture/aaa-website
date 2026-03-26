import Link from "next/link";
import { RouteNames } from "@/constants";

export function FaqFinalCtaSection() {
  return (
    <section className="border-x border-brand-gray2 bg-brand-black px-5 py-12 tablet:px-12 tablet:py-16 desktop:px-28.75">
      <h2 className="text-[2rem] font-medium uppercase leading-[0.95] tracking-[-0.03em] text-brand-white tablet:text-[3.25rem] wide:text-[4.5rem] min-[1536px]:text-[6rem]">
        Still Have <span className="text-brand-lime">Questions?</span>
      </h2>
      <div className="mx-auto flex w-full max-w-368 flex-col gap-8 wide:flex-row wide:items-end wide:justify-between wide:gap-10">
        <div className="order-2 flex w-full justify-end wide:order-1 wide:w-auto">
          <Link
            href={RouteNames.Blueprint}
            className="inline-flex h-14 w-full items-center justify-center rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-br-2xl rounded-bl-[0.1875rem] bg-brand-lime px-6 text-center text-[1rem] font-normal uppercase text-brand-black transition-colors duration-300 ease-in-out hover:bg-brand-teal hover:text-brand-white tablet:w-auto tablet:min-w-80 tablet:text-[1.125rem] wide:min-w-92 min-[1536px]:min-w-106.25 min-[1536px]:text-[1.5rem]"
          >
            Book a Free AI Blueprint
          </Link>
        </div>

        <div className="order-1 max-w-3xl text-left wide:order-2 wide:w-2xl min-[1536px]:w-181.5">
          <div className="mt-4 text-[1rem] font-normal leading-[1.35] tracking-[-0.01em] text-brand-white/70 tablet:text-[1.125rem] wide:text-[1.35rem] min-[1536px]:text-[1.6875rem]">
            <p>
              We understand that every business has unique needs. If
              there&apos;s anything you&apos;d like to clarify about our
              features, pricing, or how AIOS fits into your workflow, our
              support team is here to help.
            </p>
            <p className="mt-2.5">
              Reach out anytime - we&apos;ll guide you through every detail to
              make sure you get the most out of our platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
