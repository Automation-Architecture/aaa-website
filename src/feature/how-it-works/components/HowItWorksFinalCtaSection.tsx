import Link from "next/link";

export function HowItWorksFinalCtaSection() {
  return (
    <section className="border-x border-b border-brand-gray2 bg-brand-black px-6 py-8 tablet:px-10 tablet:py-10">
      <div className="flex flex-col gap-5 desktop:flex-row desktop:items-center desktop:justify-between">
        <p className="max-w-[44rem] text-base font-medium text-brand-gray2 tablet:text-lg">
          When the system starts compounding, your business no longer depends on
          constant founder firefighting.
          <span className="ml-2 font-bold text-brand-lime">
            Build that system now.
          </span>
        </p>
        <Link
          href="/faq"
          className="inline-flex items-center justify-center rounded-[0.375rem] bg-brand-lime px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.04em] text-brand-black transition hover:opacity-90"
        >
          Get your free AI blueprint
        </Link>
      </div>
    </section>
  );
}
