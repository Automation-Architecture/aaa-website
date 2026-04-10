import Link from "next/link";
import { RouteNames } from "@/constants";

export function LandingFinalCtaSection() {
  return (
    <section className="mx-auto mt-20 max-w-11/12 overflow-hidden border border-brand-gray2 bg-brand-black">
      <div className="flex flex-col gap-6 p-5 pb-10 min-[1025px]:min-h-122.5 min-[1025px]:gap-0 min-[1025px]:p-0 tablet:gap-7 tablet:p-6">
        <h2 className="font-semibold uppercase leading-none tracking-[-0.12rem] text-brand-white text-[clamp(2rem,4vw+0.85rem,6.875rem)] min-[1025px]:px-20 min-[1025px]:pt-17.5 min-[1025px]:tracking-[-0.1875rem] wide:px-32 min-[1536px]:px-51.25 min-[1536px]:whitespace-nowrap">
          We build the bottle
        </h2>

        <div className="flex flex-col gap-4 min-[1025px]:hidden">
          <p className="font-bold uppercase leading-[1.1] tracking-[-0.06em] text-brand-lime text-[clamp(1.125rem,3.5vw+0.35rem,2.25rem)]">
            You fill it with the business you actually want to run
          </p>
          <p className="text-[clamp(0.875rem,1.25vw+0.45rem,1.875rem)] leading-snug text-brand-white/70">
            A business that serves you, not the other way around
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-6 min-[1025px]:flex-row min-[1025px]:items-end min-[1025px]:justify-center min-[1025px]:px-20 min-[1025px]:pb-17.5 wide:px-32 min-[1536px]:px-51.25">
          <Link
            href={RouteNames.Blueprint}
            className="order-last inline-flex h-15 w-full max-w-full shrink-0 items-center justify-center whitespace-nowrap rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-br-2xl rounded-bl-[0.1875rem] bg-brand-lime px-[clamp(0.625rem,3.5vw,1.875rem)] font-bold uppercase leading-none text-brand-black text-[clamp(0.5625rem,1.85vw+0.42rem,1.5rem)] transition-opacity hover:opacity-90 min-[1025px]:order-0 min-[1025px]:w-106.25 min-[1025px]:max-w-none min-[1025px]:text-[clamp(0.875rem,1.05vw+0.65rem,1.5rem)]"
          >
            Get Your Free AI Blueprint
          </Link>
          <div className="hidden min-w-0 flex-1 flex-col items-start gap-4 text-left min-[1025px]:flex min-[1025px]:pl-8 wide:pl-12 min-[1536px]:pl-16">
            <p className="w-full font-bold uppercase leading-[1.1] tracking-[-0.045em] text-brand-lime text-[clamp(1.375rem,2.1vw+0.6rem,3.4375rem)] min-[1536px]:tracking-[-0.125rem]">
              You fill it with the business you actually want to run
            </p>
            <p className="w-full font-light text-brand-white/70 text-[clamp(0.875rem,1.05vw+0.45rem,1.875rem)]">
              A business that serves you, not the other way around
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
