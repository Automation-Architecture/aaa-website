import { CTA } from "@/lib/site-config";
import { TrackedLink } from "@/components/TrackedLink";

export function PageCTA() {
  return (
    <section
      id="footer-cta"
      className="bg-brand-teal py-16 px-4 text-center text-brand-cream tablet:py-20"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tablet:text-3xl">
          {CTA.label}
        </h2>
        <p className="mt-4 text-brand-gray">
          Get AI automation recommendations tailored to your business. Free, no
          obligation.
        </p>
        <TrackedLink
          href={CTA.href}
          event="cta_click"
          eventParams={{ cta_location: "page_cta" }}
          className="mt-8 inline-block rounded-md bg-brand-lime px-8 py-3 font-bold text-brand-teal hover:opacity-90 transition-opacity"
        >
          {CTA.label}
        </TrackedLink>
      </div>
    </section>
  );
}
