import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA } from "@/components/PageCTA";
import { GlossaryTerm } from "@/components/GlossaryTerm";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AAA Glossary: AI Operating System Key Terms",
  description:
    "17 key terms defined: AIOS, Operator Trap, compound intelligence, Business Context Data Engine, bandwidth inversion, and more. A plain-language guide.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "AAA Glossary: AI Operating System Key Terms",
    description:
      "17 key terms defined: AIOS, Operator Trap, compound intelligence, Business Context Data Engine, bandwidth inversion, and more. A plain-language guide.",
    type: "article",
  },
};

export default function GlossaryPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "AAA Glossary",
          description: "Key terms in AI Operating Systems",
          url: `${SITE_URL}/glossary`,
          hasDefinedTerm: [
            { "@type": "DefinedTerm", name: "AIOS", description: "An AIOS (AI Operating System) is an autonomous infrastructure layer that wraps around an entire business — operations, data, intelligence, and communications — and runs whether the founder is at their desk or not. It's built on three integrated pillars: Business Context Data Engine, Dashboard Intelligence, and Automated Task Management." },
            { "@type": "DefinedTerm", name: "AI Operating System", description: "See AIOS. The terms are interchangeable." },
            { "@type": "DefinedTerm", name: "Operator Trap", description: "The Operator Trap is a pattern where 80% of a founder's working hours go to operational maintenance — admin, firefighting, meetings, finance — leaving only 20% for growth work. It compounds over time, and the AIOS is designed to break it through bandwidth inversion." },
            { "@type": "DefinedTerm", name: "Business Context Data Engine", description: "The Business Context Data Engine is a structured knowledge layer that gives AI complete understanding of a specific business — team, products, financials, priorities, and decision history." },
            { "@type": "DefinedTerm", name: "Dashboard Intelligence", description: "Dashboard Intelligence is an AI-powered daily briefing system that synthesizes data from every connected business platform into a single morning report." },
            { "@type": "DefinedTerm", name: "Automated Task Management", description: "Automated Task Management is an AI-driven system that audits every recurring business task and categorizes each as automate, augment, or manual — targeting 60-70% automation of recurring work." },
            { "@type": "DefinedTerm", name: "Compound Intelligence", description: "Compound Intelligence is the principle that an AIOS accumulates knowledge over time — every decision logged, every skill refined, every report saved — becoming an appreciating asset rather than a recurring cost." },
            { "@type": "DefinedTerm", name: "AI Blueprint", description: "The AI Blueprint is a free, personalized deliverable you receive after completing the intake form. It includes industry-specific automation recommendations based on your business model, tools, and goals." },
            { "@type": "DefinedTerm", name: "Bandwidth Inversion", description: "Bandwidth Inversion is the shift from the Operator Trap ratio (80% operational / 20% growth) to the target state (20-30% operational / 70-80% growth). It's the measurable outcome of a working AIOS." },
            { "@type": "DefinedTerm", name: "Agent-to-Agent Economy", description: "The Agent-to-Agent Economy is the emerging economic model where AI agents transact with other AI agents on behalf of businesses." },
            { "@type": "DefinedTerm", name: "AI Agent", description: "An AI agent is an autonomous software system that can perceive its environment, make decisions, and take actions to accomplish goals — without requiring a human prompt for every step." },
            { "@type": "DefinedTerm", name: "AI Automation (tier)", description: "AI Automation is the focused service tier for a specific bottleneck or workflow — lead generation, content production, client onboarding, or similar. Typically scoped and delivered in about one week." },
            { "@type": "DefinedTerm", name: "Full AIOS (tier)", description: "Full AIOS is the complete build — Business Context Data Engine, Dashboard Intelligence, and Automated Task Management configured across the entire business. Typically delivered in about three weeks." },
            { "@type": "DefinedTerm", name: "Done-For-You", description: "Done-for-you is AAA's delivery model — we build, configure, test, deploy, and maintain the full system." },
            { "@type": "DefinedTerm", name: "The Bottle", description: "The Bottle is a metaphor for the AIOS as a container that channels the raw power of AI into usable business outcomes." },
            { "@type": "DefinedTerm", name: "Away-from-Desk Autonomy", description: "Away-from-Desk Autonomy is a KPI measuring whether the business runs without the founder at a laptop." },
            { "@type": "DefinedTerm", name: "Revenue per Person", description: "Revenue per Person is a KPI measuring output efficiency across the team. More output from the same headcount." },
          ],
        }}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Glossary", path: "/glossary" },
        ])}
      />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1>
          AAA Glossary: Key Terms in AI Operating Systems
        </h1>

        <p className="mt-4">
          Key terms used across the AAA website. Each definition links to the
          page where the concept is developed in full.
        </p>

        <p className="mt-2 text-sm text-brand-gray">
          Last updated: March 2026
        </p>

        <div className="mt-8">
          <GlossaryTerm id="aios" term="AIOS">
            <p>
              An AIOS (AI Operating System) is an autonomous infrastructure
              layer that wraps around an entire business — operations, data,
              intelligence, and communications — and runs whether the founder is
              at their desk or not. It&apos;s built on three integrated pillars:
              Business Context Data Engine, Dashboard Intelligence, and
              Automated Task Management.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the Solution page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="ai-operating-system" term="AI Operating System">
            <p>
              See <strong>AIOS</strong> above. The terms are interchangeable.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the Solution page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="operator-trap" term="Operator Trap">
            <p>
              The Operator Trap is a pattern where 80% of a founder&apos;s
              working hours go to operational maintenance — admin, firefighting,
              meetings, finance — leaving only 20% for growth work. It compounds
              over time, and the AIOS is designed to break it through bandwidth
              inversion.
            </p>
            <p className="mt-3">
              <Link href="/problem" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the Problem page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="business-context-data-engine" term="Business Context Data Engine">
            <p>
              The Business Context Data Engine is a structured knowledge layer
              that gives AI complete understanding of a specific business —
              team, products, financials, priorities, and decision history. It
              connects identity docs, goal tracking, decision logs, and live
              data sources into a single knowledge base.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the Solution page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="dashboard-intelligence" term="Dashboard Intelligence">
            <p>
              Dashboard Intelligence is an AI-powered daily briefing system that
              synthesizes data from every connected business platform into a
              single morning report. By 7am, it&apos;s analyzed overnight data,
              checked priorities, flagged exceptions, and queued tasks for
              review.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the Solution page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="automated-task-management" term="Automated Task Management">
            <p>
              Automated Task Management is an AI-driven system that audits every
              recurring business task and categorizes each as automate, augment,
              or manual — targeting 60-70% automation of recurring work, a
              threshold consistent with McKinsey&apos;s estimate that generative
              AI can automate 60-70% of employee tasks (McKinsey, 2023). The
              team gets those hours back for higher-value work.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the Solution page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="compound-intelligence" term="Compound Intelligence">
            <p>
              Compound Intelligence is the principle that an AIOS accumulates
              knowledge over time — every decision logged, every skill refined,
              every report saved — becoming an appreciating asset rather than a
              recurring cost. Unlike tools that start from zero each session, an
              AIOS builds on yesterday&apos;s work.
            </p>
            <p className="mt-3">
              <Link href="/about" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the About page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="ai-blueprint" term="AI Blueprint">
            <p>
              The AI Blueprint is a free, personalized deliverable you receive
              after completing the intake form. It includes industry-specific
              automation recommendations based on your business model, tools,
              and goals. The Blueprint is yours to keep regardless of whether you
              engage further.
            </p>
            <p className="mt-3">
              <Link href="/how-it-works" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the How It Works page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="bandwidth-inversion" term="Bandwidth Inversion">
            <p>
              Bandwidth Inversion is the shift from the Operator Trap ratio (80%
              operational / 20% growth) to the target state (20-30% operational /
              70-80% growth). It&apos;s the measurable outcome of a working
              AIOS.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the Solution page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="agent-to-agent-economy" term="Agent-to-Agent Economy">
            <p>
              The Agent-to-Agent Economy is the emerging economic model where AI
              agents transact with other AI agents on behalf of businesses.
              Instead of humans managing every vendor interaction and procurement
              decision, AI agents handle routine transactions autonomously.
            </p>
            <p className="mt-3">
              <Link href="/" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Referenced in the homepage Hero section
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="ai-agent" term="AI Agent">
            <p>
              An AI agent is an autonomous software system that can perceive its
              environment, make decisions, and take actions to accomplish
              goals — without requiring a human prompt for every step. Unlike a
              chatbot, which waits for input and responds, an agent can initiate
              tasks, use tools, call APIs, and chain multiple steps together. In
              the context of an AIOS, AI agents handle specific business
              functions — research, content creation, lead outreach,
              reporting — as part of the broader Automated Task Management
              layer.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                See how agents work within the AIOS
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="ai-automation-tier" term="AI Automation (tier)">
            <p>
              AI Automation is the focused service tier for a specific bottleneck
              or workflow — lead generation, content production, client
              onboarding, or similar. Typically scoped and delivered in about one
              week.
            </p>
            <p className="mt-3">
              <Link href="/how-it-works" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the How It Works page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="full-aios-tier" term="Full AIOS (tier)">
            <p>
              Full AIOS is the complete build — Business Context Data Engine,
              Dashboard Intelligence, and Automated Task Management configured
              across the entire business. Typically delivered in about three
              weeks.
            </p>
            <p className="mt-3">
              <Link href="/how-it-works" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn more on the How It Works page
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="done-for-you" term="Done-For-You">
            <p>
              Done-for-you is AAA&apos;s delivery model — we build, configure,
              test, deploy, and maintain the full system. The alternative is DIY:
              evaluating tools, learning architecture, building integrations, and
              iterating alone. We serve founders who want the result without
              becoming the engineer.
            </p>
            <p className="mt-3">
              <Link href="/about" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Learn about our philosophy
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="the-bottle" term="The Bottle">
            <p>
              The Bottle is a metaphor for the AIOS as a container that channels
              the raw power of AI into usable business outcomes. Without
              structure, energy dissipates — the bottle gives it direction and
              force.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                See the full system
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="away-from-desk-autonomy" term="Away-from-Desk Autonomy">
            <p>
              Away-from-Desk Autonomy is a KPI measuring whether the business
              runs without the founder at a laptop. Full days away from a desk
              with nothing falling apart — that&apos;s the target.
            </p>
            <p className="mt-3">
              <Link href="/use-cases" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                See real use cases
              </Link>
            </p>
          </GlossaryTerm>

          <GlossaryTerm id="revenue-per-person" term="Revenue per Person">
            <p>
              Revenue per Person is a KPI measuring output efficiency across the
              team. More output from the same headcount — the advantage
              isn&apos;t adding people, it&apos;s amplifying what each person
              produces.
            </p>
            <p className="mt-3">
              <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                See the full system
              </Link>
            </p>
          </GlossaryTerm>
        </div>
      </article>

      <PageCTA />
    </>
  );
}
