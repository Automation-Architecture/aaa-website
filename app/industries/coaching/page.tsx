import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageCTA } from "@/components/PageCTA";
import { KeyTakeaway } from "@/components/KeyTakeaway";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { generateBreadcrumbSchema } from "@/lib/breadcrumbs";
import { AUTHOR_SCHEMA, PUBLISHER_SCHEMA } from "@/lib/schema-constants";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI Automation for Coaches: Scale Without Losing You -- AAA",
  description:
    "Coaches trade time for money. An AIOS handles content pipelines, landing pages, and daily briefings — so you focus on the clients, not the admin.",
  alternates: { canonical: "/industries/coaching" },
  openGraph: {
    title: "AI Automation for Coaches: Scale Without Losing You",
    description:
      "Coaches trade time for money. An AIOS handles content pipelines, landing pages, and daily briefings — so you focus on the clients, not the admin.",
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Automation for Coaching Businesses",
  description: metadata.description,
  author: AUTHOR_SCHEMA,
  publisher: PUBLISHER_SCHEMA,
  datePublished: "2026-01-01",
  dateModified: "2026-03-09",
  image: `${SITE_URL}/images/industries-coaching-og.jpg`,
  mainEntityOfPage: `${SITE_URL}/industries/coaching`,
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Coaching", path: "/industries/coaching" },
]);

