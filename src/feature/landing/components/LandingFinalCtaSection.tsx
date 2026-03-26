import Link from "next/link";
import { RouteNames } from "@/constants";

export function LandingFinalCtaSection() {
  return (
    <section className="border border-brand-gray2 bg-brand-black overflow-hidden mx-auto max-w-11/12 mt-20">
      <div className="flex flex-col gap-8 p-5 pb-10 min-[1025px]:min-h-122.5 min-[1025px]:gap-0 min-[1025px]:p-0">
        <h2 className="text-[2.1875rem] font-semibold uppercase leading-none tracking-[-0.1875rem] text-brand-white min-[1025px]:px-20 min-[1025px]:pt-[4.375rem] min-[1025px]:text-[4.5rem] min-[1280px]:px-32 min-[1280px]:text-[5.5rem] min-[1536px]:px-51.25 min-[1536px]:text-[6.875rem] min-[1536px]:whitespace-nowrap">
          We build the bottle
        </h2>

        <div className="flex flex-col gap-6 min-[1025px]:hidden">
          <p className="text-[2.1875rem] font-bold uppercase leading-[1.1] tracking-[-0.125rem] text-brand-lime">
            You fill it with the business you actually want to run
          </p>
          <p className="text-[1rem] text-brand-white/70">
            A business that serves you, not the other way around
          </p>
        </div>

        <div className="flex flex-col gap-6 min-[1025px]:flex-row min-[1025px]:items-end min-[1025px]:justify-between min-[1025px]:px-20 min-[1025px]:pb-[4.375rem] min-[1280px]:px-32 min-[1536px]:px-[12.8125rem]">
          <Link
            href={RouteNames.Blueprint}
            className="order-last inline-flex h-15 w-full items-center justify-center rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-br-2xl rounded-bl-[0.1875rem] bg-brand-lime px-7.5 text-[1rem] font-bold uppercase text-brand-black transition-opacity hover:opacity-90 min-[1025px]:order-0 min-[1025px]:w-106.25 min-[1536px]:text-xl"
          >
            Get Your Free AI Blueprint
          </Link>
          <div className="hidden flex-col items-start gap-4 min-[1025px]:flex min-[1025px]:max-w-150 min-[1536px]:max-w-210">
            <p className="text-right text-[2.4rem] font-bold uppercase leading-[1.1] tracking-[-0.08rem] text-brand-lime min-[1536px]:text-[3.4375rem] min-[1536px]:tracking-[-0.125rem]">
              You fill it with the business you actually want to run
            </p>
            <p className="text-right text-[1rem] font-light text-brand-white/70 min-[1536px]:text-xl">
              A business that serves you, not the other way around
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
