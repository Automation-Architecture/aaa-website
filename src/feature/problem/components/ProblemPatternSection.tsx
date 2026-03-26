import Image from "next/image";

export function ProblemPatternSection() {
  return (
    <section className="border-b border-brand-gray2 px-6 py-8 tablet:px-10 tablet:py-10 desktop:px-17.5 desktop:pb-12 desktop:pt-24 min-[1440px]:pb-16 min-[1440px]:pt-28">
      <div className="flex flex-col gap-10 items-center desktop:grid desktop:grid-cols-2 desktop:gap-10">
        <div className="relative w-full mx-auto desktop:max-w-full">
          <Image
            src="/images/3-block/operator-trap-hero.png"
            alt="Founder quote card"
            width={768}
            height={385}
            className="h-auto w-full rounded-md"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 600px"
          />
        </div>
        <div className="w-full text-left mx-auto desktop:ml-auto desktop:max-w-140">
          <p className="leading-6 text-brand-gray2 text-base tablet:text-xl tablet:leading-7 desktop:leading-8">
            That&apos;s a real founder describing their relationship with AI.
            Not someone who&apos;s ignoring the shift – someone who&apos;s
            staring right at it and can&apos;t figure out where to start.
          </p>
          <p className="mt-8 text-right text-2xl tablet:text-4xl desktop:text-5xl font-medium uppercase tracking-tight text-brand-heading desktop:mt-14">
            They&apos;re not alone.
          </p>
        </div>
      </div>
    </section>
  );
}
