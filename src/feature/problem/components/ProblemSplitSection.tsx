import Image from "next/image";

export function ProblemSplitSection() {
  return (
    <section
      id="section-the-80-20-split"
      className="border-b border-brand-gray2"
    >
      <div className="bg-brand-black px-5 py-5 text-center tablet:px-8 tablet:py-6 desktop:hidden">
        <h2
          id="the-80-20-split"
          className="text-2xl font-medium uppercase tracking-[-0.04em] text-brand-white"
        >
          The 80/20 Split
        </h2>
      </div>

      <div className="desktop:hidden">
        <div className="mx-5 border-x border-brand-gray2 px-5 py-7 tablet:mx-8 tablet:px-7 tablet:py-8">
          <div className="min-w-0">
            <p className="leading-[1.3] text-base! text-brand-gray">
              The Operator Trap is a pattern where 80% of a founder&apos;s
              working hours go to operational maintenance, leaving only 20% for
              growth work.
            </p>
            <p className="mt-4 font-bold leading-[1.3] text-brand-teal">
              We see it in almost every small business we talk to.
            </p>
            <p className="mt-6 leading-[1.3] text-brand-gray">
              <span className="font-bold text-brand-teal">
                The Alternative Board{" "}
              </span>
              found that small business owners spend the majority of their time
              on email, employee management, and customer-facing tasks rather
              than strategic growth.
            </p>
            <p className="mt-4 leading-[1.3] text-brand-gray">
              <span className="font-bold text-brand-teal">HBR </span>
              adds another layer: the average knowledge worker toggles between
              applications 1,200 times per day, losing the equivalent of five
              working weeks per year to context switching alone (HBR, Murty et
              al., 2022).
            </p>
          </div>

          <div className="mt-6 flex justify-center">
            <Image
              src="/images/split-chart.png"
              alt="80/20 split chart"
              width={610}
              height={610}
              className="h-auto w-90 min-[1200px]:w-80"
            />
          </div>
        </div>

        <div className="mx-5 border-x border-brand-gray2 border-t bg-brand-offwhite px-5 py-7 tablet:mx-8 tablet:px-7 tablet:py-8">
          <h3 className="text-2xl font-medium leading-[1.1] tracking-[-0.02em] text-brand-heading">
            The split is brutal.
          </h3>
          <p className="mt-4 leading-[1.3] text-brand-gray">
            Four out of five working hours go to maintenance - admin,
            firefighting, meetings, legal, finance, keeping the lights on. The
            remaining fraction goes to the work that actually grows the
            business. New channels. New products. Strategy. The work that
            excites you and drove you to start the company in the first place.
          </p>
          <p className="mt-4 font-bold leading-[1.3] text-brand-teal">
            You&apos;re basically the highest-paid admin person in your entire
            company. As the founder, it&apos;s ridiculous and it really sucks
            all the life out of you.
          </p>
        </div>
      </div>

      <div className="hidden desktop:grid desktop:grid-cols-[27.8125rem_1fr]">
        <div className="border-r border-brand-gray2 bg-brand-white">
          <div className="bg-brand-black px-10 py-10">
            <h2 className="text-4xl font-bold uppercase leading-[1.05] tracking-[-0.03em] text-brand-white">
              The 80/20
              <br />
              Split
            </h2>
          </div>
        </div>

        <div className="min-w-0 border-r border-brand-gray2">
          <div className="grid items-stretch gap-10 border-b border-brand-gray2 px-16 py-16 min-[1200px]:px-20 min-[1440px]:grid-cols-[38.875rem_1fr] min-[1440px]:pr-0 min-[1440px]:py-20">
            <div className="min-w-0 min-[1200px]:flex min-[1200px]:min-h-124 min-[1200px]:flex-col min-[1200px]:justify-start min-[1440px]:min-h-136">
              <p className="leading-6 text-brand-gray text-xl">
                The Operator Trap is a pattern where 80% of a founder&apos;s
                working hours go to operational maintenance, leaving only 20%
                for growth work.
              </p>
              <p className="mt-6 font-bold leading-[1.35] text-brand-teal text-xl">
                We see it in almost every small business we talk to.
              </p>
              <p className="mt-30 leading-[1.35] text-brand-gray text-xl">
                <span className="font-bold text-brand-teal">
                  The Alternative Board{" "}
                </span>
                found that small business owners spend the majority of their
                time on email, employee management, and customer-facing tasks
                rather than strategic growth.
              </p>
              <p className="mt-6 leading-[1.35] text-brand-gray text-xl">
                <span className="font-bold text-brand-teal">HBR </span>
                adds another layer: the average knowledge worker toggles between
                applications 1,200 times per day, losing the equivalent of five
                working weeks per year to context switching alone (HBR, Murty et
                al., 2022).
              </p>
            </div>
            <div className="flex items-center justify-center min-[1440px]:justify-end">
              <Image
                src="/images/split-chart.png"
                alt="80/20 split chart"
                width={610}
                height={610}
                className="h-auto w-116 min-[1200px]:w-132 min-[1440px]:w-138"
              />
            </div>
          </div>

          <div className="bg-brand-offwhite px-20 py-12">
            <p className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-brand-heading">
              The split is brutal.
            </p>
            <p className="mt-4 max-w-275 text-xl leading-[1.35] text-brand-gray2">
              Four out of five working hours go to maintenance - admin,
              firefighting, meetings, legal, finance, keeping the lights on. The
              remaining fraction goes to the work that actually grows the
              business. New channels. New products. Strategy. The work that
              excites you and drove you to start the company in the first place.
            </p>
            <p className="mt-4 max-w-275 text-xl font-bold leading-[1.35] text-brand-teal">
              You&apos;re basically the highest-paid admin person in your entire
              company. As the founder, it&apos;s ridiculous and it really sucks
              all the life out of you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
