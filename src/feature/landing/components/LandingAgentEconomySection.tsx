import Image from "next/image";
import Link from "next/link";
import { RouteNames } from "@/constants";

export function LandingAgentEconomySection() {
  return (
    <section className="border-x border-brand-gray2 bg-brand-white border mx-auto max-w-11/12">
      <div className="flex flex-col-reverse min-[1025px]:grid min-[1025px]:grid-cols-2">
        <div className="flex items-center justify-center border-b border-brand-gray2 p-0 min-[1025px]:min-h-162.5 min-[1025px]:border-b-0 min-[1025px]:border-r min-[1025px]:p-10">
          <Image
            src="/images/agent-network.svg"
            alt="Agent-to-agent economy visual diagram"
            width={749}
            height={382}
            className="h-auto w-full min-[1025px]:max-w-187.25"
          />
        </div>

        <div className="flex items-center p-0 min-[1025px]:min-h-162.5 min-[1025px]:p-10">
          <div className="w-full max-w-none p-6 min-[1025px]:max-w-174 min-[1025px]:p-0">
            <div className="space-y-5 text-[1rem] leading-tight text-brand-black">
              <p>
                The agent-to-agent economy - where AI agents transact,
                negotiate, and operate on behalf of businesses - is arriving
                faster than most founders realize.
              </p>
              <p>
                The gap between where you are and where you could be is not
                about effort. You are already working hard enough. It is about
                architecture - the system underneath everything else.
              </p>
              <p>
                Your competitors have not started building theirs yet. That gap
                is your advantage. In 12 months, this conversation will be
                obvious. Right now, it is still early - but the window will not
                stay open.
              </p>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-4 min-[1025px]:flex-row">
              <Link
                href={RouteNames.Blueprint}
                className="inline-flex h-15 items-center justify-center rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-br-[1rem] rounded-bl-[0.1875rem] bg-brand-lime px-7.5 text-[1rem] font-bold uppercase text-brand-black"
              >
                Get your free AI blueprint
              </Link>
              <Link
                href={RouteNames.HowItWorks}
                className="inline-flex h-15 items-center justify-center rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-br-[1rem] rounded-bl-[0.1875rem] border border-brand-black px-7.5 text-[1rem] font-bold uppercase text-brand-black"
              >
                See how it works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
