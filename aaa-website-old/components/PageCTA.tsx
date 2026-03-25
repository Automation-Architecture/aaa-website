import { CTA } from "@/lib/site-config";
import { TrackedLink } from "@/components/TrackedLink";

export function PageCTA() {
  return (
    <section
      id="footer-cta"
      className="bg-brand-lime py-16 px-4 text-center text-brand-black tablet:py-20 border-y border-brand-gray2"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tablet:text-3xl">
          {CTA.label}
        </h2>
        <p className="mt-4 text-brand-black/70">
          Get AI automation recommendations tailored to your business. Free, no
          obligation.
        </p>
        <TrackedLink
          href={CTA.href}
          event="cta_click"
          eventParams={{ cta_location: "page_cta" }}
          className="mt-8 inline-block rounded-[10px] bg-brand-black px-8 py-3.5 font-bold text-brand-lime text-lg hover:bg-brand-teal transition-colors"
        >
          {CTA.label}
        </TrackedLink>
      </div>
    </section>
  );
}
