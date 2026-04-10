import Image from "next/image";

import { ProblemOverwhelmToolsLayoutAnimation } from "./ProblemOverwhelmToolsLayoutAnimation";

export function ProblemOverwhelmSection() {
  return (
    <section
      id="section-the-overwhelm-is-real"
      className="border-b border-brand-gray2"
    >
      <div className="bg-brand-black px-5 py-5 text-center tablet:px-8 tablet:py-6 desktop:hidden">
        <h2
          id="the-overwhelm-is-real"
          className="text-2xl font-medium uppercase tracking-[-0.04em] text-brand-white"
        >
          The Overwhelm Is Real
        </h2>
      </div>

      <div className="desktop:hidden">
        <div className="mx-5 border-x border-brand-gray2 px-5 pb-15 pt-7 tablet:mx-8 tablet:px-7 tablet:py-8">
          <Image
            src="/images/i_look-into.png"
            alt="I've looked into automation tools and felt overwhelmed by the options."
            width={680}
            height={220}
            className="h-auto w-full"
          />

          <p className="mt-6 leading-[1.3] text-brand-gray">
            According to There&apos;s An AI For That (theresanaiforthat.com),
            there are over 46,700 AI tools available as of early 2026. That
            number validates the overwhelm. You&apos;re not behind. You&apos;re
            not missing something obvious. There are 46,700 options and none of
            them connect to each other.
          </p>
          <p className="mt-6 font-bold leading-[1.3] text-brand-teal">
            Every creator and educator has a trick, a hack, a prompt to show
            you. The problem is that none of it gives you a unifying system to
            add it to. That&apos;s why it doesn&apos;t work. None of it
            compounds.
          </p>
          <p className="mt-6 leading-[1.3] text-brand-gray">
            You&apos;ve been doing the right things. ChatGPT, Zapier, browser
            extensions - the instinct to adopt AI was correct. The problem is
            that none of it was connected to a system.
          </p>

          <ProblemOverwhelmToolsLayoutAnimation
            className="mt-6"
            direction="row"
          />

          <p className="leading-[1.3] text-brand-gray">
            Tools without architecture don&apos;t compound. They accumulate.
          </p>
        </div>
      </div>

      <div className="hidden desktop:grid desktop:grid-cols-[27.8125rem_1fr]">
        <div className="border-r border-brand-gray2 bg-brand-white desktop:flex desktop:flex-col">
          <div className="bg-brand-black px-10 py-10">
            <h2 className="text-4xl font-bold uppercase leading-[1.05] tracking-[-0.03em] text-brand-white">
              The Overwhelm
              <br />
              Is Real
            </h2>
          </div>
          <div className="mt-auto px-10 pb-14 pt-24 min-[1200px]:pt-34">
            <p className="text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-brand-gray">
              Tools without architecture don&apos;t compound.
            </p>
            <p className="mt-2 text-2xl font-medium leading-[1.15] tracking-[-0.02em] text-brand-gray">
              They accumulate.
            </p>
          </div>
        </div>

        <div className="min-w-0 border-r border-brand-gray2">
          <div className="flex flex-wrap items-start gap-8 px-16 py-16 min-[1200px]:px-20 min-[1200px]:py-17 min-[1600px]:flex-nowrap">
            <div className="min-w-0 flex-1 basis-156">
              <Image
                src="/images/i_look-into.png"
                alt="I've looked into automation tools and felt overwhelmed by the options."
                width={680}
                height={220}
                className="h-auto w-full max-w-170"
              />

              <p className="mt-8 max-w-155 text-xl leading-[1.35] text-brand-gray">
                According to There&apos;s An AI For That
                (theresanaiforthat.com), there are over 46,700 AI tools
                available as of early 2026. That number validates the overwhelm.
                You&apos;re not behind. You&apos;re not missing something
                obvious. There are 46,700 options and none of them connect to
                each other.
              </p>
              <p className="mt-8 max-w-155 text-xl font-bold leading-[1.35] text-brand-teal">
                Every creator and educator has a trick, a hack, a prompt to show
                you. The problem is that none of it gives you a unifying system
                to add it to. That&apos;s why it doesn&apos;t work. None of it
                compounds.
              </p>
              <p className="mt-8 max-w-155 text-xl leading-[1.35] text-brand-gray">
                You&apos;ve been doing the right things. ChatGPT, Zapier,
                browser extensions - the instinct to adopt AI was correct. The
                problem is that none of it was connected to a system.
              </p>
            </div>

            <aside className="w-full rounded-[1.25rem] border border-brand-divider px-7.5 py-10 min-[1200px]:flex min-[1200px]:w-92.5 min-[1200px]:min-h-161.5 min-[1200px]:items-center min-[1200px]:justify-center min-[1600px]:shrink-0">
              <ProblemOverwhelmToolsLayoutAnimation direction="column" />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
