import Image from "next/image";

function TimeRatioCopy({ className }: { className?: string }) {
  return (
    <div className={className}>
      <p className="text-base font-medium text-brand-gray tablet:text-lg wide:text-xl">
        Together, they invert the founder&apos;s time ratio
      </p>
      <p className="mt-3 text-base font-bold text-brand-teal tablet:mt-3 tablet:text-lg wide:mt-3 wide:text-xl">
        from 80% maintenance / 20% growth
      </p>
      <p className="mt-1 text-base font-bold text-brand-teal tablet:text-lg wide:text-xl">
        to 20-30% maintenance / 70-80% growth.
      </p>
      <p className="mt-4 text-base font-medium text-brand-gray tablet:mt-4 tablet:text-lg wide:mt-4 wide:text-xl">
        The system compounds in value over time, becoming an appreciating
        business asset rather than a recurring cost.
      </p>
    </div>
  );
}

export function SolutionIntroSection() {
  return (
    <section className="border-b border-l border-r border-brand-gray2">
      <div className="flex min-w-0 flex-col gap-4 desktop:gap-0 desktop:flex-row desktop:items-stretch">
        <div className="flex min-h-0 min-w-0 flex-col justify-between gap-10 border-b border-brand-gray2 px-5 py-[1.875rem] text-base font-medium leading-normal tablet:px-8 desktop:min-h-[45.625rem] desktop:w-[27.8125rem] desktop:shrink-0 desktop:border-b-0 desktop:border-r desktop:px-10 desktop:py-15 desktop:text-xl">
          <p className="max-w-md text-brand-black">
            <span className="font-bold text-brand-teal">
              An AIOS (AI Operating System){" "}
            </span>
            is an autonomous infrastructure layer built on three pillars — the
            Business Context Data Engine, Dashboard Intelligence, and Automated
            Task Management.
          </p>
          <p className="hidden max-w-md text-brand-gray desktop:block">
            That&apos;s not a pitch.
            <br />
            That&apos;s a Tuesday — when your business runs on the right
            infrastructure.
          </p>
        </div>

        {/* Below wide: stack (mobile + tablet + narrow desktop). At wide+: mockup | copy with flexible fr + min text width. */}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4 bg-brand-white px-5 py-[1.875rem] tablet:px-8 wide:grid wide:min-h-[45.625rem] wide:grid-cols-[minmax(0,1.12fr)_minmax(18.75rem,1fr)] wide:items-center wide:gap-7 wide:px-0 wide:py-0">
          <div className="order-2 min-w-0 wide:order-none wide:col-start-1">
            <div className="mx-auto w-full min-w-0 max-w-[46.875rem] overflow-hidden rounded-[1.25rem] wide:mx-0 wide:max-w-none">
              <Image
                src="/solution_task.png"
                alt="Interface mockup highlighting Business Context Data Engine, Dashboard Intelligence, and Automated Task Management"
                width={750}
                height={730}
                className="h-auto w-full object-contain"
                sizes="(min-width: 1280px) min(46.875rem, 55vw), 100vw"
                priority
              />
            </div>
          </div>
          <div className="order-1 flex min-w-0 w-full flex-col wide:order-none wide:col-start-2 wide:max-w-[31.25rem] wide:justify-center wide:pr-10">
            <TimeRatioCopy />
          </div>
        </div>
      </div>
    </section>
  );
}
