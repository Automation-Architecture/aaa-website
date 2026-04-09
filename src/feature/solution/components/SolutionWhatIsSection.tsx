import Image from "next/image";

export function SolutionWhatIsSection() {
  return (
    <section className="border-b border-l border-r border-brand-gray2">
      <div className="flex flex-col min-[1536px]:flex-row min-[1536px]:items-stretch">
        <div className="flex min-h-[11rem] flex-1 items-center bg-brand-black px-6 py-8 tablet:min-h-[14.375rem] tablet:px-12 tablet:py-10 min-[1536px]:min-h-[14.375rem] min-[1536px]:px-[3.75rem]">
          <h2 className="text-[1.75rem] font-semibold uppercase leading-tight tracking-[-0.03em] text-white tablet:text-[2.5rem] desktop:text-[3.75rem] desktop:tracking-[-0.05em]">
            What an AIOS Actually Is
          </h2>
        </div>
        <div className="hidden min-h-[11rem] flex-1 bg-brand-surface min-[1536px]:block min-[1536px]:min-h-[14.375rem] min-[1536px]:border-b min-[1536px]:border-l min-[1536px]:border-brand-gray2" />
      </div>

      <div className="flex flex-col min-[1536px]:flex-row min-[1536px]:items-stretch">
        <div className="border-b border-brand-gray2 px-6 py-10 text-[1.125rem] leading-normal tablet:px-10 tablet:py-12 min-[1536px]:h-[35.125rem] min-[1536px]:w-1/2 min-[1536px]:border-b-0 min-[1536px]:border-r min-[1536px]:px-10 min-[1536px]:py-[3.75rem]">
          <div className="mx-auto flex max-w-[48.8125rem] flex-col gap-5 font-semibold min-[1536px]:text-[1.25rem]">
            <p className="text-brand-black">
              An AIOS (AI Operating System) is an autonomous infrastructure
              layer that wraps around an entire business — operations, data,
              intelligence, and communications — and runs whether the founder is
              at their desk or not.
            </p>
            <p className="font-semibold text-brand-gray">
              It&apos;s not a tool you open. It&apos;s infrastructure that runs.
              It knows your business the way a co-founder would — your team,
              your products, your financials, your priorities — and it acts on
              that knowledge every day.
            </p>
          </div>
        </div>

        <div className="relative flex min-h-[35rem] flex-1 flex-col bg-brand-white pb-24 pl-6 pr-6 pt-10 tablet:pl-8 tablet:pr-8 tablet:pt-12 min-[1536px]:min-h-[35.125rem] min-[1536px]:pb-0 min-[1536px]:pl-[2.75rem] min-[1536px]:pr-0 min-[1536px]:pt-0">
          <div className="relative z-10 min-[1536px]:pr-[22rem]">
            <h4 className="max-w-xl text-[1.25rem] font-semibold leading-tight text-brand-teal tablet:text-[1.75rem] tablet:leading-[2rem] min-[1536px]:mt-[3.5rem] min-[1536px]:text-[2.0625rem]">
              That&apos;s the system we build.
            </h4>
            <p className="mt-4 max-w-[32.75rem] text-[1rem] font-semibold text-brand-black tablet:text-[1.0625rem] min-[1536px]:mt-[1.5rem] min-[1536px]:max-w-none min-[1536px]:text-[1.0625rem]">
              Three layers, configured around your operations. Each one reinforces
              the others —
            </p>

            <div className=" mt-8 flex w-full max-w-[34.25rem] mr-[-1rem] flex-col gap-3 min-[1536px]:mt-[3.75rem] min-[1536px]:max-w-none">
              <div className="w-full rounded-[0.3125rem] border border-brand-divider px-5 py-2.5 text-[1rem] font-semibold text-brand-black transition-colors duration-200 ease-in-out hover:bg-brand-black hover:text-white hover:border-brand-black min-[1536px]:ml-0 min-[1536px]:w-[31rem] min-[1536px]:text-[1.125rem]">
                context makes the intelligence useful
              </div>
              <div className="w-full rounded-[0.3125rem] border border-brand-divider px-5 py-2.5 text-[1rem] font-semibold text-brand-black transition-colors duration-200 ease-in-out hover:bg-brand-black hover:text-white hover:border-brand-black min-[1536px]:ml-[1.5rem] min-[1536px]:w-[29.5rem] min-[1536px]:text-[1.125rem]">
                intelligence makes the automation smart
              </div>
              <div className="w-full rounded-[0.3125rem] border border-brand-divider px-5 py-2.5 text-[1rem] font-semibold text-brand-black transition-colors duration-200 ease-in-out hover:bg-brand-black hover:text-white hover:border-brand-black min-[1536px]:ml-[3rem] min-[1536px]:w-[28rem] min-[1536px]:text-[1.125rem]">
                automation feeds data back into
                <br />
                the context layer
              </div>
            </div>
          </div>


          <div className="relative z-10 mx-auto mt-10 w-full max-w-[19.5rem] min-[1536px]:absolute min-[1536px]:right-[2.8125rem] min-[1536px]:top-[9.5625rem] min-[1536px]:mx-0 min-[1536px]:mt-0 min-[1536px]:max-w-[19.5rem]">
            <div className="relative aspect-[312/309] w-full overflow-hidden rounded-[0.5rem]">
              <Image
                src="/images/system-we-built.png"
                alt="AIOS dashboard preview"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 312px"
              />
            </div>
          </div>

          <div className="z-11 mt-8 -mx-6 flex h-auto min-h-[6.1875rem] items-start bg-brand-black px-6 py-6 tablet:-mx-8 tablet:px-14 tablet:py-8 min-[1536px]:-ml-[2.75rem] min-[1536px]:mr-0 min-[1536px]:mt-auto min-[1536px]:px-[3.875rem] min-[1536px]:py-[1.9375rem]">
            <p className="text-[1.125rem] font-semibold leading-snug text-white tablet:text-2xl">
              The result is a system that gets better the more you use it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
