import type { Metadata } from "next";
import Link from "next/link";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { QuotableStatement } from "@/components/QuotableStatement";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import { AUTHOR_SCHEMA, PUBLISHER_SCHEMA } from "@/lib/schema-constants";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About AAA: The Philosophy Behind the AI Operating System",
  description:
    "We build AI operating systems founders own, not rent. Compound intelligence means your system gets smarter every day it runs. Done-for-you in 1-3 weeks.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AAA: The Philosophy Behind the AI Operating System",
    description:
      "We build AI operating systems founders own, not rent. Compound intelligence means your system gets smarter every day it runs. Done-for-you in 1-3 weeks.",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What We Believe: The Philosophy Behind AAA",
          description:
            "We build AI operating systems founders own, not rent. Compound intelligence means your system gets smarter every day it runs. Done-for-you in 1-3 weeks.",
          author: AUTHOR_SCHEMA,
          publisher: PUBLISHER_SCHEMA,
          datePublished: "2026-01-01",
          dateModified: "2026-03-09",
          image: `${SITE_URL}/og-default.png`,
          mainEntityOfPage: `${SITE_URL}/about`,
        }}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1>
          What We Believe: The Philosophy Behind AAA
        </h1>

        <KeyTakeaway>
          AAA is a done-for-you AI automation agency. We build AI Operating
          Systems (AIOS) as assets you own, not subscriptions you rent. We serve
          founders who want the result without becoming the engineer — assembling
          proven modules, not inventing from scratch.
        </KeyTakeaway>

        {/* What We Believe */}
        <h2 id="an-asset-not-a-subscription" className="mt-12">
          An Asset, Not a Subscription
        </h2>

        <p className="mt-4">
          Most software is something you rent. Cancel the subscription, and
          you&apos;re back to zero. Every month is a running cost, not a building
          block.
        </p>

        <p className="mt-4">
          An AIOS is something you own. The context, the automations, the
          decision logs, the refined skills — that&apos;s institutional memory
          that can&apos;t walk out the door. It&apos;s yours. It appreciates. And
          it changes the math on what your business is worth — because the
          system&apos;s accumulated intelligence is embedded in your operations,
          not locked in someone&apos;s head.
        </p>

        <p className="mt-4">
          This is compound intelligence — and it&apos;s the core of what we
          build. Not a monthly cost you tolerate. An asset that gets more
          valuable every day it runs.
        </p>

        <h2 id="borrow-before-build" className="mt-12">
          Borrow Before Build
        </h2>

        <p className="mt-4">
          We don&apos;t reinvent the wheel for every client.
        </p>

        <p className="mt-4">
          Eighty percent of the time, a proven module can be adapted. Someone has
          already solved the problem, battle-tested the architecture, and
          documented the edge cases. We start from patterns that work — then
          customize to your business.
        </p>

        <p className="mt-4">
          This is why deployment takes weeks, not months. We&apos;re assembling
          and configuring, not inventing. Intelligence suite, data collectors,
          command center, task orchestration — pre-built, proven, then tailored to
          fit.
        </p>

        <h2 id="done-for-you" className="mt-12">
          Done-For-You — Not DIY
        </h2>

        <p className="mt-4">
          There&apos;s an entire ecosystem of tutorials teaching founders to
          build AIOS themselves. We&apos;ve watched a technically capable creator
          walk through the full setup in under half an hour: IDE configuration,
          folder architecture, YAML files, API integrations, sub-agent models,
          GitHub, ongoing maintenance. That&apos;s the simplified version.
        </p>

        <p className="mt-4">
          For a non-technical founder, that&apos;s weeks of work — if they can
          complete it at all.
        </p>

        <p className="mt-4">
          We&apos;ve all tried the ChatGPT → Zapier → nothing compounds path. We
          serve a different buyer. The founder who has the ambition but not the
          time or inclination to become an AI engineer.
        </p>

        <QuotableStatement text="We exist for founders who want the system, not the degree.">
          <p>We exist for founders who want the system, not the degree.</p>
        </QuotableStatement>

        <h2 id="bandwidth-as-insurance" className="mt-12">
          Bandwidth as Insurance
        </h2>

        <p className="mt-4">
          An AIOS isn&apos;t just about productivity. It&apos;s about maintaining
          the flexibility to pivot when conditions change.
        </p>

        <p className="mt-4">
          When margin pressure arrives — and it&apos;s arriving across every
          industry — the businesses with bandwidth can respond. They can explore
          new channels, test new models, move into adjacent markets. A service
          business that can spin up a new offering in a week instead of a quarter
          has a fundamentally different relationship with risk.
        </p>

        <p className="mt-4">
          The businesses trapped in operations can&apos;t pivot. They&apos;re too
          busy keeping the lights on to react. By the time they recognize the
          shift, the businesses with infrastructure have already moved.
        </p>

        <p className="mt-4">
          Freed bandwidth isn&apos;t just a productivity gain. It&apos;s
          resilience. It&apos;s the ability to say &ldquo;yes&rdquo; to the next
          opportunity instead of &ldquo;we don&apos;t have capacity.&rdquo;
        </p>

        <h2 id="honest-posture" className="mt-12">
          Honest Posture
        </h2>

        <p className="mt-4">
          We&apos;re not here to hype AI. We&apos;ve seen what&apos;s coming and,
          honestly, it&apos;s a little unsettling. The pace of change is real.
          The displacement is real. The U.S. Chamber of Commerce puts it starkly:
          more than half of small businesses already use generative AI — more
          than double the rate from two years ago. And 96% plan to adopt it. The
          wave isn&apos;t coming. It&apos;s here. The opportunity is real — but
          only for businesses that have the infrastructure to capture it.
        </p>

        <p className="mt-4">
          We&apos;re not selling a future that sounds exciting. We&apos;re
          building the infrastructure for a future that&apos;s already arriving.
          That&apos;s a different conversation, and it&apos;s the one we want to
          have.
        </p>

        <p className="mt-4">
          Part of honesty is being clear about scope.
        </p>

        <h2 id="what-we-dont-do" className="mt-12">
          What We Don&apos;t Do
        </h2>

        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li>
            We don&apos;t build consumer-facing AI products — no apps, no SaaS
            platforms
          </li>
          <li>
            We don&apos;t offer DIY courses or done-with-you coaching
          </li>
          <li>
            We don&apos;t guarantee specific revenue outcomes — we measure
            away-from-desk autonomy, task automation percentage, and revenue per
            person
          </li>
          <li>
            We don&apos;t replace your team — we augment them
          </li>
        </ul>

        {/* Founder Bio */}
        <h2 id="whos-behind-this" className="mt-12">
          Who&apos;s Behind This
        </h2>

        <p className="mt-4">
          <strong>Brad Wilcox</strong> — Founder, Automation Architecture AI
        </p>

        <p className="mt-4">
          Eighteen years building software products, from a $10M SaaS platform
          serving 500+ universities to AI automation systems for small businesses.
          Previous roles include Head of Product at Jur (layer 1 blockchain),
          Senior Product Manager at Campus Labs (acquired), and Head of Growth at
          Draper Nation. Started his career at Apple. MA from American University.
        </p>

        <p className="mt-4">
          Brad&apos;s approach to AIOS came from watching the same pattern repeat
          across industries: founders with the right instincts adopting tools
          that don&apos;t compound. The AIOS methodology is the infrastructure
          layer he kept wishing existed for every business he worked with.
        </p>

        <div className="mt-12">
          <RelatedLinks
            links={[
              { label: "What we build", href: "/solution" },
              { label: "How we build it", href: "/how-it-works" },
              { label: "See it in action", href: "/use-cases" },
              { label: "Common questions", href: "/faq" },
            ]}
          />
        </div>
      </article>

      <PageCTA />
    </>
  );
}
