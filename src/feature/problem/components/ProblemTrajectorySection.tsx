import Image from "next/image";

import { TrajectoryLineCarousel } from "./TrajectoryLineCarousel";

export function ProblemTrajectorySection() {
  return (
    <section id="section-the-trajectory" className="border-b border-brand-gray2">
      <div className="bg-brand-black px-5 py-5 text-center tablet:px-8 tablet:py-6 desktop:hidden">
        <h2
          id="the-trajectory"
          className="text-2xl font-medium uppercase tracking-[-0.04em] text-brand-white"
        >
          The Trajectory
        </h2>
      </div>

      <div className="desktop:hidden">
        <div className="mx-5 border-x border-brand-gray2 px-5 py-7 tablet:mx-8 tablet:px-7 tablet:py-8">
          <p className="leading-[1.3] text-base text-brand-gray">
            This doesn&apos;t plateau. When 80% of your time goes to
            maintenance, growth flatlines. Not because you lack ambition, but
            because you have zero bandwidth left to deploy.
          </p>

          <div className="mt-6 space-y-6">
            <TrajectoryLineCarousel />
            <Image
              src="/images/trajectory-list.png"
              alt="Trajectory milestone list"
              width={607}
              height={376}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mx-5 border-x border-brand-gray2 border-t bg-brand-offwhite px-5 py-7 tablet:mx-8 tablet:px-7 tablet:py-8">
          <p className="font-bold leading-[1.3] text-brand-teal">
            Not from a single failure, but from the slow erosion of the
            founder&apos;s capacity to do anything beyond keep it alive.
          </p>
        </div>
      </div>

      <div className="hidden desktop:grid desktop:grid-cols-[27.8125rem_1fr]">
        <div className="border-r border-brand-gray2 bg-brand-white">
          <div className="bg-brand-black px-10 py-10">
            <h2 className="text-4xl font-bold uppercase leading-[1.05] tracking-[-0.03em] text-brand-white">
              The
              <br />
              Trajectory
            </h2>
          </div>
        </div>

        <div className="min-w-0 border-r border-brand-gray2">
          <div className="border-b border-brand-gray2 px-16 py-16 min-[1200px]:px-20 min-[1200px]:py-20">
            <p className="max-w-153 text-xl leading-[1.35] text-brand-gray">
              This doesn&apos;t plateau. When 80% of your time goes to
              maintenance, growth flatlines. Not because you lack ambition, but
              because you have zero bandwidth left to deploy.
            </p>

            <div className="mt-10 grid items-start gap-8 min-[1200px]:grid-cols-[minmax(0,40rem)_minmax(20rem,1fr)]">
              <TrajectoryLineCarousel />
              <Image
                src="/images/trajectory-list.png"
                alt="Trajectory milestone list"
                width={607}
                height={376}
                className="h-auto w-full min-[1200px]:max-w-151.75 min-[1200px]:justify-self-end"
              />
            </div>
          </div>

          <div className="bg-brand-offwhite px-16 py-10 min-[1200px]:px-20 min-[1200px]:py-12">
            <p className="max-w-257 text-[1.25rem] font-bold leading-[1.35] text-brand-teal">
              Not from a single failure, but from the slow erosion of the
              founder&apos;s capacity to do anything beyond keep it alive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
