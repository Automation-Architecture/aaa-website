import Image from "next/image";
import Link from "next/link";
import { LandingOfferThreeBlockAnimation } from "@/feature/landing/components/LandingOfferThreeBlockAnimation";
import { RouteNames } from "@/constants";

const commitments = [
  {
    heading: "Get a personalized AI Blueprint before any commitment.",
    body: "You see exactly what's possible for your business — free, before any engagement begins.",
  },
  {
    heading: "You'll never be stuck alone.",
    body: "We operate alongside you in your business, handle the ongoing maintenance, and provide support every step of the way.",
  },
  {
    heading: "You don't need to be technical.",
    body: "We see exactly what's possible for your business — free, before any engagement begins.",
  },
];

export function LandingOfferSection() {
  return (
    <section className="mx-auto max-w-11/12 border border-brand-gray2 bg-brand-white overflow-hidden">
      <div className="grid grid-cols-1 border-b border-brand-gray2 min-[1025px]:grid-cols-2">
        <div className="hidden min-[1025px]:block min-[1025px]:border-r min-[1025px]:border-brand-gray2" />
        <div className="flex items-center justify-center bg-brand-lime px-5 py-[4.90625rem]">
          <h2 className="text-center text-[clamp(2rem,4vw,3.25rem)] font-normal uppercase leading-[1.1] tracking-[-0.08rem] text-brand-heading min-[1025px]:tracking-[-0.3125rem]">
            You have two paths from here.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b border-brand-gray2 min-[1025px]:grid-cols-2">
        <div className="flex flex-col justify-between border-b border-brand-gray2 min-[1025px]:border-b-0 min-[1025px]:border-r min-[1025px]:border-brand-gray2">
          <div className="flex items-center gap-7.5 px-7.5 py-8">
            <Image
              src="/images/3-block/one-block.png"
              alt="Single cube icon"
              width={136}
              height={136}
              className="h-34 w-34 shrink-0 object-contain"
            />
            <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold leading-tight text-brand-heading">
              Do it alone:
            </h3>
          </div>
          <p className="px-7.5 pb-7.5 text-[1rem] leading-7 text-brand-heading">
            Evaluate 46,700 AI tools. Learn the architecture. Navigate context
            systems, API integrations, and automation layers yourself. Spend
            months iterating before anything runs. Maintain and evolve it as the
            landscape shifts underneath you.
          </p>
        </div>

        <div className="flex flex-col justify-between bg-brand-black">
          <div className="flex items-center gap-7.5 px-7.5 py-8">
            <div className="relative h-34 w-34 shrink-0">
              <LandingOfferThreeBlockAnimation />
            </div>
            <h3 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold leading-tight text-brand-white">
              Do it with us:
            </h3>
          </div>
          <div className="flex flex-1 flex-col min-[1025px]:flex-row min-[1025px]:items-stretch">
            <p className="flex-1 px-7.5 pb-7.5 text-[1rem] leading-7 text-brand-white">
              We build the full system around your business. Business context,
              dashboard intelligence, automated task management — configured for
              your operations. First working system live within weeks. Ongoing
              support as your business grows.
            </p>
            <Link
              href={RouteNames.Blueprint}
              className="group mt-5 flex h-13.75 w-full shrink-0 items-center justify-center bg-brand-teal transition-colors duration-300 hover:bg-brand-black min-[1025px]:mt-0 min-[1025px]:h-auto min-[1025px]:w-28 min-[1025px]:self-stretch"
              aria-label="Get started"
            >
              <Image
                src="/images/landing-offer-arrow.svg"
                alt=""
                width={29}
                height={44}
                className="h-11 w-auto rotate-90 transition-transform duration-300 min-[1025px]:rotate-0"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col divide-y divide-brand-gray2">
        {commitments.map((item) => (
          <div
            key={item.heading}
            className="group relative flex flex-col gap-4 px-7.5 py-10 transition-colors duration-300 hover:bg-brand-lime min-[1025px]:px-62.5 min-[1025px]:py-10"
          >
            <div className="absolute inset-y-0 left-0 hidden w-44.75 border-r border-brand-gray2 bg-brand-offwhite transition-colors duration-300 group-hover:bg-brand-lime min-[1025px]:block" />
            <p className="relative z-10 text-2xl font-bold text-brand-black">
              {item.heading}
            </p>
            <p className="relative z-10 text-[1rem] text-brand-body">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
