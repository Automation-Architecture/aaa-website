import Image from "next/image";
import Link from "next/link";
import { RouteNames } from "@/constants";
import { Marquee } from "@/components/ui/marquee";

const layers = [
  {
    title: "Business Context Data Engine",
    text: "Your AI knows your business the way a co-founder would",
  },
  {
    title: "Dashboard Intelligence",
    text: "A morning brief, delivered before you open your laptop",
  },
  {
    title: "Automated Task Management",
    text: "60–70% of your recurring tasks, handled — a number McKinsey backs up",
  },
];

const footerLabels = [
  "Three layers working together",
  "Context makes the intelligence useful",
  "Intelligence makes the automation smart",
];

export function LandingBuildSection() {
  return (
    <section className="border border-brand-gray2 bg-brand-white overflow-hidden mx-auto max-w-11/12 mt-20">
      {/* ── HEADER: lime bar ── */}
      <div className="flex items-center justify-center rounded-tl-[1.25rem] rounded-tr-[1.25rem] border-b border-brand-gray2 bg-brand-lime px-5 py-[3.1875rem] min-[1025px]:py-[5.0625rem]">
        <h2 className="text-center text-[2rem] font-normal uppercase tracking-[-0.3125rem] text-brand-heading min-[1025px]:text-[3.75rem]">
          What We Actually Build
        </h2>
      </div>

      {/* ── PILL TAGS ── */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-brand-gray2 px-5 py-11 min-[1025px]:gap-2.5">
        <span className="rounded-[0.375rem] border border-brand-black px-3.75 py-2.5 text-sm text-brand-black">
          Not a chatbot
        </span>
        <span className="rounded-[0.375rem] border border-brand-black px-3.75 py-2.5 text-sm text-brand-black ">
          Not a wrapper
        </span>
        <span className="flex items-center gap-2.5 rounded-[0.375rem] border border-brand-black bg-brand-white px-3.75 py-2.5 text-sm text-brand-black">
          <Image
            src="/images/landing-build-system-icon.svg"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
          An operating system
        </span>
      </div>

      <div className="flex flex-col border-b border-brand-gray2 min-[1025px]:flex-row">
        {/* Left card */}
        <div className="border-b border-brand-gray2 p-6 min-[1025px]:w-[34.5%] min-[1025px]:border-b-0 min-[1025px]:border-r min-[1025px]:p-[2.6875rem_2.6875rem_5.0625rem_2.6875rem]">
          <div className="rounded-[1.25rem] border border-brand-divider p-[2.375rem_1.25rem_5.0625rem_2.6875rem]">
            <p className="text-[1rem] font-bold leading-snug text-brand-black">
              There&apos;s a system that changes this.
            </p>
            <p className="mt-5 text-[1rem] leading-snug text-brand-black">
              We call it the bottle — the operating system that channels the raw
              power of AI into something your business can actually use.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center border-b border-brand-gray2 bg-brand-offwhite p-10 min-[1025px]:flex-1 min-[1025px]:border-b-0 min-[1025px]:border-r">
          <div className="relative flex h-105 w-full max-w-142.75 items-center justify-center rounded-[3.125rem] bg-brand-offwhite">
            <span className="text-[7rem] font-normal uppercase tracking-[-0.3125rem] text-brand-heading min-[1025px]:text-[12.5rem]">
              AIOS
            </span>
            <span className="absolute inset-0 rounded-[2.4375rem] border border-brand-divider/60" />
            <span className="absolute inset-5.5 rounded-[2.4375rem] border border-brand-divider/40" />
          </div>
        </div>

        <div className="p-6 min-[1025px]:w-[34.5%] min-[1025px]:p-[2.5rem_1.25rem_5.0625rem_8.125rem]">
          <div className="rounded-[1.25rem] border border-brand-divider p-[2.5rem_1.25rem_5.0625rem_1.25rem] min-[1025px]:p-[2.5rem_1.25rem_5.0625rem_2.6875rem]">
            <p className="mb-[2.5rem] text-[1rem] leading-snug text-brand-black">
              An AI Operating System — and it wraps around your entire business
              in three layers:
            </p>
            <ul className="flex flex-col gap-[1.5625rem]">
              {layers.map((layer) => (
                <li key={layer.title} className="space-y-[0.3125rem]">
                  <p className="text-[1rem] font-bold text-brand-black">
                    {layer.title}
                  </p>
                  <p className="text-[1rem] text-brand-gray">{layer.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b border-brand-gray2 bg-brand-black py-10 overflow-hidden">
        <Marquee
          items={footerLabels}
          speed={30}
          separator="·"
          className="gap-0"
          itemClassName="text-brand-white text-2xl tracking-[-0.0625rem]"
        />
      </div>

      <div className="flex items-center justify-center px-5 py-13.75">
        <Link
          href={RouteNames.Solution}
          className="text-xl inline-flex h-15 leading-relaxed font-medium tracking-wide items-center justify-center rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-br-2xl rounded-bl-[0.1875rem] bg-[#0F766E] px-30 py-3 uppercase text-brand-white transition-opacity hover:opacity-90"
        >
          See the full picture
        </Link>
      </div>
    </section>
  );
}
