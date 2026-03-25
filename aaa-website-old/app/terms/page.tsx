import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
export const metadata: Metadata = {
  title: "Terms of Service — Automation Architecture AI",
  description:
    "Terms of service governing your use of the Automation Architecture AI website, AI Blueprint, and related content.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service — Automation Architecture AI",
    description:
      "Terms of service governing your use of the Automation Architecture AI website.",
    type: "website",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Terms of Service", path: "/terms" },
]);

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16 tablet:py-20">
        <header>
          <h1 className="text-3xl font-bold text-brand-teal tablet:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-brand-gray">
            Last updated: March 21, 2026
          </p>
        </header>

        <Section id="agreement" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Agreement
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            By accessing or using the Automation Architecture AI website (
            <code className="text-sm">https://automationarchitecture.ai</code>
            ), you agree to these Terms of Service. If you do not agree, do not
            use the site.
          </p>
        </Section>

        <Section id="services-description" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Services Description
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            Automation Architecture AI (&ldquo;AAA,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us&rdquo;) provides AI automation consulting and
            implementation services for small businesses and startups. Our
            website offers:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-brand-teal/80">
            <li>
              <strong>Information</strong> about our AIOS (AI Operating System)
              methodology and services
            </li>
            <li>
              <strong>AI Blueprint</strong> — a free intake form that generates
              personalized automation recommendations for your business
            </li>
            <li>
              <strong>Educational content</strong> about AI automation, including
              use cases, comparisons, and industry guides
            </li>
          </ul>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            The website is informational. It does not constitute professional
            advice. Specific project engagements are governed by separate
            Statements of Work (SOW) agreed upon between AAA and the client.
          </p>
        </Section>

        <Section id="ai-blueprint" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            AI Blueprint
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            The AI Blueprint is a free, no-obligation document providing general
            automation recommendations based on the information you provide in
            the intake form.
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-brand-teal/80">
            <li>
              The Blueprint is for informational purposes. It is not a guarantee
              of results.
            </li>
            <li>
              Recommendations are based on general industry patterns and the
              information you provide. Actual outcomes depend on your specific
              business context, implementation, and other factors.
            </li>
            <li>
              We reserve the right to follow up on Blueprint submissions for
              consultation purposes. You may opt out of follow-up at any time.
            </li>
          </ul>
        </Section>

        <Section id="intellectual-property" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Intellectual Property
          </h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-brand-teal/80">
            <li>
              <strong>Our content:</strong> All text, graphics, and materials on
              this website are the property of Automation Architecture AI. You
              may not reproduce, distribute, or create derivative works without
              our written permission.
            </li>
            <li>
              <strong>AIOS methodology:</strong> The AIOS framework, Business
              Context Data Engine, Dashboard Intelligence, and Automated Task
              Management are proprietary methodologies of AAA.
            </li>
            <li>
              <strong>Your data:</strong> Information you submit through the
              Blueprint form remains your data. We use it solely as described in
              our{" "}
              <Link
                href="/privacy"
                className="underline hover:text-brand-lime transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </li>
          </ul>
        </Section>

        <Section id="client-engagements" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Client Engagements
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            If you engage AAA for consulting or implementation services:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-brand-teal/80">
            <li>
              All project work is governed by a separate Statement of Work (SOW)
              that defines scope, timeline, deliverables, and payment terms.
            </li>
            <li>
              These Terms of Service apply to your use of the website only, not
              to client project engagements.
            </li>
            <li>
              In the event of a conflict between these Terms and a signed SOW,
              the SOW governs.
            </li>
          </ul>
        </Section>

        <Section id="content-disclaimer" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Website Content Disclaimer
          </h2>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-brand-teal/80">
            <li>
              <strong>External statistics:</strong> Where we cite industry
              statistics (e.g., from McKinsey, Harvard Business Review, or other
              sources), we provide source attribution. These statistics reflect
              the cited research, not AAA&apos;s proprietary data or client
              results.
            </li>
            <li>
              <strong>Use cases:</strong> Use cases described on this site
              represent projected capabilities of the AIOS methodology, not
              guaranteed outcomes from specific client deployments.
            </li>
            <li>
              <strong>No professional advice:</strong> Content on this site is
              for general informational purposes. It does not constitute
              business, legal, financial, or technical advice.
            </li>
          </ul>
        </Section>

        <Section id="limitation-of-liability" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Limitation of Liability
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            To the maximum extent permitted by law:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-brand-teal/80">
            <li>
              AAA provides the website and its content &ldquo;as is&rdquo;
              without warranties of any kind, express or implied.
            </li>
            <li>
              AAA is not liable for any indirect, incidental, or consequential
              damages arising from your use of the website or reliance on its
              content.
            </li>
            <li>
              Our total liability for any claim related to the website is limited
              to the amount you paid to access the site (which is zero for the
              public website).
            </li>
          </ul>
          <p className="mt-3 text-brand-teal/80 leading-relaxed">
            This limitation does not apply to obligations under a signed SOW,
            which has its own liability terms.
          </p>
        </Section>

        <Section id="user-conduct" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            User Conduct
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            You agree not to:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1 text-brand-teal/80">
            <li>Use the website for any unlawful purpose</li>
            <li>
              Attempt to interfere with the website&apos;s operation or security
            </li>
            <li>
              Submit false or misleading information through the Blueprint form
            </li>
            <li>
              Scrape, copy, or reproduce website content without permission
            </li>
          </ul>
        </Section>

        <Section id="third-party-links" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Third-Party Links
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            Our website may link to external sites (cited sources, third-party
            tools). We are not responsible for the content or privacy practices
            of these external sites.
          </p>
        </Section>

        <Section id="governing-law" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Governing Law
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            These Terms are governed by the laws of the State of Delaware. Any
            disputes will be resolved in the courts of Delaware.
          </p>
        </Section>

        <Section id="changes" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Changes to These Terms
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            We may update these Terms from time to time. Changes will be posted
            on this page with an updated date. Continued use of the site after
            changes constitutes acceptance.
          </p>
        </Section>

        <Section id="contact" className="mt-12">
          <h2 className="text-xl font-bold text-brand-teal tablet:text-2xl">
            Contact
          </h2>
          <p className="mt-4 text-brand-teal/80 leading-relaxed">
            For questions about these Terms:
          </p>
          <p className="mt-3 text-brand-teal/80">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hello@automationarchitecture.ai"
              className="underline hover:text-brand-lime transition-colors"
            >
              hello@automationarchitecture.ai
            </a>
          </p>
          <p className="mt-1 text-brand-teal/80">
            <strong>Website:</strong>{" "}
            <Link
              href="/"
              className="underline hover:text-brand-lime transition-colors"
            >
              automationarchitecture.ai
            </Link>
          </p>
        </Section>
      </article>
    </>
  );
}
