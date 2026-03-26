import Image from "next/image";

export function ProblemBridgeSection() {
  return (
    <section id="section-the-bridge" className="border-r border-brand-gray2">
      <div className="bg-brand-lime px-5 py-5 text-center tablet:px-8 tablet:py-6 desktop:hidden">
        <h2
          id="the-bridge"
          className="text-2xl font-medium uppercase tracking-[-0.04em] text-brand-black"
        >
          The Bridge
        </h2>
      </div>

      <div className="desktop:hidden">
        <div className="mx-5 border-x border-brand-gray2 px-5 py-7 tablet:mx-8 tablet:px-7 tablet:py-8">
          <p className="leading-[1.3] text-brand-gray">
            When the maintenance load lifts - when the Operator Trap breaks -
            something changes.
          </p>
          <p className="mt-4 text-[2rem] font-medium leading-[1.15] tracking-[-0.02em] text-brand-heading">
            You can focus. Not on everything. On the one thing that actually
            matters.
          </p>
          <p className="mt-4 leading-[1.3] text-brand-gray">
            Once you have this bandwidth, it is a completely life-changing
            experience as a founder. Like a laser beam just pointed at a new
            initiative or a new channel or a new product.
          </p>

          <div className="mt-6 rounded-[0.9375rem] border border-brand-divider bg-brand-surface p-5">
            <p className="text-[1.25rem] leading-[1.35] text-brand-heading">
              <span className="block">That&apos;s what this is about.</span>
              <span className="mt-2 block">Not adding more tools.</span>
              <span className="mt-2 block">
                Building the system that gives you your bandwidth back.
              </span>
            </p>
          </div>

          <Image
            src="/images/bridge-funel.png"
            alt="Bridge funnel visual"
            width={510}
            height={367}
            className="mt-6 h-auto w-full"
          />
        </div>
      </div>

      <div className="hidden desktop:grid desktop:grid-cols-[27.8125rem_1fr]">
        <div className="border-x border-brand-gray2 bg-brand-white">
          <div className="bg-brand-lime px-10 py-10">
            <h2 className="text-4xl font-bold uppercase leading-[1.05] tracking-[-0.03em] text-brand-black">
              The Bridge
            </h2>
          </div>
        </div>

        <div className="min-w-0 border-r border-brand-gray2">
          <div className="px-16 py-16 min-[1200px]:px-20 min-[1200px]:py-17">
            <p className="text-xl leading-[1.35] text-brand-gray">
              When the maintenance load lifts - when the Operator Trap breaks -
              something changes.
            </p>
            <p className="mt-4 text-[2.125rem] font-medium leading-[1.15] tracking-[-0.02em] text-brand-heading">
              You can focus. Not on everything. On the one thing that actually
              matters.
            </p>
            <p className="mt-4 max-w-266 text-xl leading-[1.35] text-brand-gray">
              Once you have this bandwidth, it is a completely life-changing
              experience as a founder. Like a laser beam just pointed at a new
              initiative or a new channel or a new product.
            </p>

            <div className="relative mt-30 min-[1536px]:min-h-99.5">
              <div className="mt-20 w-full rounded-[0.9375rem] border border-brand-divider bg-brand-surface p-10 min-[1536px]:max-w-169.25 min-[1536px]:pr-36">
                <p className="text-base font-semibold leading-[1.35] text-brand-heading">
                  <span className="block">That&apos;s what this is about.</span>
                  <span className="mt-2 block">Not adding more tools.</span>
                  <span className="mt-2 block">
                    Building the system that gives you your bandwidth back.
                  </span>
                </p>
              </div>

              <div className="mt-6 flex justify-center min-[1536px]:absolute min-[1536px]:right-0 min-[1536px]:top-1/2 min-[1536px]:mt-0 min-[1536px]:-translate-y-1/2 min-[1536px]:justify-start">
                <Image
                  src="/images/bridge-funel.png"
                  alt="Bridge funnel visual"
                  width={510}
                  height={367}
                  className="h-auto w-120.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
