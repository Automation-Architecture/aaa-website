import Image from "next/image";
import Link from "next/link";
import { RouteNames } from "@/constants";

export function PageCTA() {
  return (
    <section
      id="footer-cta"
      className="relative overflow-hidden border-y border-brand-gray2 bg-brand-black bg-[url('/images/problem-black-banner.png')] bg-cover bg-center px-5 py-10 tablet:px-8 tablet:py-12 desktop:px-20 desktop:py-16"
    >
      <div className="relative z-10 mx-auto flex max-w-395 flex-col gap-10 desktop:flex-row desktop:items-center desktop:justify-between">
        <div className="space-y-1 text-brand-lime">
          <Link href={RouteNames.Solution} className="flex w-fit items-center gap-3 text-[1.5rem] leading-[1.2] transition-colors hover:text-brand-white desktop:gap-4 desktop:text-[2rem]">
            <span>The system that fixes it</span>
            <Image src="/icons/problem-right-arrow.svg" alt="" aria-hidden="true" width={16} height={25} className="h-6.25 w-auto desktop:h-8" />
          </Link>
          <Link href={RouteNames.UseCases} className="flex w-fit items-center gap-3 text-[1.5rem] leading-[1.2] transition-colors hover:text-brand-white desktop:gap-4 desktop:text-[2rem]">
            <span>See it in action</span>
            <Image src="/icons/problem-right-arrow.svg" alt="" aria-hidden="true" width={16} height={25} className="h-6.25 w-auto desktop:h-8" />
          </Link>
          <Link href={RouteNames.HowItWorks} className="flex w-fit items-center gap-3 text-[1.5rem] leading-[1.2] transition-colors hover:text-brand-white desktop:gap-4 desktop:text-[2rem]">
            <span>How we build it</span>
            <Image src="/icons/problem-right-arrow.svg" alt="" aria-hidden="true" width={16} height={25} className="h-6.25 w-auto desktop:h-8" />
          </Link>
        </div>

        <div className="max-w-151">
          <p className="text-[1.125rem] leading-tight tracking-[-0.01em] text-brand-white/70 desktop:text-[1.875rem] desktop:leading-[1.2]">
            Get AI automation recommendations tailored to your industry. Free,
            no obligation
          </p>
          <a
            href="https://pipelineiq.app/new-report"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex h-15 w-full items-center justify-center rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-br-2xl rounded-bl-[0.1875rem] bg-brand-lime px-7.5 text-center text-[1.25rem] font-bold uppercase text-brand-black transition-colors hover:bg-brand-teal hover:text-brand-white desktop:mt-6 desktop:w-106.25 desktop:text-[1.5rem]"
          >
            Get Your Free AI Blueprint
          </a>
        </div>
      </div>
    </section>
  );
}
