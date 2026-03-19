import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { QuotableStatement } from "@/components/QuotableStatement";
import { CardGrid } from "@/components/CardGrid";
import { SocialProofStrip } from "@/components/SocialProofStrip";
import { GhostButton } from "@/components/GhostButton";
import { TrackedLink } from "@/components/TrackedLink";
import { webPageSchema, breadcrumbSchema } from "./schema";

export const metadata: Metadata = {
  title: "AI Operating System for Small Business -- AIOS by AAA",
  description:
    "60-70% of recurring tasks automated in weeks, not months. We build full AI operating systems for small businesses and startups. Get your free Blueprint.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AI Operating System for Small Business -- AIOS by AAA",
    description:
      "60-70% of recurring tasks automated in weeks, not months. We build full AI operating systems for small businesses and startups. Get your free Blueprint.",
    type: "website",
  },
};

const useCaseCards = [
  {
    title: "The Morning Brief",
    outcome: "74 calls analyzed overnight. One brief by 7am.",
    body: "Because the system knows the business fully — team, revenue, priorities, every active project — it can synthesize 74 calls across multiple streams into one brief that actually makes sense. Complete with a SWOT review. The founder becomes the most informed person in the organization before breakfast.",
  },
  {
    title: "Lead Pipeline — Built in One Week",
    outcome: "15 hours a week on lead gen. Then zero.",
    body: "A service business owner spending 15 hours a week on research, outreach, and follow-ups. With an AIOS, the entire flow is automated in one week: scoring, drafting, nurturing, and project handoff with full context intact. That bandwidth goes straight back into client delivery.",
  },
  {
    title: "Landing Page From a Phone",
    outcome: "Voice note in. Live page out. Before he got home.",
    body: "A founder needs a lead magnet page for a YouTube video. He opens Telegram from his car, explains what he needs via voice note. The system matches his site's design and copy, builds the page, and deploys it — all before he pulls into the driveway.",
  },
  {
    title: "Content Pipeline",
    outcome: "Idea to publish-ready — from a voice note.",
    body: "A founder captures a content idea via Telegram while walking. The system pulls the last 7 days of content context, aligns to brand positioning, and produces a LinkedIn post in his voice plus a 7-slide carousel — saved to the project folder, ready to publish.",
  },
];

const socialProofItems = [
  { value: "12-25x", label: "Away-from-Desk Autonomy" },
  { value: "60-70%", label: "Task Automation" },
  { value: "50% \u2192 90%", label: "Revenue per Person" },
];


