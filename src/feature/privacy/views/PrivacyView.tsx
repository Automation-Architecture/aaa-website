import Link from "next/link";
import { JsonLd } from "@/components/common/JsonLd";
import { ResponsiveTable } from "@/components/common/ResponsiveTable";
import { SITE_URL } from "@/lib/schema-constants";
import { RouteNames } from "@/constants";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy` },
  ],
};

const THIRD_PARTY_SERVICES = [
  { service: "Typeform", purpose: "Blueprint intake form hosting", data: "Form responses", url: "https://www.typeform.com/privacy-policy/", label: "Typeform Privacy" },
  { service: "HubSpot", purpose: "CRM — stores form submissions, manages follow-up", data: "Form responses, contact info", url: "https://legal.hubspot.com/privacy-policy", label: "HubSpot Privacy" },
  { service: "Google Analytics 4", purpose: "Website analytics", data: "Anonymized usage data", url: "https://policies.google.com/privacy", label: "Google Privacy" },
  { service: "Google Tag Manager", purpose: "Tag management (loads GA4)", data: "No data collected directly", url: "https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/", label: "GTM Terms" },
  { service: "CookieYes", purpose: "Cookie consent management", data: "Consent preferences", url: "https://www.cookieyes.com/privacy-policy/", label: "CookieYes Privacy" },
  { service: "Vercel", purpose: "Website hosting", data: "Server logs (IP, user agent)", url: "https://vercel.com/legal/privacy-policy", label: "Vercel Privacy" },
] as const;

export function PrivacyView() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16 tablet:py-20">
        <header>
          <h1 className="text-3xl font-bold text-brand-teal tablet:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-brand-gray">Last updated: March 21, 2026</p>
        </header>

        <section id="who-we-are" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">Who We Are</h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            Automation Architecture AI (&ldquo;AAA,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; &ldquo;our&rdquo;) provides AI automation
            consulting and implementation services for small businesses and
            startups. Our website is{" "}
            <code className="text-sm">https://automationarchitecture.ai</code>.
          </p>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            This Privacy Policy explains what information we collect, how we use
            it, and your rights regarding that information.
          </p>
        </section>

        <section id="what-we-collect" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">What We Collect</h2>

          <h3 className="mt-6 text-lg font-semibold text-brand-teal">Information You Provide</h3>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            <strong>Blueprint Intake Form:</strong> When you fill out the AI
            Blueprint form, we collect the information you submit — business
            name, industry, team size, tools you use, and your goals. This form
            is hosted by Typeform and submissions are stored in HubSpot (see
            Third-Party Services below).
          </p>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            <strong>Contact Information:</strong> If you email us or schedule a
            consultation, we collect your name, email address, and any details
            you share.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-teal">Information Collected Automatically</h3>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            <strong>Analytics Data:</strong> We use Google Analytics 4 (GA4) to
            understand how visitors use our site. GA4 collects:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-brand-teal/80">
            <li>Pages viewed and time on page</li>
            <li>Scroll depth and outbound clicks</li>
            <li>Device type, browser, and operating system</li>
            <li>Approximate geographic location (city-level, not precise)</li>
            <li>Referral source (how you found us)</li>
          </ul>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            GA4 does not collect your name, email, or other personal
            identifiers. Analytics data is collected only after you consent to
            cookies.
          </p>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            <strong>Cookies:</strong> We use cookies for analytics and to
            remember your cookie consent preference. See the Cookies section
            below.
          </p>
        </section>

        <section id="how-we-use" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">How We Use Your Information</h2>
          <div className="mt-4">
            <ResponsiveTable
              caption="How we use your information"
              headers={["Purpose", "Data Used"]}
              rows={[
                ["Build your AI Blueprint", "Form submissions (business details, goals)"],
                ["Follow up on consultation requests", "Contact information"],
                ["Understand site traffic and improve content", "Analytics data (aggregated)"],
                ["Remember your cookie preferences", "Consent cookie"],
              ]}
            />
          </div>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            We do not sell your information. We do not share it with anyone other
            than the third-party services listed below, which process data on
            our behalf.
          </p>
        </section>

        <section id="third-party-services" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">Third-Party Services</h2>
          <div className="mt-4">
            <table className="hidden tablet:table w-full border-collapse">
              <caption className="sr-only">Third-party services and data sharing</caption>
              <thead>
                <tr className="border-b-2 border-brand-lime/30">
                  <th scope="col" className="px-4 py-3 text-left font-semibold text-brand-teal">Service</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold text-brand-teal">Purpose</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold text-brand-teal">Data Shared</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold text-brand-teal">Privacy Policy</th>
                </tr>
              </thead>
              <tbody>
                {THIRD_PARTY_SERVICES.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? "bg-brand-cream" : "bg-brand-cream/60"}>
                    <td className="px-4 py-3 font-semibold text-brand-teal">{row.service}</td>
                    <td className="px-4 py-3 text-brand-teal">{row.purpose}</td>
                    <td className="px-4 py-3 text-brand-teal">{row.data}</td>
                    <td className="px-4 py-3">
                      <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-brand-teal underline hover:text-brand-lime transition-colors">
                        {row.label}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="tablet:hidden space-y-4">
              {THIRD_PARTY_SERVICES.map((row) => (
                <div key={row.service} className="rounded-lg border border-brand-gray/20 bg-brand-cream p-4 space-y-2">
                  <div><span className="font-semibold text-brand-teal text-sm">Service: </span><span className="text-brand-teal">{row.service}</span></div>
                  <div><span className="font-semibold text-brand-teal text-sm">Purpose: </span><span className="text-brand-teal">{row.purpose}</span></div>
                  <div><span className="font-semibold text-brand-teal text-sm">Data Shared: </span><span className="text-brand-teal">{row.data}</span></div>
                  <div>
                    <span className="font-semibold text-brand-teal text-sm">Privacy Policy: </span>
                    <a href={row.url} target="_blank" rel="noopener noreferrer" className="text-brand-teal underline hover:text-brand-lime transition-colors">{row.label}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cookies" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">Cookies</h2>
          <div className="mt-4">
            <ResponsiveTable
              caption="Cookies used on this site"
              headers={["Cookie", "Purpose", "Duration", "Set By"]}
              rows={[
                ["cookieyes-consent", "Remembers your cookie consent choice", "365 days", "CookieYes"],
                ["_ga, _ga_*", "Google Analytics tracking", "Up to 2 years", "Google (only if consent granted)"],
              ]}
            />
          </div>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            You can manage your cookie preferences at any time by clicking
            &ldquo;Cookie Preferences&rdquo; in the site footer.
          </p>
        </section>

        <section id="your-rights" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">Your Rights</h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            Depending on your location, you may have the right to:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-brand-teal/80">
            <li><strong>Access</strong> the personal information we hold about you</li>
            <li><strong>Correct</strong> inaccurate information</li>
            <li><strong>Delete</strong> your personal information</li>
            <li><strong>Object</strong> to or restrict how we use your information</li>
            <li><strong>Withdraw consent</strong> for cookie tracking at any time</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-brand-teal">For California Residents (CCPA)</h3>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            You have the right to know what personal information we collect,
            request deletion, and opt out of the sale of personal information. We
            do not sell personal information.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-brand-teal">For EU/UK Residents (GDPR)</h3>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            Our legal basis for processing personal data is consent (for cookies
            and form submissions) and legitimate interest (for responding to
            inquiries). You have the right to lodge a complaint with your local
            data protection authority.
          </p>
        </section>

        <section id="data-retention" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">Data Retention</h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-brand-teal/80">
            <li><strong>Blueprint form data:</strong> Retained in HubSpot for the duration of the business relationship, or until you request deletion.</li>
            <li><strong>Analytics data:</strong> GA4 retains data for 14 months (Google&apos;s default).</li>
            <li><strong>Consent cookie:</strong> 365 days, then re-prompts.</li>
          </ul>
        </section>

        <section id="childrens-privacy" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">Children&apos;s Privacy</h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            Our services are designed for business owners and operators. We do
            not knowingly collect information from anyone under 16.
          </p>
        </section>

        <section id="changes" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">Changes to This Policy</h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated date.
          </p>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">Contact</h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            For privacy questions or data requests:
          </p>
          <p className="mt-3 text-brand-teal/80">
            <strong>Email:</strong>{" "}
            <a href="mailto:hello@automationarchitecture.ai" className="underline hover:text-brand-lime transition-colors">
              hello@automationarchitecture.ai
            </a>
          </p>
          <p className="mt-1 text-brand-teal/80">
            <strong>Website:</strong>{" "}
            <Link href={RouteNames.Home} className="underline hover:text-brand-lime transition-colors">
              automationarchitecture.ai
            </Link>
          </p>
        </section>
      </article>
    </>
  );
}
