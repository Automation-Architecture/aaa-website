import { HowItWorksStepEight } from "@/feature/how-it-works/components/HowItWorksStepEight";
import { HowItWorksStepFive } from "@/feature/how-it-works/components/HowItWorksStepFive";
import { HowItWorksStepFour } from "@/feature/how-it-works/components/HowItWorksStepFour";
import { HowItWorksStepOne } from "@/feature/how-it-works/components/HowItWorksStepOne";
import { HowItWorksStepSeven } from "@/feature/how-it-works/components/HowItWorksStepSeven";
import { HowItWorksStepSix } from "@/feature/how-it-works/components/HowItWorksStepSix";
import { HowItWorksStepThree } from "@/feature/how-it-works/components/HowItWorksStepThree";
import { HowItWorksStepTwo } from "@/feature/how-it-works/components/HowItWorksStepTwo";

export function HowItWorksProcessSection() {
  return (
    <section className="border-b border-brand-gray2 bg-brand-white">
      <div className="grid wide:grid-cols-[26rem_minmax(0,1fr)]">
        <aside className="relative border-b border-brand-gray2 px-1 py-6 wide:border-b-0 wide:border-l wide:border-r wide:px-10 wide:py-10">
          <div className="relative mx-auto pt-[10rem] wide:sticky wide:top-20">
            <h2 className="text-[1.75rem] !capitalize font-bold leading-[1.06] tracking-[-0.03em] text-brand-heading">
              You clicked the button.
              <br />
              Now what?
            </h2>
            <p className="mt-5 text-[1.25rem] leading-[1.35] text-brand-gray">
              Here&apos;s the full path from first contact to running system -
              with a clear deliverable at every step.
            </p>
            <span
              className="absolute -right-[7rem] top-[14rem] hidden h-[5rem] w-[3.75rem] bg-brand-teal [mask-image:url('/icons/right-arrow.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] wide:block"
              aria-hidden
            />
          </div>
        </aside>

        <div className="space-y-4 border-r border-brand-gray2 px-8 pt-4 pb-40 tablet:px-5 tablet:pt-5 tablet:pb-[10rem] wide:pt-5 wide:pb-[10rem] wide:pl-[10rem] wide:pr-0">
          <HowItWorksStepOne />
          <HowItWorksStepTwo />
          <HowItWorksStepThree />
          <HowItWorksStepFour />
          <HowItWorksStepFive />
          <HowItWorksStepSix />
          <HowItWorksStepSeven />
          <HowItWorksStepEight />
        </div>
      </div>
    </section>
  );
}
