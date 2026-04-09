export function HowItWorksStepTwo() {
  return (
    <article className="group relative bg-brand-white">
      <div className="flex w-full flex-col items-center wide:flex-row wide:items-center wide:gap-0">
        <div className="flex w-full flex-col items-center wide:w-35 wide:shrink-0 wide:flex-row wide:justify-end">
          <div className="flex shrink-0 items-center justify-center rounded-[0.3125rem] bg-brand-teal px-7 py-1.5 transition-colors duration-200 group-hover:bg-brand-lime wide:px-10 wide:py-1.5">
            <span className="whitespace-nowrap text-center text-lg font-bold uppercase leading-none tracking-wide text-brand-white transition-colors duration-200 group-hover:text-brand-heading wide:text-2xl">
              FASE 1
            </span>
          </div>
          <div
            className="mx-auto h-11 w-px min-w-px max-w-px shrink-0 bg-brand-divider wide:hidden"
            aria-hidden
          />
          <div
            className="hidden h-0.5 w-12 shrink-0 bg-brand-gray2 transition-colors duration-200 group-hover:bg-brand-lime wide:block"
            aria-hidden
          />
        </div>

        <div
          className="mt-0 min-w-0 w-full flex-1 rounded-[0.625rem] bg-brand-white shadow-[inset_0_0_0_1px_var(--color-brand-divider)] transition-shadow duration-200 group-hover:shadow-[inset_0_0_0_4px_var(--color-brand-lime)] wide:mt-10 wide:rounded-br-none wide:rounded-tr-none wide:rounded-bl-[0.625rem] wide:rounded-tl-[0.625rem] wide:group-hover:shadow-[inset_-1px_0_0_0_var(--color-brand-divider),inset_0_4px_0_0_var(--color-brand-lime),inset_4px_0_0_0_var(--color-brand-lime),inset_0_-4px_0_0_var(--color-brand-lime)]"
        >
          <div className="p-6 wide:py-12 wide:pl-6 wide:pr-13.5">
            <h3 className="text-[2rem] font-semibold uppercase leading-none tracking-[-0.05em] text-brand-heading tablet:text-[2.25rem] wide:text-[3rem] wide:tracking-[-0.06em]">
              IDEA
            </h3>
            <p className="mt-3 max-w-198 text-base font-medium leading-normal text-brand-gray tablet:text-lg wide:mt-3 wide:text-xl wide:leading-[1.4]">
              You fill out a short intake form on our website. We generate a
              personalized{" "}
              <span className="font-bold text-brand-teal">AI Blueprint</span> —
              industry-specific automation recommendations that show what&apos;s
              possible for your business.
            </p>
          </div>

          <div className="px-5 pb-6 wide:px-0 wide:pb-12 wide:pl-13.5">
            <div className="w-full rounded-bl-[0.625rem] rounded-tl-[0.625rem] bg-brand-surface px-5 pb-6 pt-2.5 transition-colors duration-200 group-hover:bg-brand-lime wide:rounded-[0.625rem] wide:px-10 wide:py-8 wide:pt-8">
              <div className="-mx-5 inline-flex items-center rounded-br-[0.3125rem] rounded-tr-[0.3125rem] bg-brand-black px-5 py-2.5 wide:mx-0">
                <span className="text-[1.125rem] font-bold leading-none text-brand-lime wide:text-xl">
                  [ You receive ]
                </span>
              </div>
              <p className="mt-6 text-base font-medium leading-normal text-brand-black wide:mt-8 wide:text-xl wide:leading-normal">
                A free AI Blueprint tailored to your industry. No call required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
