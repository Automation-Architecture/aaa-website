import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { Section } from "@/components/Section";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import { SITE_URL } from "@/lib/site-config";
import { AUTHOR_SCHEMA, PUBLISHER_SCHEMA } from "@/lib/schema-constants";

export const metadata: Metadata = {
  title: "How AIOS Works: 7 Phases From Blueprint to Live System",
  description:
    "7 phases from free AI Blueprint to a running system. AI Automation deploys in about 1 week. Full AIOS builds take roughly 3 weeks using proven modules.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How AIOS Works: 7 Phases From Blueprint to Live System",
    description:
      "7 phases from free AI Blueprint to a running system. AI Automation deploys in about 1 week. Full AIOS builds take roughly 3 weeks using proven modules.",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How It Works: From First Click to Running System in Weeks",
  description:
    "The full path from first contact to running AI Operating System \u2014 7 phases with a clear deliverable at every step.",
  url: `${SITE_URL}/how-it-works`,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/how-it-works`,
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/how-it-works-og.jpg`,
    width: 1200,
    height: 630,
  },
  datePublished: "2026-01-01",
  dateModified: "2026-03-09",
  author: AUTHOR_SCHEMA,
  publisher: PUBLISHER_SCHEMA,
  articleSection: "How It Works",
  keywords: [
    "AIOS implementation",
    "AI automation process",
    "business automation timeline",
    "done-for-you AI",
    "AI Blueprint",
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "How It Works", path: "/how-it-works" },
]);

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Running AI Operating System in Weeks",
  description: "7-phase process from free AI Blueprint to deployed AIOS.",
  step: [
    { "@type": "HowToStep", position: 1, name: "IDEA", text: "Fill out a short intake form. Receive a free AI Blueprint tailored to your industry." },
    { "@type": "HowToStep", position: 2, name: "CONSULT", text: "Book a 30-45 minute consultation to review your Blueprint and scope the engagement." },
    { "@type": "HowToStep", position: 3, name: "DESIGN", text: "Kickoff call, context capture, and architectural design document for review." },
    { "@type": "HowToStep", position: 4, name: "BUILD", text: "We build using proven, pre-built modules customized to your business. Weekly Loom updates." },
    { "@type": "HowToStep", position: 5, name: "TEST", text: "Internal QA followed by a Loom demo walkthrough. Feedback incorporated before launch." },
    { "@type": "HowToStep", position: 6, name: "DEPLOY", text: "System goes live in your environment with full documentation." },
    { "@type": "HowToStep", position: 7, name: "ONGOING PARTNERSHIP", text: "Maintenance, updates, new automations, and system evolution as your business grows." },
  ],
  totalTime: "P3W",
};

const tierHeaders = ["", "AI Automation", "Full AIOS"];
const tierRows = [
  [
    "What it is",
    "A single workflow automation for a specific bottleneck",
    "Complete AI Operating System \u2014 context, data, intelligence, and automation across your entire business",
  ],
  ["Timeline", "~1 week", "~3 weeks"],
  ["Deployment", "Single deployment", "Gradual rollout, layer by layer"],
];

