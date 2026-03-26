import Image from "next/image";

const TASK_ITEMS = [
  "Calendar blocks set, priorities ranked, conflicts flagged.",
  "A LinkedIn post sits in your drafts, written in your voice.",
  "Your team pulse check is done — status vs. goals, two follow-ups flagged.",
  "A finished PNG diagram you needed for a client deck? Sitting in your project folder.",
];

export function LandingHeroTaskCard() {
  return (
    <div className="z-20 w-full overflow-hidden rounded-2xl border border-brand-divider bg-brand-white shadow-sm min-[1536px]:absolute min-[1536px]:left-19.5 min-[1536px]:top-22.25 min-[1536px]:w-[clamp(22rem,33vw,40rem)]">
      <div className="bg-brand-black px-5 py-4 min-[1025px]:px-10 min-[1025px]:py-6">
        <div className="flex flex-wrap items-center gap-2.5 min-[1025px]:gap-3.75">
          <span className="h-3 w-[0.7125rem] rounded-[0.1875rem] bg-brand-lime" />
          <span className="text-base font-normal uppercase tracking-wide text-brand-white">
            MORNING
          </span>
          <span className="text-base font-normal text-brand-white">7:02am</span>
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
          {TASK_ITEMS.map((text) => (
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
  );
}
