import { LandingHeroLaptopAnimation } from "@/feature/landing/components/LandingHeroLaptopAnimation";
import { LandingHeroTaskCard } from "@/feature/landing/components/LandingHeroTaskCard";

export function LandingHeroSection() {
  return (
    <section className="border-x border-b border-brand-gray2 bg-brand-surface mx-auto max-w-11/12">
      <div className="relative pt-20 border-b border-brand-gray2">
        <div className="relative w-full rounded-tr-[1.25rem] bg-brand-lime min-[1025px]:min-h-90 min-[1025px]:w-[75.45%]">
          <h1 className="w-full px-7.5 pt-6.5 pb-6.5 text-[clamp(1.75rem,6vw,2.625rem)] font-semibold leading-[1.15] tracking-[-0.08rem] text-brand-heading uppercase wrap-anywhere tablet:max-w-lg min-[1025px]:max-w-303.5 min-[1025px]:px-11.25 min-[1025px]:pt-24 min-[1025px]:pb-0 min-[1025px]:text-[4.5625rem] min-[1025px]:tracking-[-0.3194rem]">
            How to prepare your business for the agent-to-agent economy
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 border-b border-brand-gray2 min-[1025px]:grid-cols-[25%_75%]">
        <div className="order-1 flex flex-col justify-between gap-8 p-6 min-[1025px]:order-0 min-[1025px]:min-h-183 min-[1025px]:p-10 border-r border-brand-black">
          <p className="text-lg leading-relaxed text-brand-black">
            Automation Architecture AI builds AI operating system infrastructure
            for small businesses and startups — a done-for-you system that
            handles operations so founders can focus on growth. We serve the
            founder who wants the result without becoming the engineer.
          </p>
          <p className="hidden text-base leading-relaxed text-brand-gray min-[1025px]:block">
            That&apos;s not a pitch. That&apos;s a Tuesday — when your business
            runs on the right infrastructure.
          </p>
        </div>

        <div className="order-2 p-6 min-[1025px]:order-0 min-[1025px]:border-r">
          <div className="relative min-[1025px]:min-h-183">
            <LandingHeroTaskCard />
            <div className="relative mt-8 min-h-85 tablet:min-h-120 min-[1025px]:mt-0 min-[1025px]:min-h-183 p-0">
              <LandingHeroLaptopAnimation />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-lime px-5 py-10 text-brand-black min-[1025px]:hidden">
        <p className="text-[1.75rem] leading-[1.15]">
          That&apos;s not a pitch. That&apos;s a Tuesday — when your business
          runs on the right infrastructure.
        </p>
      </div>
    </section>
  );
}