export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <Section id="section-hero" className="py-20 px-4 text-center">
        <h1 className="hero-headline">
          How to prepare your business for the agent-to-agent economy.
        </h1>
        <p className="mt-6 text-lg text-brand-gray max-w-3xl mx-auto">
          Automation Architecture AI builds AI operating system infrastructure
          for small businesses and startups — a done-for-you system that handles
          operations so founders can focus on growth. We serve the founder who
          wants the result without becoming the engineer.
        </p>

        <h2 id="scene" className="mt-16 text-2xl font-bold hero-scene">
          Scene
        </h2>
        <div className="mt-6 max-w-3xl mx-auto text-left">
          <p>
            It&rsquo;s 7:02am. You haven&rsquo;t opened your laptop.
          </p>
          <p className="mt-4">
            Four things happened while you slept. Your day is planned: calendar
            blocks set, priorities ranked, conflicts flagged. A LinkedIn post
            sits in your drafts, written in your voice. A 7-slide carousel is
            ready to publish. Your team pulse check is done — status vs. goals,
            two follow-ups flagged. And a finished PNG diagram you needed for a
            client deck? Sitting in your project folder.
          </p>
          <QuotableStatement>
            <p>Four tasks. Ninety seconds. Before breakfast.</p>
          </QuotableStatement>
          <p className="mt-4">
            That&rsquo;s not a pitch. That&rsquo;s a Tuesday — when your
            business runs on the right infrastructure.
          </p>
        </div>

        <h2 id="the-gap" className="mt-16 text-2xl font-bold">
          The Gap
        </h2>
        <div className="mt-6 max-w-3xl mx-auto text-left">
          <p>
            Now think about your actual morning. How many tabs? How many logins?
            How long before you get to the work that actually matters?
          </p>
          <p className="mt-4">
            The agent-to-agent economy — where AI agents transact, negotiate,
            and operate on behalf of businesses — is arriving faster than most
            founders realize.
          </p>
          <p className="mt-4">
            The gap between where you are and where you could be isn&rsquo;t
            about effort. You&rsquo;re already working hard enough. It&rsquo;s
            about architecture — the system underneath everything else. The
            infrastructure that turns raw AI capability into daily business
            results.
          </p>
          <p className="mt-4">
            Your competitors haven&rsquo;t started building theirs yet. That gap
            is your advantage. In 12 months, this conversation will be obvious.
            Right now, it&rsquo;s still early — but the window won&rsquo;t stay
            open.
          </p>
        </div>

        <div
          id="hero-cta"
          className="mt-10 flex flex-col items-center gap-4 tablet:flex-row tablet:justify-center"
        >
          <TrackedLink
            href="/blueprint"
            event="cta_click"
            eventParams={{ cta_location: "hero" }}
            className="inline-block rounded-md bg-brand-lime px-8 py-3 font-bold text-brand-teal hover:opacity-90 transition-opacity"
          >
            Get Your Free AI Blueprint
          </TrackedLink>
          <GhostButton href="/how-it-works">See How It Works</GhostButton>
        </div>
        <p className="mt-3 text-sm text-brand-gray">
          Get AI automation recommendations tailored to your industry. Free, no
          obligation.
        </p>
      </Section>

      {/* Problem Teaser */}
      <Section id="problem-teaser" className="py-16 px-4 max-w-3xl mx-auto">
        <h2 id="the-operator-trap" className="text-2xl font-bold">
          The Operator Trap
        </h2>
        <blockquote className="mt-6 border-l-4 border-brand-lime pl-4 italic text-brand-gray">
          &ldquo;I need to get focused. AI is changing so rapidly that I feel
          overwhelmed and catch myself chasing the next shiny object.&rdquo;
        </blockquote>
        <p className="mt-6">
          There&rsquo;s a name for what you&rsquo;re feeling:{" "}
          <strong>the Operator Trap.</strong> Eighty percent of your bandwidth
          goes to keeping the business running — admin, meetings, scheduling,
          putting out fires. That leaves maybe twenty percent for the work that
          actually grows the business.
        </p>
        <QuotableStatement>
          <p>
            You&rsquo;ve tried ChatGPT. You&rsquo;ve tried Zapier. You&rsquo;ve
            tried a dozen browser extensions. The instinct was right. The
            infrastructure wasn&rsquo;t.
          </p>
        </QuotableStatement>
        <p className="mt-4">
          Over 46,700 AI tools exist today (per theresanaiforthat.com), and none
          of them talk to each other.{" "}
        </p>
        <QuotableStatement>
          <p>
            Tools without architecture don&rsquo;t compound. They accumulate.
          </p>
        </QuotableStatement>
        <p className="mt-6">
          <Link
            href="/problem"
            className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-lime transition-colors"
          >
            Read more &rarr;
          </Link>
        </p>
      </Section>

      {/* Solution Teaser */}
      <Section id="solution-teaser" className="py-16 px-4 max-w-3xl mx-auto">
        <h2 id="the-system-that-changes-this" className="text-2xl font-bold">
          The system that changes this
        </h2>
        <p className="mt-6">
          There&rsquo;s a system that changes this. We call it the bottle — the
          operating system that channels the raw power of AI into something your
          business can actually use.
        </p>
        <p className="mt-4">
          It&rsquo;s called an <strong>AIOS</strong> — an AI Operating System —
          and it wraps around your entire business in three layers:
        </p>
        <div className="mt-6 space-y-4 pillar-summary">
          <h3 id="business-context-data-engine" className="text-xl font-bold">
            Business Context Data Engine
          </h3>
          <p>
            Your AI knows your business the way a co-founder would.
          </p>

          <h3 id="dashboard-intelligence" className="text-xl font-bold mt-6">
            Dashboard Intelligence
          </h3>
          <p>
            A morning brief, delivered before you open your laptop.
          </p>

          <h3 id="automated-task-management" className="text-xl font-bold mt-6">
            Automated Task Management
          </h3>
          <p>
            60-70% of your recurring tasks, handled — a number McKinsey backs
            up.
          </p>
        </div>
        <p className="mt-6">
          Three layers working together. Context makes the intelligence useful.
          Intelligence makes the automation smart.{" "}
        </p>
        <QuotableStatement>
          <p>Not a chatbot. Not a wrapper. An operating system.</p>
        </QuotableStatement>
        <p className="mt-6">
          <Link
            href="/solution"
            className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-lime transition-colors"
          >
            See the full picture &rarr;
          </Link>
        </p>
      </Section>

      {/* Use Cases Teaser */}
      <Section id="use-cases-teaser" className="py-16 px-4 max-w-3xl mx-auto">
        <h2
          id="what-this-looks-like-in-practice"
          className="text-2xl font-bold"
        >
          What this looks like in practice
        </h2>
        <div className="mt-8">
          <CardGrid cards={useCaseCards} />
        </div>
        <p className="mt-8">
          <Link
            href="/use-cases"
            className="text-brand-teal font-semibold underline underline-offset-2 hover:text-brand-lime transition-colors"
          >
            See all use cases &rarr;
          </Link>
        </p>
      </Section>

      {/* Social Proof */}
      <Section id="social-proof" className="py-16 px-4 max-w-3xl mx-auto">
        <h2
          id="we-measure-three-things-for-every-client"
          className="text-2xl font-bold text-center"
        >
          We measure three things for every client
        </h2>
        <div className="mt-8">
          <SocialProofStrip
            items={socialProofItems}
            disclaimer="These are methodology targets based on AIOS architecture — derived from time-per-task comparisons before and after AIOS deployment — and supported by industry research (McKinsey, 2023; Leng et al., 2024). Client results will replace this section as deployments are completed."
          />
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="final-cta" className="py-16 px-4 max-w-3xl mx-auto">
        <h2 id="you-have-two-paths-from-here" className="text-2xl font-bold">
          You have two paths from here
        </h2>
        <div className="mt-6 space-y-6">
          <div>
            <p>
              <strong>Do it alone:</strong> Evaluate 46,700 AI tools. Learn the
              architecture. Navigate context systems, API integrations, and
              automation layers yourself. Spend months iterating before anything
              runs. Maintain and evolve it as the landscape shifts underneath
              you.
            </p>
          </div>
          <div>
            <p>
              <strong>Do it with us:</strong> We build the full system around
              your business. Business context, dashboard intelligence, automated
              task management — configured for your operations. First working
              system live within weeks. Ongoing support as your business grows.
            </p>
          </div>
        </div>

        <h3 id="three-guarantees" className="mt-10 text-xl font-bold">
          Three Guarantees
        </h3>
        <ul className="mt-4 space-y-3 list-disc list-inside">
          <li>
            <strong>Get a personalized AI Blueprint before any commitment.</strong>{" "}
            You see exactly what&rsquo;s possible for your business — free,
            before any engagement begins.
          </li>
          <li>
            <strong>You&rsquo;ll never be stuck alone.</strong> We don&rsquo;t
            build and disappear. Ongoing partnership means the system evolves
            with you.
          </li>
          <li>
            <strong>You don&rsquo;t need to be technical.</strong> We build it.
            We configure it. We maintain it. You use it.
          </li>
        </ul>

        <p
          id="emotional-close"
          className="mt-12 text-2xl font-bold"
        >
          We build the bottle. You fill it with the business you actually want
          to run.
        </p>
        <QuotableStatement>
          <p>A business that serves you, not the other way around.</p>
        </QuotableStatement>

        <div className="mt-10 text-center">
          <TrackedLink
            href="/blueprint"
            event="cta_click"
            eventParams={{ cta_location: "final_cta" }}
            className="inline-block rounded-md bg-brand-lime px-8 py-3 font-bold text-brand-teal hover:opacity-90 transition-opacity"
          >
            Get Your Free AI Blueprint
          </TrackedLink>
          <p className="mt-3 text-sm text-brand-gray">
            Get AI automation recommendations tailored to your industry. Free,
            no obligation.
          </p>
        </div>
      </Section>
    </>
  );
}
