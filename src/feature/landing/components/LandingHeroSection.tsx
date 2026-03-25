import Image from "next/image";

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

        <div className="order-2 p-6 min-[1025px]:order-0 min-[1025px]:border-r min-[1025px]:p-0">
          <div className="relative min-[1025px]:min-h-183">
            <div className="z-20 w-full overflow-hidden rounded-2xl border border-brand-divider bg-brand-white shadow-sm min-[1025px]:absolute min-[1025px]:left-[4.875rem] min-[1025px]:top-[5.5625rem] min-[1025px]:max-w-[36.625rem]">
              <div className="bg-brand-black px-5 py-4 min-[1025px]:px-10 min-[1025px]:py-6">
                <div className="flex flex-wrap items-center gap-2.5 min-[1025px]:gap-3.75">
                  <span className="h-3 w-[0.7125rem] rounded-[0.1875rem] bg-brand-lime" />
                  <span className="text-base font-normal uppercase tracking-wide text-brand-white">
                    MORNING
                  </span>
                  <span className="text-base font-normal text-brand-white">
                    7:02am
                  </span>
                </div>

                <div className="mt-2.5 flex flex-wrap items-center gap-2.5">
                  <span className="h-3 w-[0.7125rem] rounded-[0.1875rem] bg-brand-lime" />
                  <span className="text-base font-normal text-brand-white">
                    You haven&apos;t opened your laptop
                  </span>
                </div>
              </div>

              <div className="bg-brand-white px-5 pb-10 pt-7.5 min-[1025px]:px-11.25 min-[1025px]:pb-17.5 min-[1025px]:pt-10">
                <p className="mb-4 text-[1.5rem] font-bold uppercase leading-[1.15] tracking-[-0.01rem] text-brand-black">
                  Four things happened while you slept. Your day is planned:
                </p>

                <ul className="flex flex-col gap-3.75">
                  {[
                    "Calendar blocks set, priorities ranked, conflicts flagged.",
                    "A LinkedIn post sits in your drafts, written in your voice.",
                    "Your team pulse check is done — status vs. goals, two follow-ups flagged.",
                    "A finished PNG diagram you needed for a client deck? Sitting in your project folder.",
                  ].map((text) => (
                    <li
                      key={text}
                      className="flex items-center gap-2.5 rounded-[0.375rem] shadow-[0.25rem_0.25rem_0.75rem_0rem_rgba(0,0,0,0.05)]"
                    >
                      <span className="flex h-9.25 w-9.25 items-center justify-center rounded-[0.375rem] bg-brand-black p-2">
                        <Image
                          src="/icons/check.svg"
                          alt=""
                          width={25}
                          height={21}
                          className="h-5 w-auto"
                        />
                      </span>
                      <span className="flex flex-1 items-center justify-center rounded-[0.625rem] bg-brand-surface px-3.75 py-2 shadow-[0.1875rem_0.25rem_0.25rem_0rem_rgba(0,0,0,0.09)]">
                        <span className="text-base font-medium text-brand-black">
                          {text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative mt-8 min-h-85 tablet:min-h-120 min-[1025px]:mt-0 min-[1025px]:min-h-183">
              {/* Mobile: show laptop (but hide on tablet+) */}
              <div className="absolute inset-x-0 bottom-0 z-30 flex justify-center min-[1025px]:hidden">
                <Image
                  src="/icons/laptop-hero.svg"
                  alt="AI dashboard and laptop scene"
                  width={912}
                  height={608}
                  className="w-[24rem] object-contain tablet:w-[20rem]"
                />
              </div>

              <div className="hidden min-[1025px]:absolute min-[1025px]:inset-x-0 min-[1025px]:bottom-0 min-[1025px]:z-40 min-[1025px]:flex min-[1025px]:justify-end min-[1025px]:pr-10">
                <Image
                  src="/icons/laptop-hero.svg"
                  alt="AI dashboard and laptop scene"
                  width={912}
                  height={608}
                  className="w-190 object-contain"
                />
              </div>

              <div className="hidden min-[1025px]:absolute min-[1025px]:right-7.5 min-[1025px]:top-56.5 min-[1025px]:z-30 min-[1025px]:flex min-[1025px]:w-40 min-[1025px]:flex-col min-[1025px]:gap-2.5">
                <div className="flex items-center gap-2 rounded-[0.375rem] border border-brand-black bg-brand-white px-2.5 py-1.5">
                  <Image
                    src="/images/landing-hero-task-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="h-6 w-6"
                  />
                  <span className="text-base font-semibold text-brand-black">
                    Four tasks
                  </span>
                </div>
                <div className="rounded-[0.375rem] bg-brand-teal px-2.5 py-2 text-base font-medium text-brand-white">
                  Ninety seconds
                </div>
                <div className="rounded-[0.375rem] bg-brand-teal px-2.5 py-2 text-base font-medium text-brand-white">
                  Before breakfast
                </div>
              </div>

              <div className="absolute bottom-[1rem] left-0 right-0 z-20 flex flex-col items-center gap-2 min-[1025px]:hidden">
                <div className="flex w-full items-center justify-between px-6">
                  <div className="flex h-8.75 items-center gap-1.25 rounded-[0.375rem] border border-brand-black bg-brand-white px-2.5 py-1.5">
                    <Image
                      src="/images/landing-hero-task-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="h-4 w-4"
                    />
                    <span className="text-[0.875rem] font-semibold text-brand-black">
                      Four tasks
                    </span>
                  </div>
                  <div className="flex h-8.75 items-center rounded-[0.375rem] bg-brand-teal px-2.5 py-2.25">
                    <span className="text-[0.875rem] font-medium text-brand-white">
                      Ninety seconds
                    </span>
                  </div>
                </div>

                <div className="flex h-8.75 items-center rounded-[0.375rem] bg-brand-teal px-5 py-2.25">
                  <span className="text-[0.875rem] font-medium text-brand-white">
                    Before breakfast
                  </span>
                </div>
              </div>
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
