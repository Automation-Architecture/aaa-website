import Link from "next/link";
import { JsonLd } from "@/components/common/JsonLd";
import { PageCTA } from "@/components/common/PageCTA";
import { KeyTakeaway } from "@/components/common/KeyTakeaway";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { AUTHOR_SCHEMA, PUBLISHER_SCHEMA, SITE_URL } from "@/lib/schema-constants";
import { RouteNames } from "@/constants";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Real Outcomes From Businesses Running AIOS Infrastructure",
  description:
    "74 calls analyzed overnight into 1 morning brief. 15 hours of weekly lead gen reduced to zero. 7 real outcomes from businesses running on AIOS systems.",
  author: AUTHOR_SCHEMA,
  publisher: PUBLISHER_SCHEMA,
  datePublished: "2026-01-01",
  dateModified: "2026-03-09",
  image: `${SITE_URL}/og-default.png`,
  mainEntityOfPage: `${SITE_URL}/use-cases`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Use Cases", item: `${SITE_URL}/use-cases` },
  ],
};

export function UseCasesView() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-brand-teal tablet:text-4xl">
          Real Outcomes From Businesses Running AIOS Infrastructure
        </h1>

        <KeyTakeaway>
          Across every use case, the common thread is the same: tasks that used
          to require a desk, a laptop, and hours of manual work now happen
          autonomously or from a phone in minutes. The system doesn&apos;t just
          save time — it gives founders the bandwidth to focus on growth instead
          of operations.
        </KeyTakeaway>

        <p className="mt-6 text-brand-teal/80">
          These scenarios illustrate what AIOS infrastructure looks like in
          practice — the workflows, the timelines, and the outcomes the system is
          designed to deliver. Each one maps to a real operational pattern we see
          in the businesses we talk to. As client deployments are completed,
          we&apos;ll update this page with documented results.
        </p>

        <p className="mt-4 text-brand-teal/80">
          Each case maps to one or more of the{" "}
          <Link href={RouteNames.Solution} className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
            three AIOS pillars
          </Link>{" "}
          — context, intelligence, and automation working together.
        </p>

        <section className="mt-12">
          <h2 id="the-morning-brief" className="text-2xl font-bold text-brand-teal">
            1. The Morning Brief — 7 Platforms Replaced by a Single Read
          </h2>
          <p className="mt-4 text-brand-teal/80">
            Here&apos;s the pattern: a founder&apos;s morning starts with seven
            logins. Stripe. YouTube Analytics. Google Analytics. CRM. Slack.
            Calendar. A shared spreadsheet. Two hours of tab-switching and meeting
            attendance before getting any real work done.
          </p>
          <p className="mt-4 text-brand-teal/80">
            With an AIOS, at 7am, a full business brief arrives via Telegram. The
            system analyzes up to 74 calls overnight across multiple business
            streams, pulls data from every connected platform, and produces a
            segment-by-segment breakdown — plus a 5-10 page PDF with deeper
            analysis and a SWOT review.
          </p>
          <p className="mt-4 text-brand-teal/80">
            The founder becomes the most informed person in the organization
            before breakfast. Replaces two to three hours of platform-checking and
            meeting attendance — every single day.
          </p>
          <p className="mt-4 font-semibold text-brand-teal">
            Outcome: Replaced 2-3 hours of daily platform-checking with a single
            morning brief delivered by 7am.
          </p>
        </section>

        <section className="mt-12">
          <h2 id="lead-pipeline" className="text-2xl font-bold text-brand-teal">
            2. Lead Pipeline — From 15 Hours a Week to Fully Autonomous
          </h2>
          <p className="mt-4 text-brand-teal/80">
            A service business owner&apos;s weeks all look the same: manually
            researching prospects, writing outreach emails one by one, tracking
            follow-ups in a spreadsheet, and watching leads slip between the
            cracks. They&apos;re burning 15-20 hours a week just keeping the
            pipeline moving.
          </p>
          <p className="mt-4 text-brand-teal/80">
            With an AIOS, the entire pipeline is automated in one week: built-in
            research and lead scoring that only engages prospects above a score of
            7, auto-drafted outreach messages, a full nurturing sequence, and
            automatic handoff to project management with all lead context intact
            when an offer is accepted.
          </p>
          <p className="mt-4 text-brand-teal/80">
            What used to consume 15-20 hours a week now runs autonomously. That
            bandwidth goes back to client delivery and growth.
          </p>
          <p className="mt-4 font-semibold text-brand-teal">
            Outcome: 15-20 hours per week of manual lead generation, automated to
            zero. That bandwidth goes back to closing new projects.
          </p>
        </section>

        <section className="mt-12">
          <h2 id="landing-page" className="text-2xl font-bold text-brand-teal">
            3. Landing Page — Voice Note to Live Page, Before the Driveway
          </h2>
          <p className="mt-4 text-brand-teal/80">
            Normally, getting a landing page built means sitting down, briefing a
            designer, waiting days for a draft, then going through rounds of
            revisions. A founder stuck in traffic doesn&apos;t have that kind of
            time.
          </p>
          <p className="mt-4 text-brand-teal/80">
            He opens Telegram from his car, explains what he needs via voice
            note — a lead magnet page for a YouTube video going live that
            evening. The system analyzes his existing website styling and copy,
            pulls in business context, and one-shots the entire landing page.
            Design-matched. Copy-aligned. Deployed.
          </p>
          <p className="mt-4 text-brand-teal/80">
            What would have taken days and several hundred dollars takes minutes
            and zero design cost. The page is live before he pulls into the
            driveway.
          </p>
          <p className="mt-4 font-semibold text-brand-teal">
            Outcome: Deployed a design-matched, copy-aligned landing page in
            minutes — from a phone, with zero design cost.
          </p>
        </section>

        <section className="mt-12">
          <h2 id="content-pipeline" className="text-2xl font-bold text-brand-teal">
            4. Content Pipeline — A Walk in the Park to Publish-Ready
          </h2>
          <p className="mt-4 text-brand-teal/80">
            Usually, turning an idea into a publish-ready post means sitting at a
            desk for two to three hours — outlining, researching, drafting,
            editing, formatting, creating visual assets. A founder on a morning
            walk doesn&apos;t sit down at all.
          </p>
          <p className="mt-4 text-brand-teal/80">
            He captures the idea via Telegram voice note. The system grabs the
            7-day context window of recent content, aligns to brand positioning,
            and produces a fully aligned concept. Research pulled from relevant
            sources. A LinkedIn post drafted in his voice. A 7-slide Twitter
            carousel designed and formatted. Everything saved to the project
            folder, ready to publish.
          </p>
          <p className="mt-4 text-brand-teal/80">
            From a passing thought to a full content package — without opening a
            laptop.
          </p>
          <p className="mt-4 font-semibold text-brand-teal">
            Outcome: Produced a publish-ready LinkedIn post and 7-slide carousel
            from a voice note — without opening a laptop.
          </p>
        </section>

        <section className="mt-12">
          <h2 id="thumbnail-generation" className="text-2xl font-bold text-brand-teal">
            5. Thumbnail Generation — Minutes Instead of Days, Zero Design Fees
          </h2>
          <p className="mt-4 text-brand-teal/80">
            A founder needs a YouTube thumbnail before a video goes live. Normally
            that means briefing a freelance designer, waiting two to three days
            for concepts, paying $50-200 per asset (ManyPixels, 2025), then going
            back and forth on revisions.
          </p>
          <p className="mt-4 text-brand-teal/80">
            Instead, he describes what he wants in Telegram. The system pulls the
            brand context — style, colors, positioning, previous thumbnails — and
            generates three options in minutes. He picks one, makes a tweak via
            follow-up message, and has the final asset in his project folder.
          </p>
          <p className="mt-4 text-brand-teal/80">
            The equivalent of having a designer on call around the clock — except
            the turnaround is minutes, not days, and the cost is zero per asset.
          </p>
          <p className="mt-4 font-semibold text-brand-teal">
            Outcome: Generated brand-matched thumbnail options in minutes instead
            of 2-3 days, with zero per-asset cost.
          </p>
        </section>

        <section className="mt-12">
          <h2 id="cfo-report" className="text-2xl font-bold text-brand-teal">
            6. CFO Report — Compiled Between Sets at a Festival
          </h2>
          <p className="mt-4 text-brand-teal/80">
            A founder is standing in a crowd at a music festival when a message
            comes in: the CFO needs a financial summary before a morning meeting.
            Normally that means leaving early, finding a laptop, pulling data from
            three platforms, and spending an hour formatting a report. Or saying
            &ldquo;I&apos;ll get it to you Monday.&rdquo;
          </p>
          <p className="mt-4 text-brand-teal/80">
            He opens Telegram, types the request. The system pulls financial data
            from connected sources, compiles the report, and delivers a
            presentation-ready PDF — all within the hour.
          </p>
          <p className="mt-4 text-brand-teal/80">
            No laptop. No desk. No interruption to his evening. The CFO has the
            report before the next set starts.
          </p>
          <p className="mt-4 font-semibold text-brand-teal">
            Outcome: Compiled and delivered a presentation-ready financial report
            from a phone — within the hour, from a music festival.
          </p>
        </section>

        <section className="mt-12">
          <h2 id="data-dashboards" className="text-2xl font-bold text-brand-teal">
            7. Data Dashboards — Seven Platforms Replaced by One Morning Glance
          </h2>
          <p className="mt-4 text-brand-teal/80">
            Every morning starts the same way: log into Stripe, check YouTube
            Analytics, open Google Analytics, pull up Bitly, scan the CRM, update
            the P&amp;L spreadsheet, check the community platform. Thirty to
            forty-five minutes of tab-switching before any real work begins.
          </p>
          <p className="mt-4 text-brand-teal/80">
            With an AIOS, all data feeds into a single dashboard. Revenue,
            traffic, content performance, lead pipeline status, community
            activity — business health readable at a glance. One screen. Updated
            automatically.
          </p>
          <p className="mt-4 text-brand-teal/80">
            Like checking a weather app. Except it&apos;s your entire business.
            Saves 30-45 minutes every morning — and eliminates the mental overhead
            of context-switching between seven different platforms before the real
            work even starts.
          </p>
          <p className="mt-4 font-semibold text-brand-teal">
            Outcome: Replaced 7 platform logins and 30-45 minutes of daily
            context-switching with a single auto-updating dashboard.
          </p>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-bold text-brand-teal">A Note on Scope</h3>
          <p className="mt-4 text-brand-teal/80">
            Every business is different. Timelines, automation percentages, and
            specific outcomes depend on your tools, team structure, data
            readiness, and operational complexity. The scenarios above represent
            what the architecture is designed to deliver — not guarantees. During
            the free consultation, we assess your specific situation and set
            realistic expectations before any work begins.
          </p>
        </section>

        <div className="mt-12">
          <RelatedLinks
            links={[
              { label: "How the system is built", href: RouteNames.HowItWorks },
              { label: "The philosophy behind it", href: RouteNames.About },
              { label: "Common questions", href: RouteNames.FAQ },
              { label: "What we build", href: RouteNames.Solution },
            ]}
          />
        </div>
      </article>

      <PageCTA />
    </>
  );
}
