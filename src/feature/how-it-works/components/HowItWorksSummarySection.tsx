import Image from "next/image";
import { cn } from "@/utils/cn";

const ROADMAP_IMAGE = "/images/how-it-work-roadmap.png";
const ROADMAP_WIDTH = 1760;
const ROADMAP_HEIGHT = 1530;

const SUMMARY_STEPS = [
  {
    title: "IDEA",
    happens: "Short intake form",
    youGet: "Free AI Blueprint",
    isOngoing: false,
  },
  {
    title: "CONSULT",
    happens: "30-45 min call",
    youGet: "Proposal with pricing (1-2 days)",
    isOngoing: false,
  },
  {
    title: "DESIGN",
    happens: "Kickoff + context capture",
    youGet: "Architectural design document",
    isOngoing: false,
  },
  {
    title: "BUILD",
    happens: "We build; you get weekly updates",
    youGet: "Loom updates + project board access",
    isOngoing: false,
  },
  {
    title: "TEST",
    happens: "Internal QA, then your review",
    youGet: "Loom demo + feedback round",
    isOngoing: false,
  },
  {
    title: "DEPLOY",
    happens: "System goes live",
    youGet: "Running system + documentation",
    isOngoing: false,
  },
  {
    title: "ONGOING",
    happens: "Ongoing partnership",
    youGet: "Support, maintenance, evolution",
    isOngoing: true,
  },
] as const;

function SummaryCardBody({
  happens,
  youGet,
}: {
  happens: string;
  youGet: string;
}) {
  return (
    <div className="rounded-b-[10px] bg-[#ebebeb]/85">
      <div className="rounded-bl-[10px] border-b border-l border-brand-divider">
        <div className="border-b border-brand-divider px-4 py-4 pl-4.5">
          <p className="text-base font-medium text-brand-gray2">
            [ What Happens ]
          </p>
          <p className="mt-1 text-lg font-medium leading-snug text-brand-black">
            {happens}
          </p>
        </div>
        <div className="px-4 py-4 pl-4.5">
          <p className="text-base font-medium text-brand-gray2">
            [ What You Get ]
          </p>
          <p className="mt-1 text-lg font-bold leading-snug text-brand-teal">
            {youGet}
          </p>
        </div>
      </div>
    </div>
  );
}

function MobileSummaryStepCard({
  title,
  happens,
  youGet,
  isOngoing,
}: {
  title: string;
  happens: string;
  youGet: string;
  isOngoing: boolean;
}) {
  return (
    <article className="w-full overflow-hidden rounded-[10px] shadow-[4px_4px_18px_0px_rgba(0,0,0,0.08)]">
      <div
        className={cn(
          "flex min-h-17.5 w-full items-center justify-center border-b border-t border-brand-teal px-4 py-3",
          isOngoing
            ? "rounded-t-[10px] bg-brand-teal"
            : "bg-white",
        )}
      >
        <h3
          className={cn(
            "text-center text-[1.625rem] font-bold uppercase tracking-tight",
            isOngoing ? "text-white" : "text-brand-black",
          )}
        >
          {title}
        </h3>
      </div>
      <div className="pl-5 pr-0 pt-0">
        <SummaryCardBody happens={happens} youGet={youGet} />
      </div>
    </article>
  );
}

export function HowItWorksSummarySection() {
  return (
    <section className="border-x border-b border-brand-gray2 bg-brand-surface">
      <div className="grid desktop:grid-cols-2">
        <div className="flex items-center justify-center bg-brand-black px-5 py-5 tablet:px-10 tablet:py-6 desktop:min-h-45 desktop:justify-start desktop:px-15 desktop:py-0">
          <h2 className="text-center text-[2rem] font-semibold uppercase tracking-[-0.094em] text-white tablet:text-[2.5rem] desktop:text-left desktop:text-[3.75rem] desktop:tracking-[-0.05em]">
            Summary
          </h2>
        </div>
        <div className="hidden min-h-45 border-b border-r border-brand-gray2 desktop:block" />
      </div>

      <div className="border-x border-brand-gray2 bg-brand-offwhite px-0 pt-8 pb-15 desktop:hidden">
        <div className="flex w-full flex-col gap-[30px]">
          {SUMMARY_STEPS.map((step) => (
            <MobileSummaryStepCard
              key={step.title}
              title={step.title}
              happens={step.happens}
              youGet={step.youGet}
              isOngoing={step.isOngoing}
            />
          ))}
        </div>
      </div>

      <div className="hidden border-x border-brand-gray2 bg-brand-surface desktop:block">
        <Image
          src={ROADMAP_IMAGE}
          alt="Seven-step roadmap: IDEA, CONSULT, DESIGN, BUILD, TEST, DEPLOY, and ONGOING, with what happens and what you get at each stage."
          width={ROADMAP_WIDTH}
          height={ROADMAP_HEIGHT}
          className="h-auto w-full"
          sizes="(min-width: 1024px) min(100vw, 1280px), 100vw"
        />
      </div>
    </section>
  );
}
