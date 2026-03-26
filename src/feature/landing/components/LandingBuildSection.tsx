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
      <div className="flex items-center justify-center rounded-tl-[1.25rem] rounded-tr-[1.25rem] border-b border-brand-gray2 bg-brand-lime px-5 py-[3.1875rem] min-[1025px]:py-[5.0625rem]">
        <h2 className="text-center text-[2rem] font-normal uppercase tracking-[-0.08rem] text-brand-heading min-[1025px]:text-[3.75rem] min-[1025px]:tracking-[-0.3125rem]">
          What We Actually Build
        </h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2.5 px-5 py-11 min-[1025px]:gap-2.5">
        <span className="hover:bg-brand-lime transition-colors duration-300 rounded-[0.375rem] border border-brand-black px-3.75 py-2.5 text-sm text-brand-black">
          Not a chatbot
        </span>
        <span className="hover:bg-brand-lime transition-colors duration-300 rounded-[0.375rem] border border-brand-black px-3.75 py-2.5 text-sm text-brand-black ">
          Not a wrapper
        </span>
        <span className="hover:bg-brand-lime transition-colors duration-300 flex items-center gap-2.5 rounded-[0.375rem] border border-brand-black bg-brand-white px-3.75 py-2.5 text-sm text-brand-black">
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

      <div className="flex flex-col min-[1025px]:flex-row">
        <div className="p-6 min-[1025px]:w-[34.5%] min-[1025px]:border-b-0 min-[1025px]:p-[2.6875rem_2.6875rem_5.0625rem_2.6875rem]">
          <div className="rounded-[1.25rem] border border-brand-divider bg-brand-black p-[2.375rem_1.25rem_5.0625rem_2.6875rem] min-[1025px]:bg-transparent">
            <p className="text-[1rem] font-bold leading-snug text-brand-white min-[1025px]:text-brand-black">
              There&apos;s a system that changes this.
            </p>
            <p className="mt-5 text-[1rem] leading-snug text-brand-white min-[1025px]:text-brand-black">
              We call it the bottle — the operating system that channels the raw
              power of AI into something your business can actually use.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-5 min-[1025px]:flex-1 min-[1025px]:border-b-0 min-[1025px]:p-10">
          <div className="relative flex h-80 w-full max-w-187.25 items-center justify-center overflow-hidden rounded-[3.125rem] bg-brand-offwhite px-6 min-[1025px]:h-[26.25rem] min-[1025px]:px-10">
            <span className="text-[5rem] font-normal uppercase tracking-[-0.125rem] text-brand-heading min-[1025px]:text-[12.5rem] min-[1025px]:tracking-[-0.3125rem]">
              AIOS
            </span>
            <span className="absolute inset-x-[8%] inset-y-[5%] rounded-[2.4375rem] border border-brand-divider/60" />
            <span className="absolute inset-x-[12%] inset-y-[9%] rounded-[2.4375rem] border border-brand-divider/40" />
          </div>
        </div>

        <div className="p-6 min-[1025px]:w-[38%] min-[1025px]:p-[2.5rem_1.25rem_5.0625rem_4.5rem]">
          <div className="rounded-[1.25rem] border border-brand-divider p-[2.5rem_1.25rem_5.0625rem_1.25rem] min-[1025px]:p-[2.5rem_1.25rem_5.0625rem_2.6875rem]">
            <p className="mb-10 text-[1rem] leading-snug text-brand-black">
              An AI Operating System — and it wraps around your entire business
              in three layers:
            </p>
            <ul className="flex flex-col gap-6.25">
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
          className="inline-flex h-15 items-center justify-center rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-br-2xl rounded-bl-[0.1875rem] bg-[#0F766E] px-10 py-3 text-[1rem] font-medium uppercase leading-relaxed tracking-wide text-brand-white transition-opacity hover:opacity-90 min-[1025px]:px-30 min-[1025px]:text-xl"
        >
          See the full picture
        </Link>
      </div>
    </section>
  );
}
