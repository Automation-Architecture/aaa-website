import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/common/Section";
import { RouteNames } from "@/constants";
import { LandingHero } from "@/feature/landing/components/LandingHero";

export function LandingView() {
  return (
    <>
      <LandingHero />
      <Section className="bg-brand-cream text-brand-black">
        <div className="grid grid-cols-1 items-start gap-12 desktop:grid-cols-[1fr_3fr]">
          <div>
            <p className="text-lg">
              Automation Architecture AI builds AI operating system infrastructure for small businesses and startups.
            </p>
            <p className="mt-10 text-sm text-brand-body">
              That is not a pitch. That is a Tuesday when your business runs on the right infrastructure.
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-lime" />
              <span className="text-xs font-medium uppercase tracking-wider">Morning 7:02am</span>
              <span className="inline-block h-2 w-2 rounded-full bg-brand-teal" />
              <span className="text-brand-body">You have not opened your laptop</span>
            </div>
            <div className="rounded-xl bg-brand-white p-6">
              <p className="mb-4 text-sm font-bold uppercase tracking-wide">
                Four things happened while you slept. Your day is planned:
              </p>
              <ul className="space-y-3 text-sm">
                <li>Calendar blocks set, priorities ranked, conflicts flagged.</li>
                <li>LinkedIn draft written in your voice.</li>
                <li>Team pulse check complete, two follow-ups flagged.</li>
                <li>Client deck diagram exported and filed.</li>
              </ul>
            </div>
            <div className="mt-6">
              <Image
                src="/images/device-mockup.png"
                alt="Laptop and phone showing AIOS dashboard"
                width={520}
                height={360}
                className="ml-auto w-full max-w-md"
              />
            </div>
            <div className="mt-6">
              <Link href={RouteNames.Blueprint} className="inline-flex rounded-[10px] bg-brand-lime px-8 py-3.5 font-bold text-brand-black hover:bg-brand-cream transition-colors">
                Get Your Free AI Blueprint
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
