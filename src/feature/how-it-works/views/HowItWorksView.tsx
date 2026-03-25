import Link from "next/link";
import { JsonLd } from "@/components/common/JsonLd";
import { PageCTA } from "@/components/common/PageCTA";
import { KeyTakeaway } from "@/components/common/KeyTakeaway";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { ResponsiveTable } from "@/components/common/ResponsiveTable";
import { AUTHOR_SCHEMA, PUBLISHER_SCHEMA, SITE_URL } from "@/lib/schema-constants";
import { RouteNames } from "@/constants";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How It Works: From First Click to Running System in Weeks",
  description:
    "The full path from first contact to running AI Operating System — 7 phases with a clear deliverable at every step.",
  url: `${SITE_URL}/how-it-works`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/how-it-works` },
  image: { "@type": "ImageObject", url: `${SITE_URL}/og-default.png`, width: 1200, height: 630 },
  datePublished: "2026-01-01",
  dateModified: "2026-03-09",
  author: AUTHOR_SCHEMA,
  publisher: PUBLISHER_SCHEMA,
  articleSection: "How It Works",
  keywords: ["AIOS implementation", "AI automation process", "business automation timeline", "done-for-you AI", "AI Blueprint"],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "How It Works", item: `${SITE_URL}/how-it-works` },
  ],
};

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

export function HowItWorksView() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={howToSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-brand-teal tablet:text-4xl">
          How It Works: From First Click to Running System in Weeks
        </h1>

        <KeyTakeaway>
          AAA delivers through a 7-phase process (IDEA &rarr; CONSULT &rarr;
          DESIGN &rarr; BUILD &rarr; TEST &rarr; DEPLOY &rarr; ONGOING
          PARTNERSHIP) with two tiers: AI Automation (~1 week, single workflow)
          and Full AIOS (~3 weeks, complete system). We assemble proven,
          pre-built modules — not build from scratch — which is why timelines
          are weeks, not months.
        </KeyTakeaway>

        <p className="mt-8 text-brand-teal/80">You clicked the button. Now what?</p>
        <p className="mt-4 text-brand-teal/80">
          Here&rsquo;s the full path from first contact to running system —
          with a clear deliverable at every step.
        </p>

        <section id="section-two-tiers" className="mt-12">
          <h2 id="two-tiers" className="text-2xl font-bold text-brand-teal">
            Two Tiers
          </h2>
          <p className="mt-6 text-brand-teal/80">
            We offer two levels of engagement. The free AI Blueprint and
            consultation determine which one fits your business — based on your
            goals, your current tools, and the complexity of your operations.
          </p>
          <div className="mt-6">
            <ResponsiveTable
              caption="AI Automation vs Full AIOS comparison"
              headers={["", "AI Automation", "Full AIOS"]}
              rows={[
                ["What it is", "A single workflow automation for a specific bottleneck", "Complete AI Operating System — context, data, intelligence, and automation across your entire business"],
                ["Timeline", "~1 week", "~3 weeks"],
                ["Deployment", "Single deployment", "Gradual rollout, layer by layer"],
              ]}
            />
          </div>
        </section>

        <section id="section-the-7-phases" className="mt-12">
          <h2 id="the-7-phases" className="text-2xl font-bold text-brand-teal">
            The 7 Phases
          </h2>

          <h3 id="phase-1" className="mt-8 text-xl font-bold text-brand-teal">
            Phase 1 — IDEA
          </h3>
          <p className="mt-4 text-brand-teal/80">
            You fill out a short intake form on our website. We generate a
            personalized <strong>AI Blueprint</strong> — industry-specific
            automation recommendations that show what&rsquo;s possible for your
            business.
          </p>
          <p className="mt-4 text-brand-teal/80">
            <strong>You receive:</strong> A free AI Blueprint tailored to your
            industry. No call required.
          </p>

          <h3 id="phase-2" className="mt-8 text-xl font-bold text-brand-teal">
            Phase 2 — CONSULT
          </h3>
          <p className="mt-4 text-brand-teal/80">
            If the Blueprint sparks interest, you book a consultation call.
            Thirty to forty-five minutes. We review your Blueprint together and
            assess your business: the tools you use, your team structure, your
            goals, and whether a single automation or the full AIOS is the right
            fit.
          </p>
          <p className="mt-4 text-brand-teal/80">
            <strong>You receive:</strong> A detailed proposal within 1-2 days of
            the call, with clear pricing and scope.
          </p>

          <h3 id="phase-3" className="mt-8 text-xl font-bold text-brand-teal">
            Phase 3 — DESIGN
          </h3>
          <p className="mt-4 text-brand-teal/80">
            After the contract is signed, we hold a kickoff call and start
            capturing context. Interviews, questionnaires, access to your
            existing tools and documents — everything we need to build the
            foundation.
          </p>
          <p className="mt-4 text-brand-teal/80">
            <strong>You receive:</strong> An architectural design document,
            shared for your review and approval before we build anything.
          </p>

          <h3 id="phase-4" className="mt-8 text-xl font-bold text-brand-teal">
            Phase 4 — BUILD
          </h3>
          <p className="mt-4 text-brand-teal/80">
            Our team builds the system according to the approved design. We
            don&rsquo;t build from scratch — we use proven, pre-built modules
            and architecture patterns, then customize to your business.
            That&rsquo;s why timelines are weeks, not months.
          </p>
          <p className="mt-4 text-brand-teal/80">
            Throughout the build, you get weekly Loom video updates, access to
            the project board, and a dedicated support channel for questions.
          </p>
          <p className="mt-4 text-brand-teal/80">
            <strong>Timeline:</strong> ~1 week for AI Automation. ~3 weeks for
            Full AIOS.
          </p>

          <h3 id="phase-5" className="mt-8 text-xl font-bold text-brand-teal">
            Phase 5 — TEST
          </h3>
          <p className="mt-4 text-brand-teal/80">
            We test everything internally first. Every automation, every data
            connection, every workflow — verified and stress-tested. All issues
            are identified and resolved before you see anything.
          </p>
          <p className="mt-4 text-brand-teal/80">
            <strong>You receive:</strong> A Loom demo walkthrough of the
            completed system. You watch it on your own time, flag anything that
            needs adjustment, and we incorporate your feedback before
            deployment. Nothing goes live until you&rsquo;re satisfied.
          </p>

          <h3 id="phase-6" className="mt-8 text-xl font-bold text-brand-teal">
            Phase 6 — DEPLOY
          </h3>
          <p className="mt-4 text-brand-teal/80">
            After resolving all feedback from testing, the system goes live in
            your environment.
          </p>
          <p className="mt-4 text-brand-teal/80">
            For AI Automation: single deployment — your automation is running
            and producing results from day one. For Full AIOS: gradual rollout,
            layer by layer — each layer gets its own Loom demo, feedback cycle,
            and documentation. This staged approach means you&rsquo;re never
            overwhelmed by a massive system change.
          </p>
          <p className="mt-4 text-brand-teal/80">
            <strong>You receive:</strong> A deployed, running system plus full
            documentation covering every workflow, every automation, and how to
            use it all.
          </p>

          <h3 id="phase-7" className="mt-8 text-xl font-bold text-brand-teal">
            Phase 7 — ONGOING PARTNERSHIP
          </h3>
          <p className="mt-4 text-brand-teal/80">
            The system is live and running. You use it day-to-day with the
            documentation and training provided during deployment. Most clients
            are comfortable operating independently within the first week.
          </p>
          <p className="mt-4 text-brand-teal/80">
            As your business evolves, the system should evolve with it. Ongoing
            support — maintenance, updates, bug fixes, new automations, and
            system evolution as your business grows — is available as an ongoing
            partnership. We don&rsquo;t build and disappear. Your AIOS gets
            better over time, and we&rsquo;re here to make sure it keeps pace
            with your growth.
          </p>
        </section>

        <section id="section-summary" className="mt-12">
          <h2 id="summary" className="text-2xl font-bold text-brand-teal">
            Summary
          </h2>
          <div className="mt-6">
            <ResponsiveTable
              caption="7-phase delivery summary"
              headers={["#", "Phase", "What Happens", "What You Get"]}
              rows={[
                ["1", "IDEA", "Short intake form", "Free AI Blueprint"],
                ["2", "CONSULT", "30-45 min call", "Proposal with pricing (1-2 days)"],
                ["3", "DESIGN", "Kickoff + context capture", "Architectural design document"],
                ["4", "BUILD", "We build; you get weekly updates", "Loom updates + project board access"],
                ["5", "TEST", "Internal QA, then your review", "Loom demo + feedback round"],
                ["6", "DEPLOY", "System goes live", "Running system + documentation"],
                ["7", "ONGOING", "Ongoing partnership", "Support, maintenance, evolution"],
              ]}
            />
          </div>
        </section>

        <div className="mt-12">
          <RelatedLinks
            links={[
              { label: "What the system does →", href: RouteNames.Solution },
              { label: "Real outcomes →", href: RouteNames.UseCases },
              { label: "Common questions →", href: RouteNames.FAQ },
            ]}
          />
        </div>
      </article>

      <PageCTA />
    </>
  );
}