const summaryHeaders = ["#", "Phase", "What Happens", "What You Get"];
const summaryRows = [
  ["1", "IDEA", "Short intake form", "Free AI Blueprint"],
  ["2", "CONSULT", "30-45 min call", "Proposal with pricing (1-2 days)"],
  ["3", "DESIGN", "Kickoff + context capture", "Architectural design document"],
  [
    "4",
    "BUILD",
    "We build; you get weekly updates",
    "Loom updates + project board access",
  ],
  [
    "5",
    "TEST",
    "Internal QA, then your review",
    "Loom demo + feedback round",
  ],
  ["6", "DEPLOY", "System goes live", "Running system + documentation"],
  ["7", "ONGOING", "Ongoing partnership", "Support, maintenance, evolution"],
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1>How It Works: From First Click to Running System in Weeks</h1>

        <KeyTakeaway>
          AAA delivers through a 7-phase process (IDEA &rarr; CONSULT &rarr;
          DESIGN &rarr; BUILD &rarr; TEST &rarr; DEPLOY &rarr; ONGOING
          PARTNERSHIP) with two tiers: AI Automation (~1 week, single workflow)
          and Full AIOS (~3 weeks, complete system). We assemble proven,
          pre-built modules — not build from scratch — which is why timelines
          are weeks, not months.
        </KeyTakeaway>

        <p className="mt-8">
          You clicked the button. Now what?
        </p>
        <p className="mt-4">
          Here&rsquo;s the full path from first contact to running system —
          with a clear deliverable at every step.
        </p>

        {/* Two Tiers */}
        <Section id="section-two-tiers" className="mt-12">
          <h2 id="two-tiers" className="text-2xl font-bold">
            Two Tiers
          </h2>
          <p className="mt-6">
            We offer two levels of engagement. The free AI Blueprint and
            consultation determine which one fits your business — based on your
            goals, your current tools, and the complexity of your operations.
          </p>
          <div className="mt-6">
            <ResponsiveTable
              caption="AI Automation vs Full AIOS comparison"
              headers={tierHeaders}
              rows={tierRows}
            />
          </div>
        </Section>

        {/* The 7 Phases */}
        <Section id="section-the-7-phases" className="mt-12">
          <h2 id="the-7-phases" className="text-2xl font-bold">
            The 7 Phases
          </h2>

          {/* Phase 1 */}
          <h3 id="phase-1" className="mt-8 text-xl font-bold">
            Phase 1 — IDEA
          </h3>
          <p className="mt-4">
            You fill out a short intake form on our website. We generate a
            personalized <strong>AI Blueprint</strong> — industry-specific
            automation recommendations that show what&rsquo;s possible for your
            business.
          </p>
          <p className="mt-4">
            <strong>You receive:</strong> A free AI Blueprint tailored to your
            industry. No call required.
          </p>

          {/* Phase 2 */}
          <h3 id="phase-2" className="mt-8 text-xl font-bold">
            Phase 2 — CONSULT
          </h3>
          <p className="mt-4">
            If the Blueprint sparks interest, you book a consultation call.
            Thirty to forty-five minutes. We review your Blueprint together and
            assess your business: the tools you use, your team structure, your
            goals, and whether a single automation or the full AIOS is the right
            fit.
          </p>
          <p className="mt-4">
            <strong>You receive:</strong> A detailed proposal within 1-2 days of
            the call, with clear pricing and scope.
          </p>

          {/* Phase 3 */}
          <h3 id="phase-3" className="mt-8 text-xl font-bold">
            Phase 3 — DESIGN
          </h3>
          <p className="mt-4">
            After the contract is signed, we hold a kickoff call and start
            capturing context. Interviews, questionnaires, access to your
            existing tools and documents — everything we need to build the
            foundation.
          </p>
          <p className="mt-4">
            <strong>You receive:</strong> An architectural design document,
            shared for your review and approval before we build anything.
          </p>

          {/* Phase 4 */}
          <h3 id="phase-4" className="mt-8 text-xl font-bold">
            Phase 4 — BUILD
          </h3>
          <p className="mt-4">
            Our team builds the system according to the approved design. We
            don&rsquo;t build from scratch — we use proven, pre-built modules
            and architecture patterns, then customize to your business.
            That&rsquo;s why timelines are weeks, not months.
          </p>
          <p className="mt-4">
            Throughout the build, you get weekly Loom video updates, access to
            the project board, and a dedicated support channel for questions.
          </p>
          <p className="mt-4">
            <strong>Timeline:</strong> ~1 week for AI Automation. ~3 weeks for
            Full AIOS.
          </p>

          {/* Phase 5 */}
          <h3 id="phase-5" className="mt-8 text-xl font-bold">
            Phase 5 — TEST
          </h3>
          <p className="mt-4">
            We test everything internally first. Every automation, every data
            connection, every workflow — verified and stress-tested. All issues
            are identified and resolved before you see anything.
          </p>
          <p className="mt-4">
            <strong>You receive:</strong> A Loom demo walkthrough of the
            completed system. You watch it on your own time, flag anything that
            needs adjustment, and we incorporate your feedback before
            deployment. Nothing goes live until you&rsquo;re satisfied.
          </p>

          {/* Phase 6 */}
          <h3 id="phase-6" className="mt-8 text-xl font-bold">
            Phase 6 — DEPLOY
          </h3>
          <p className="mt-4">
            After resolving all feedback from testing, the system goes live in
            your environment.
          </p>
          <p className="mt-4">
            For AI Automation: single deployment — your automation is running
            and producing results from day one. For Full AIOS: gradual rollout,
            layer by layer — each layer gets its own Loom demo, feedback cycle,
            and documentation. This staged approach means you&rsquo;re never
            overwhelmed by a massive system change.
          </p>
          <p className="mt-4">
            <strong>You receive:</strong> A deployed, running system plus full
            documentation covering every workflow, every automation, and how to
            use it all.
          </p>

          {/* Phase 7 */}
          <h3 id="phase-7" className="mt-8 text-xl font-bold">
            Phase 7 — ONGOING PARTNERSHIP
          </h3>
          <p className="mt-4">
            The system is live and running. You use it day-to-day with the
            documentation and training provided during deployment. Most clients
            are comfortable operating independently within the first week.
          </p>
          <p className="mt-4">
            As your business evolves, the system should evolve with it. Ongoing
            support — maintenance, updates, bug fixes, new automations, and
            system evolution as your business grows — is available as an ongoing
            partnership. We don&rsquo;t build and disappear. Your AIOS gets
            better over time, and we&rsquo;re here to make sure it keeps pace
            with your growth.
          </p>
        </Section>

        {/* Summary Table */}
        <Section id="section-summary" className="mt-12">
          <h2 id="summary" className="text-2xl font-bold">
            Summary
          </h2>
          <div className="mt-6">
            <ResponsiveTable
              caption="7-phase delivery summary"
              headers={summaryHeaders}
              rows={summaryRows}
            />
          </div>
        </Section>

        <div className="mt-12">
          <RelatedLinks
            links={[
              { label: "What the system does \u2192", href: "/solution" },
              { label: "Real outcomes \u2192", href: "/use-cases" },
              { label: "Common questions \u2192", href: "/faq" },
            ]}
          />
        </div>
      </article>

      <PageCTA />
    </>
  );
}
