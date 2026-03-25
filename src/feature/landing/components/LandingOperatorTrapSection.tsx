import Image from "next/image";
import Link from "next/link";
import { RouteNames } from "@/constants";

export function LandingOperatorTrapSection() {
  return (
    <section className="border border-brand-gray2 bg-brand-white overflow-hidden mx-auto max-w-11/12">
      <div className="flex flex-col min-[1025px]:flex-row min-[1025px]:min-h-165">
        {/* ── LEFT: quote at top, operator trap block at bottom ── */}
        <div className="flex flex-col justify-between gap-12 border-b border-brand-gray2 p-6 min-[1025px]:w-1/2 min-[1025px]:min-h-165 min-[1025px]:border-b-0 min-[1025px]:border-r min-[1025px]:gap-0 min-[1025px]:px-10 min-[1025px]:py-15">
          <p className="leading-snug text-brand-black max-w-140 font-semibold text-xl">
            {`"I need to get focused. AI is changing so rapidly that I feel overwhelmed and catch myself chasing the next shiny object."`}
          </p>

          <div className="space-y-3">
            <p className="text-[1rem] leading-snug text-brand-gray">
              {`There's a name for what you're feeling:`}
            </p>
            <p className="text-[1rem] font-bold leading-snug text-brand-black">
              The Operator Trap
            </p>
            <p className="text-[1rem] leading-snug text-brand-gray">
              Eighty percent of your bandwidth goes to keeping the business
              running — admin, meetings, scheduling, putting out fires. That
              leaves maybe twenty percent for the work that actually grows the
              business.
            </p>
          </div>
        </div>

        <div className="relative min-[1025px]:w-1/2 min-[1025px]:min-h-165">
          <div className="flex flex-col gap-[5.6875rem] p-6 pb-[5.4375rem] min-[1025px]:px-10 min-[1025px]:pt-[6.3125rem] min-[1025px]:pb-[7rem]">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 min-[1025px]:grid-cols-3 min-[1025px]:gap-y-0">
              <div className="flex flex-col items-center gap-3 min-[1025px]:gap-10">
                <p className="text-center font-semibold text-brand-black text-xl">
                  You&apos;ve tried <br /> ChatGPT
                </p>
                <Image
                  src="/images/landing-operator-trap-chatgpt.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="h-32 w-32"
                />
              </div>

              <div className="flex flex-col items-center gap-3 min-[1025px]:gap-12.5">
                <p className="text-center font-semibold text-brand-black text-xl">
                  You&apos;ve tried <br /> Zapier
                </p>
                <Image
                  src="/images/landing-operator-trap-zapier.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="h-32 w-32"
                />
              </div>

              <div className="col-span-2 flex flex-col items-center gap-3 min-[1025px]:col-span-1 min-[1025px]:gap-12.5">
                <p className="text-center font-semibold text-brand-black text-xl">
                  You&apos;ve tried a dozen <br /> browser extensions
                </p>
                <Image
                  src="/images/landing-operator-trap-browser-extensions.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="h-32 w-32"
                />
              </div>
            </div>

            {/* Body paragraphs */}
            <div className="space-y-[1.5625rem]">
              <p className="leading-snug text-brand-black">
                The instinct was right. The infrastructure wasn&apos;t.
              </p>
              <p className="leading-snug text-brand-black max-w-140">
                Over 46,700 AI tools exist today (per theresanaiforthat.com),
                and none of them talk to each other. Tools without architecture
                don&apos;t compound. They accumulate.
              </p>
            </div>
          </div>

          {/* READ MORE — absolute bottom-right on desktop, bottom full-width on mobile */}
          <Link
            href={RouteNames.Problem}
            className="absolute bottom-0 right-0 flex h-13.75 w-screen overflow-hidden rounded-tl-[1.25rem] min-[1025px]:w-109.5"
          >
            <div className="flex flex-1 items-center justify-center bg-brand-teal transition-opacity hover:opacity-90">
              <span className="text-[1rem] font-normal uppercase text-brand-white">
                READ MORE
              </span>
            </div>
            <div className="flex h-full w-13.75 shrink-0 items-center justify-center border-l border-brand-divider bg-brand-teal">
              <Image
                src="/images/landing-operator-trap-read-more-icon.svg"
                alt=""
                width={55}
                height={55}
                className="h-full w-full"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
