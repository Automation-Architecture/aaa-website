import Image from "next/image";
import Link from "next/link";
import { RouteNames } from "@/constants";

const cases = [
  {
    title: "The Morning Brief",
    highlight: "74 calls analyzed overnight.\nOne brief by 7am",
    body: "Because the system knows the business fully — team, revenue, priorities, every active project — it can synthesize 74 calls across multiple streams into one brief that actually makes sense. Complete with a SWOT review. The founder becomes the most informed person in the organization before breakfast.",
  },
  {
    title: "Lead Pipeline — Built in One Week",
    highlight: "15 hours a week on lead gen.\nThen zero.",
    body: "A service business owner spending 15 hours a week on research, outreach, and follow-ups. With an AIOS, the entire flow is automated in one week: scoring, drafting, nurturing, and project handoff with full context intact. That bandwidth goes straight back into client delivery.",
  },
  {
    title: "Landing Page From a Phone",
    highlight: "Voice note in. Live page out.\nBefore he got home.",
    body: "A founder needs a lead magnet page for a YouTube video. He opens Telegram from his car, explains what he needs via voice note. The system matches his site\u2019s design and copy, builds the page, and deploys it \u2014 all before he pulls into the driveway.",
  },
  {
    title: "Content Pipeline",
    highlight: "Idea to publish-ready \u2014 from a voice note.",
    body: "A founder captures a content idea via Telegram while walking. The system pulls the last 7 days of content context, aligns to brand positioning, and produces a LinkedIn post in his voice plus a 7-slide carousel \u2014 saved to the project folder, ready to publish.",
  },
];

function SeeAllBtn({ className }: { className?: string }) {
  return (
    <Link
      href={RouteNames.UseCases}
      className={[
        "group flex h-13.75 items-stretch overflow-hidden rounded-bl-[1.25rem] bg-brand-teal transition-colors duration-300 hover:bg-brand-black",
        className ?? "",
      ].join(" ")}
    >
      <div className="flex flex-1 items-center justify-center bg-brand-teal transition-colors duration-300 group-hover:bg-brand-black">
        <span className="text-[1rem] font-normal uppercase text-brand-white">
          See all use cases
        </span>
      </div>
      <div className="flex w-13.75 shrink-0 items-center justify-center border-l border-brand-gray2 bg-brand-teal transition-colors duration-300 group-hover:bg-brand-black">
        <Image
          src="/icons/right-arrow.svg"
          alt=""
          width={11}
          height={16}
          className="h-4 w-2.75"
        />
      </div>
    </Link>
  );
}

export function LandingUseCasesSection() {
  return (
    <section className="border border-brand-gray2 bg-brand-white overflow-hidden mx-auto max-w-11/12">
      <div className="grid grid-cols-1 items-stretch border-b border-brand-gray2 min-[1025px]:grid-cols-4">
        {cases.map((c, idx) => (
          <div
            key={c.title}
            className={[
              "border-brand-gray2",
              idx !== 0 ? "border-t min-[1025px]:border-t-0" : "",
              idx !== 0 ? "min-[1025px]:border-l" : "",
              "p-5 min-[1025px]:px-5 min-[1025px]:py-11.25",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {/* inner container with corner brackets */}
            <div className="relative flex flex-col gap-2.5 px-2.5 py-10">
              {/* corner brackets */}
              <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-brand-gray2" />
              <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-brand-gray2" />
              <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-brand-gray2" />
              <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-brand-gray2" />

              {/* title */}
              <p className="text-[1rem] font-bold leading-[1.4375rem] text-brand-black">
                {c.title}
              </p>

              {/* highlight + body stacked with gap */}
              <div className="flex flex-col gap-5">
                <p className="whitespace-pre-line text-[1rem] font-bold leading-snug text-brand-teal">
                  {c.highlight}
                </p>
                <p className="text-[1rem] leading-[1.4375rem] text-brand-body">
                  {c.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── MOBILE: button full-width flush below cards ── */}
      <div className="min-[1025px]:hidden">
        <SeeAllBtn className="w-full rounded-none rounded-bl-[1.25rem]" />
      </div>

      {/* ── DESKTOP: 115px bar, button pinned top-right ── */}
      <div className="relative hidden h-28.75 min-[1025px]:block">
        <div className="absolute right-0 top-0">
          <SeeAllBtn className="w-[27.5rem]" />
        </div>
      </div>
    </section>
  );
}