export default function IndustriesCoachingPage() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1>AI Automation for Coaching Businesses</h1>

        <p className="mt-2 text-sm text-brand-gray">
          Last updated: 2026-03-09
        </p>

        <KeyTakeaway>
          Most coaching businesses run on the founder&#39;s time — content,
          scheduling, client management, and metrics all compete with actual
          coaching hours. An AIOS handles the operational layer (content in the
          founder&#39;s voice, daily briefings, task automation) so coaches can
          focus on clients and growth.
        </KeyTakeaway>

        {/* Intro */}
        <p className="mt-8">
          You became a coach to help people transform. Now most of your week
          goes to running the business around the coaching — writing content,
          building landing pages, managing a calendar, chasing invoices,
          checking metrics across five platforms.
        </p>
        <p>
          The math doesn&#39;t work. Every hour coaching is an hour not building
          the business. Every hour building the business is an hour not
          coaching. And the one thing that actually grows a coaching business —
          consistent, high-quality content — is the first thing that gets cut
          when the calendar fills up. The scale of the industry makes this even
          more acute. The ICF&#39;s 2025 Global Coaching Study puts numbers on
          it — 60% of coaches also offer training and 57% offer consulting
          alongside coaching — each service adding its own operational load.
        </p>
        <p>
          You&#39;ve probably tried using ChatGPT for content. It&#39;s fine
          for first drafts. But it doesn&#39;t know your voice, your framework,
          your positioning, or what you posted last Tuesday. The output is
          generic. Your audience can tell. And you end up spending almost as
          long editing as you would have spent writing from scratch.
        </p>
        <p>
          The problem isn&#39;t effort. The problem is infrastructure. You need
          a system that knows your business the way you do — and can act on
          that knowledge without you sitting at a desk.
        </p>

        {/* How the AIOS Works for Coaches */}
        <h2 id="how-the-aios-works-for-coaches" className="mt-12">
          How the AIOS Works for Coaches
        </h2>
        <p>
          An{" "}
          <Link href="/solution" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
            AIOS (AI Operating System)
          </Link>{" "}
          wraps around your entire operation — content, data, scheduling, client
          management — and runs whether you&#39;re on a coaching call, at the
          gym, or on vacation. Three pillars: the Business Context Data Engine
          gives the system deep knowledge of your business, your voice, and your
          positioning. Dashboard Intelligence delivers a daily brief on
          everything happening across your business. Automated Task Management
          handles the scheduling, follow-ups, content production, and admin that
          consume a coach&#39;s week — targeting a threshold McKinsey pegs at
          60-70% of employee tasks.
        </p>
        <p>
          The Business Context Data Engine is the piece that changes everything
          for coaches. It stores your communication style, your frameworks, your
          brand positioning, your content history. When the system creates
          content, it creates it as <em>you</em> — because it&#39;s built on
          everything you&#39;ve said and written.
        </p>
        <p>Here&#39;s what that looks like day to day.</p>

        {/* Before vs. After */}
        <h2 id="before-vs-after-coaching-operations" className="mt-12">
          Before vs. After: Coaching Operations
        </h2>
        <ResponsiveTable
          caption="Coaching operations before and after AIOS"
          headers={["", "Before AIOS", "After AIOS"]}
          rows={[
            [
              "Client onboarding",
              "Manual intake, scheduling, welcome sequences",
              "Automated — intake to first session, hands-off",
            ],
            [
              "Content creation",
              "Hours of writing between sessions",
              "Voice note → publish-ready content in minutes",
            ],
            [
              "Session prep",
              "Reviewing notes, pulling context manually",
              "AI-generated brief with full client history",
            ],
            [
              "Lead nurturing",
              "Sporadic follow-ups when time allows",
              "Automated sequences running 24/7",
            ],
            [
              "Founder's time split",
              "80% operations / 20% growth",
              "20-30% operations / 70-80% growth",
            ],
          ]}
        />

        {/* Your Content Engine Runs From Your Phone */}
        <h2 id="your-content-engine-runs-from-your-phone" className="mt-12">
          Your Content Engine Runs From Your Phone
        </h2>
        <p>
          With an AIOS, a coaching founder captures a content idea via voice
          note while on a morning walk. The system grabs the 7-day context
          window of recent content, aligns to brand positioning, and produces a
          publish-ready LinkedIn post plus a 7-slide carousel — all saved to
          the project folder, ready to post.
        </p>
        <p>
          For a coach, this is the difference between going dark for weeks
          during a launch and publishing consistently. No more choosing between
          coaching and content. A voice note on a walk, from the car, between
          sessions — and your audience sees consistent, on-brand content that
          sounds like you. Because it&#39;s built from your voice, your ideas,
          your business context.
        </p>
        <p>
          <strong>
            Outcome: Publish-ready content from a voice note. No laptop. No
            production day. No ghostwriter.
          </strong>
        </p>
        <p>
          <Link href="/use-cases" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
            See the full use case &rarr;
          </Link>
        </p>

        {/* You See Your Whole Business Before Your First Call */}
        <h2
          id="you-see-your-whole-business-before-your-first-call"
          className="mt-12"
        >
          You See Your Whole Business Before Your First Call
        </h2>
        <p>
          Every morning, a full brief arrives before 8am. Revenue, content
          performance, lead pipeline, upcoming sessions, client engagement —
          synthesized from every connected platform into a single read.
        </p>
        <p>
          For a coach juggling 1:1 clients, a group program, a content
          calendar, and a launch, this replaces the scattered check-ins across
          five platforms that eat the first hour of every day. You know exactly
          where things stand — bookings, revenue, what&#39;s performing, what
          needs attention — before your first coaching call.
        </p>
        <p>
          <strong>
            Outcome: Replaced daily platform-hopping with a single morning
            brief. Full business visibility in one read.
          </strong>
        </p>
        <p>
          <Link href="/use-cases" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
            See the full use case &rarr;
          </Link>
        </p>

        {/* New Offers Go Live in Minutes, Not Weeks */}
        <h2
          id="new-offers-go-live-in-minutes-not-weeks"
          className="mt-12"
        >
          New Offers Go Live in Minutes, Not Weeks
        </h2>
        <p>
          Normally, launching a new workshop, lead magnet, or mini-course means
          briefing a designer, waiting days for a draft, and going through
          rounds of revisions. By the time the page is live, the momentum
          behind the idea has faded.
        </p>
        <p>
          You send a voice note from the car describing what you need — a lead
          magnet page for a video going live that evening. The system analyzes
          existing site styling and copy, pulls in business context, and
          deploys a design-matched, copy-aligned landing page in minutes.
        </p>
        <p>
          For a coach with a new program idea, a flash workshop, or a seasonal
          offer — the gap between &ldquo;I should build a page for this&rdquo;
          and &ldquo;it&#39;s live&rdquo; shrinks from days to minutes.
        </p>
        <p>
          <strong>
            Outcome: Live landing page from a voice note. Design-matched,
            copy-aligned, deployed in minutes.
          </strong>
        </p>
        <p>
          <Link href="/use-cases" className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
            See the full use case &rarr;
          </Link>
        </p>

        {/* Closing */}
        <h2
          id="the-coaching-business-that-grows-while-you-coach"
          className="mt-12"
        >
          The Coaching Business That Grows While You Coach
        </h2>
        <p>
          The coaches who grow fastest aren&#39;t the ones who work the most
          hours. They&#39;re the ones with systems that multiply their reach
          without multiplying their time.
        </p>
        <p>
          When content publishes consistently without production days, when the
          business brief arrives before your first call, when a new offer goes
          live from a voice note — you get to focus on the thing you&#39;re
          best at. The coaching. The transformation. The work you started this
          for.
        </p>
        <p>
          The AIOS doesn&#39;t replace you. It gives you back the time that the
          business has been taking from you.
        </p>

        {/* Scope */}
        <h3 id="scope" className="mt-12">
          Scope
        </h3>
        <p>
          Every coaching practice is different. Automation percentages,
          timelines, and specific outcomes depend on your tools, team structure,
          and operational complexity. We assess fit during the free consultation
          and set realistic expectations before any work begins.
        </p>

        <RelatedLinks
          links={[
            { label: "How the system works", href: "/how-it-works" },
            { label: "Full AIOS overview", href: "/solution" },
            { label: "All use cases", href: "/use-cases" },
          ]}
        />
      </article>

      <PageCTA />
    </>
  );
}
