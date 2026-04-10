import Link from "next/link";
import Image from "next/image";
import { RouteNames } from "@/constants";
import { FaqAccordion } from "./FaqAccordion";
import { FaqAccordionItem } from "./FaqAccordionItem";

type ComparisonRow = {
  title: string;
  leftValue: string;
  rightValue: string;
};

const CHATGPT_VS_AIOS_ROWS = [
  {
    title: "Knows your business",
    aios: "Yes. Full context engine",
    chatgpt: "No",
  },
  {
    title: "Remembers past work",
    aios: "Yes — compounds over time",
    chatgpt: "No — stateless",
  },
  {
    title: "Acts autonomously",
    aios: "Yes — researches, creates, reports",
    chatgpt: "No — responds to prompts",
  },
  {
    title: "Output quality",
    aios: "~90% with structured context",
    chatgpt: "~50% with manual context",
  },
];

const AI_TOOL_VS_AIOS_ROWS: ComparisonRow[] = [
  {
    title: "Scope",
    leftValue: "Single task (writing, scheduling, scraping)",
    rightValue: "Connected across entire business",
  },
  {
    title: "Context",
    leftValue: "None — starts fresh each session",
    rightValue: "Full business knowledge, compounding",
  },
  {
    title: "Learning",
    leftValue: "Stateless",
    rightValue: "Logs decisions, refines skills over time",
  },
  {
    title: "Integration",
    leftValue: "Standalone",
    rightValue: "Context → intelligence → automation loop",
  },
];

const ZAPIER_VS_AIOS_ROWS: ComparisonRow[] = [
  {
    title: "Model",
    leftValue: "If-this-then-that triggers",
    rightValue: "Context-aware reasoning",
  },
  {
    title: "Business knowledge",
    leftValue: "None",
    rightValue: "Full context engine",
  },
  {
    title: "Decision-making",
    leftValue: "Rule-based reactions",
    rightValue: "Priority-aware responses",
  },
  {
    title: "Compounding",
    leftValue: "No — static workflows",
    rightValue: "Yes — learns and improves over time",
  },
  {
    title: "Scope",
    leftValue: "App-to-app connections",
    rightValue: "Full infrastructure: context + intelligence + automation",
  },
];

type ComparisonBlockProps = {
  rows: ComparisonRow[];
  leftIconSrc: string;
  leftIconAlt: string;
  leftIconClassName: string;
  rightIconSrc: string;
  rightIconAlt: string;
  rightIconClassName: string;
};

function ComparisonBlock({
  rows,
  leftIconSrc,
  leftIconAlt,
  leftIconClassName,
  rightIconSrc,
  rightIconAlt,
  rightIconClassName,
}: ComparisonBlockProps) {
  return (
    <div className="mt-4 overflow-hidden rounded-[0.625rem] border border-brand-divider">
      {rows.map((row) => (
        <div
          key={row.title}
          className="border-b border-brand-divider last:border-b-0"
        >
          <div className="bg-brand-black px-4 py-2 text-center text-[1rem] font-bold tracking-[-0.03rem] text-brand-white">
            {row.title}
          </div>
          <div className="grid grid-cols-[4.5rem_1fr] items-center gap-4 bg-brand-lime px-4 py-2">
            <div className="flex items-center">
              <Image
                src={leftIconSrc}
                alt={leftIconAlt}
                width={55}
                height={16}
                className={leftIconClassName}
              />
            </div>
            <p className="text-[0.9375rem] text-brand-heading">
              {row.rightValue}
            </p>
          </div>
          <div className="grid grid-cols-[4.5rem_1fr] items-center gap-4 bg-brand-white px-4 py-2">
            <div className="flex items-center">
              <Image
                src={rightIconSrc}
                alt={rightIconAlt}
                width={55}
                height={16}
                className={rightIconClassName}
              />
            </div>
            <p className="text-[0.9375rem] text-brand-gray">{row.leftValue}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FaqQuestionsSection() {
  return (
    <FaqAccordion>
      <FaqAccordionItem
        id="is-this-just-chatgpt"
        question="1. Is this just ChatGPT?"
      >
        <p className="text-brand-gray">
          No. An AIOS is a{" "}
          <Link
            href={RouteNames.Solution}
            className="text-brand-teal underline underline-offset-2"
          >
            full business operating system
          </Link>{" "}
          — not a chatbot. ChatGPT gets you maybe fifty percent of the way
          there. You paste in context every session, you repeat yourself, and
          you get generic output that doesn&apos;t know your business.
        </p>
        <p className="mt-3 text-brand-gray">
          An AIOS fully knows your business — your team, your products, your
          financials, your priorities. It doesn&apos;t just answer questions —
          it researches, creates, schedules, checks in, and reports back. It
          acts on your behalf, across your entire operation. That&apos;s the
          difference between a chatbot and an operating system.
        </p>

        <div className="mt-4 overflow-hidden rounded-[0.625rem] border border-brand-divider">
          {CHATGPT_VS_AIOS_ROWS.map((row) => (
            <div
              key={row.title}
              className="border-b border-brand-divider last:border-b-0"
            >
              <div className="bg-brand-black px-4 py-2 text-center text-[1rem] font-bold tracking-[-0.03rem] text-brand-white">
                {row.title}
              </div>
              <div className="grid grid-cols-[4.5rem_1fr] items-center gap-4 bg-brand-lime px-4 py-2">
                <div className="flex items-center">
                  <Image
                    src="/icons/aios.svg"
                    alt=""
                    width={55}
                    height={16}
                    className="h-4 w-auto"
                  />
                </div>
                <p className="text-[0.9375rem] text-brand-heading">
                  {row.aios}
                </p>
              </div>
              <div className="grid grid-cols-[4.5rem_1fr] items-center gap-4 bg-brand-white px-4 py-2">
                <div className="flex items-center">
                  <Image
                    src="/icons/chatgpt.svg"
                    alt=""
                    width={55}
                    height={12}
                    className="h-3 w-auto"
                  />
                </div>
                <p className="text-[0.9375rem] text-brand-gray">
                  {row.chatgpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-4 border-t border-brand-divider pt-4">
          <div className="flex items-start gap-2">
            <Image
              src="/icons/quote.svg"
              alt=""
              width={20}
              height={18}
              className="mt-0.5 h-4.5 w-5 shrink-0"
            />
            <p className="text-[1rem] italic text-brand-gray2">
              Output quality = percentage of AI-generated deliverables usable
              with minimal editing. Databricks research supports this:
              structured context is the largest lever for LLM accuracy.
            </p>
          </div>
          <div className="mt-2 ml-auto w-40 border-b border-brand-divider" />
          <p className="pt-1 text-right text-[0.75rem] text-brand-gray">
            (Leng et al., 2024)
          </p>
        </div>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="can-i-build-this-myself"
        question="2. Can I build this myself?"
      >
        <p>
          Yes, with the right tools, technical skills, and months of ongoing
          iteration. Here&apos;s what that typically looks like:
        </p>
        <ol className="mt-3 list-decimal pl-6 space-y-2">
          <li>
            <strong>Tool overload</strong> — Over 46,700 AI tools exist (per
            theresanaiforthat.com, early 2026). Weeks spent evaluating before
            building anything.
          </li>
          <li>
            <strong>Context architecture</strong> — Setting up the structured
            knowledge layer that makes AI useful for <em>your</em> business is a
            non-trivial design problem.
          </li>
          <li>
            <strong>Integration complexity</strong> — Connecting APIs, data
            sources, dashboards, and automation layers requires developer-level
            skill.
          </li>
          <li>
            <strong>Developer cost</strong> — Freelance AI developers charge
            $75-$300/hour depending on experience (Zen van Riel, 2026), putting
            part-time contract help at $3,000-$10,000 a month. A full-time hire
            costs even more — the median software developer salary is over $130K
            a year, according to the Bureau of Labor Statistics. And developers
            are hard to work with if you&apos;re not technical yourself.
          </li>
          <li>
            <strong>Architecture failure</strong> — Infinite ways to set it up.
            Infinite ways to mess it up in ways that don&apos;t scale.
          </li>
        </ol>
        <p className="mt-3">
          <Link
            href={RouteNames.About}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            We exist for founders
          </Link>{" "}
          who want the system, not the degree.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem id="is-my-data-secure" question="3. Is my data secure?">
        <p>
          Your business data stays on your infrastructure — not in a third-party
          cloud. Our systems run locally. The API layer strictly does not train
          on your data, unlike consumer apps where you may already be feeding
          proprietary information into training sets. You own your data, your
          context, and your automations. If the engagement ends, everything we
          built stays with you.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="do-i-need-to-be-technical"
        question="4. Do I need to be technical?"
      >
        <p>
          No. The entire system is built, configured, and maintained for you.
          That&apos;s the point of done-for-you. The 7-phase delivery process —
          from intake form to running system — is designed so you never need to
          touch the technical layer. You use the system. We handle everything
          underneath it.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="how-long-does-it-take"
        question="5. How long does it take?"
      >
        <p>
          AI Automation engagements take about one week. Full AIOS builds take
          about three weeks. For example, a full lead pipeline — research,
          scoring, outreach, nurturing, and project handoff — can be built and
          running in one week.
        </p>
        <p className="mt-3">
          Every business is different, but our{" "}
          <Link
            href={RouteNames.HowItWorks}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            modular approach
          </Link>{" "}
          means we&apos;re assembling and configuring proven components, not
          building from scratch.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="how-much-does-it-cost"
        question="6. How much does it cost?"
      >
        <p>
          Every engagement is scoped and priced individually based on your
          business. During the free consultation, we assess your tools, your
          goals, and the scope of work — whether that&apos;s a single automation
          or a full AIOS build.
        </p>
        <p className="mt-3">
          You receive a detailed proposal within 1-2 days of the call with clear
          pricing. There&apos;s no one-size-fits-all number because every
          business has different complexity, data sources, and automation needs.
          The free AI Blueprint and consultation remove the risk of engaging
          blind.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="what-does-it-actually-do-each-day"
        question="7. What does it actually do each day?"
      >
        <p>
          By 7am, before you&apos;ve opened your laptop, your AIOS has already
          analyzed overnight data, prepared your{" "}
          <Link
            href={RouteNames.UseCases}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            morning brief
          </Link>
          , and queued tasks for review. It&apos;s checked your calendar and
          priorities, flagged anything that needs attention, and lined up
          what&apos;s next.
        </p>
        <p className="mt-3">
          Throughout the day it handles{" "}
          <Link
            href={RouteNames.UseCases}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            research, content drafting, data analysis, meeting summaries, and
            task orchestration
          </Link>
          . When a discovery call finishes, the system produces a scoping
          document and draft proposal before you&apos;ve left the meeting room.
          And it compounds — every decision logged, every skill refined, every
          report saved makes the system smarter tomorrow than it was today.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="is-it-suitable-for-a-business-just-starting-up"
        question="8. Is it suitable for a business just starting up?"
      >
        <p>
          Yes — and arguably more so, because startups have no legacy systems to
          work around. No bureaucratic IT backlog, no approval chains. You can
          build the right infrastructure from day one instead of retrofitting
          later.
        </p>
        <p className="mt-3">
          The advantage is greatest for lean teams. Every hour of recovered
          bandwidth has outsized impact when there are only a few of you.
          Starting with the right infrastructure also means you avoid the
          painful migration later when duct-taped tools stop scaling.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="what-if-something-better-comes-out"
        question="9. What if something better comes out?"
      >
        <p>
          The AIOS architecture is model-agnostic — when better AI models
          arrive, they slot into the existing system. The value isn&apos;t in
          any single AI model. It&apos;s in the structured context, data
          connections, and automation layers built around your business.
        </p>
        <p className="mt-3">
          That&apos;s the compound intelligence advantage — the system gets
          better over time regardless of which model powers it.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="can-i-sell-this-as-a-service-to-my-clients"
        question="10. Can I sell this as a service to my clients?"
      >
        <p>
          Yes. If you run an agency or consultancy, AIOS infrastructure can
          become part of your offering. Some of our clients do exactly that —
          building systems for their own businesses first, then offering the
          same capability to their clients.
        </p>
        <p className="mt-3">
          This is a secondary use case, not our primary focus. But it&apos;s a
          natural extension — once you&apos;ve seen the system work in your own
          business, offering the same capability to your clients becomes a new
          revenue stream. We can discuss specifics during the consultation.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="what-is-an-ai-operating-system"
        question="11. What is an AI Operating System?"
      >
        <p>
          An AI Operating System (AIOS) is an autonomous infrastructure layer
          that wraps around an entire business and runs whether the founder is
          at their desk or not. It&apos;s not a single app or chatbot. It&apos;s{" "}
          <Link
            href={RouteNames.Solution}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            three integrated systems working together
          </Link>
          : the Business Context Data Engine (structured knowledge about your
          business), Dashboard Intelligence (AI-powered daily briefings and
          reporting), and Automated Task Management (AI-driven task
          orchestration targeting 60-70% automation of recurring work).
        </p>
        <p className="mt-3">
          Individual AI tools solve individual problems. An AIOS connects
          everything — your data, your operations, your communications — into a
          single system that compounds over time.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="whats-the-difference-between-an-ai-tool-and-an-ai-operating-system"
        question="12. What's the difference between an AI tool and an AI Operating System?"
      >
        <p>
          An AI tool is a point solution. An AIOS is connected infrastructure.
          Tools handle one task in isolation — a writing assistant, a scheduling
          bot, a data scraper. They don&apos;t share context with each other,
          they don&apos;t learn from each other, and they don&apos;t build on
          yesterday&apos;s work.
        </p>
        <p className="mt-3">
          An AIOS connects every layer. Your business context informs your
          intelligence layer. Your intelligence layer drives your automation.
          Your automation feeds data back into context. That&apos;s how a system
          compounds instead of just accumulates.
        </p>
        <ComparisonBlock
          rows={AI_TOOL_VS_AIOS_ROWS}
          leftIconSrc="/icons/aios.svg"
          leftIconAlt="AIOS"
          leftIconClassName="h-4 w-auto"
          rightIconSrc="/icons/tool.svg"
          rightIconAlt="AI Tool"
          rightIconClassName="h-4 w-4 text-brand-gray"
        />
        <p className="mt-3">
          Tools without architecture don&apos;t compound. They accumulate.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="what-is-the-operator-trap-in-business"
        question="13. What is the Operator Trap in business?"
      >
        <p>
          The{" "}
          <Link
            href={RouteNames.Problem}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            Operator Trap
          </Link>{" "}
          is a pattern where 80% of a founder&apos;s working hours go to
          operational maintenance — admin, firefighting, meetings, legal,
          finance — leaving only 20% for the growth work that actually moves the
          business forward. It&apos;s not a phase. It compounds. The longer you
          stay in the trap, the harder it is to escape, because every day spent
          on maintenance is a day not spent building what scales.
        </p>
        <p className="mt-3">
          An AIOS inverts the ratio. The target is 20-30% operational, 70-80%
          growth. We call that bandwidth inversion — getting your time back on
          the work that matters.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="how-does-ai-automation-work-for-small-businesses"
        question="14. How does AI automation work for small businesses?"
      >
        <p>
          It starts with an audit of every recurring task in your operation.
          Each task gets categorized: automate fully, augment with AI
          assistance, or keep manual. The AIOS methodology target is 60-70%
          automation of recurring work — aligned with McKinsey&apos;s finding
          that generative AI can transform 60-70% of working time (McKinsey,
          2023). Not 100%, because some things still need human judgment.
        </p>
        <p className="mt-3">
          What makes it work is business context. Generic automation breaks
          because it doesn&apos;t understand your business. An AIOS built around
          your specific data, team, products, and processes makes decisions the
          way you would — because it knows what you know.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="what-is-a-business-context-data-engine"
        question="15. What is a Business Context Data Engine?"
      >
        <p>
          The Business Context Data Engine is a{" "}
          <Link
            href={RouteNames.Solution}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            structured knowledge layer
          </Link>{" "}
          that gives AI complete understanding of a specific business. The AIOS
          methodology is designed to push output quality to 90% where a chatbot
          tops out at 50% — and the Business Context Data Engine is the reason.
        </p>
        <p className="mt-3">
          It includes everything: your identity and communication style (me.md),
          your business model and products (work.md), your team and their roles
          (team.md), your priorities, goals, decision history, and active
          projects. Connected data sources — Stripe, analytics, CRM, calendar —
          feed real-time information into the same layer. The result is an AI
          that knows your business the way a co-founder would.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="whats-the-difference-between-done-for-you-ai-and-diy-ai-tools"
        question="16. What's the difference between done-for-you AI and DIY AI tools?"
      >
        <p>
          Done-for-you means we build the full system around your business. DIY
          means you evaluate tools, learn the platforms, build the integrations,
          maintain the connections, and iterate alone. Both can work. The
          question is whether you want to spend months becoming an AI engineer
          or whether you&apos;d rather have the system running next week.
        </p>
        <p className="mt-3">
          We exist for founders who want the system, not the degree. Your time
          is better spent running the business than learning to build the tools
          behind it.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="how-is-an-aios-different-from-zapier-or-make"
        question="17. How is an AIOS different from Zapier or Make?"
      >
        <p>
          Zapier and Make are point-to-point workflow automation — &ldquo;when
          this happens, do that.&rdquo; An AIOS is{" "}
          <Link
            href={RouteNames.Solution}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            full infrastructure with context, intelligence, and automation
            layers
          </Link>{" "}
          working together as a connected system.
        </p>
        <p className="mt-3">
          The difference is context. Zapier triggers actions based on events. An
          AIOS understands <em>why</em> those events matter, what else is
          happening in the business, and what the right response should be given
          your current priorities. Triggers react. An AIOS reasons.
        </p>
        <ComparisonBlock
          rows={ZAPIER_VS_AIOS_ROWS}
          leftIconSrc="/icons/aios.svg"
          leftIconAlt="AIOS"
          leftIconClassName="h-4 w-auto"
          rightIconSrc="/icons/zapier.svg"
          rightIconAlt="Zapier"
          rightIconClassName="h-10 w-10"
        />
      </FaqAccordionItem>

      <FaqAccordionItem
        id="do-i-need-a-developer-to-use-ai-automation"
        question="18. Do I need a developer to use AI automation?"
      >
        <p>
          No. Done-for-you means we handle all technical work — architecture,
          configuration, integration, testing, deployment, and ongoing
          maintenance. The 7-phase delivery process is designed for
          non-technical founders. You fill out an intake form, have a
          consultation, review progress, and use the finished system. You
          don&apos;t write code, manage servers, or debug integrations.
        </p>
        <p className="mt-3">
          You use the system. We build and maintain it. That&apos;s the whole
          point of done-for-you — zero technical burden on your end.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="is-ai-automation-safe-for-sensitive-business-data"
        question="19. Is AI automation safe for sensitive business data?"
      >
        <p>
          Yes. Your data stays on your infrastructure, not in a third-party
          database. The API layer does not train on your data. Unlike consumer
          AI apps where your inputs may feed training models, our architecture
          keeps your business information private and under your control.
        </p>
        <p className="mt-3">
          You own everything — data, context, automations, and outputs. If the
          engagement ends, all of it stays with you.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="will-ai-replace-my-team"
        question="20. Will AI replace my team?"
      >
        <p>
          No. An AIOS augments your team, not replaces them. The system targets
          60-70% automation of recurring operational tasks — the admin,
          reporting, scheduling, and data work that eats bandwidth. Your team
          gets those hours back for higher-value work: strategy, relationships,
          creative problem-solving.
        </p>
        <p className="mt-3">
          Revenue per person goes up. But headcount decisions are yours. Most
          founders we work with don&apos;t cut team members — they redeploy them
          to the work that was always waiting.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="can-ai-automate-my-entire-business"
        question="21. Can AI automate my entire business?"
      >
        <p>
          Not entirely — and that&apos;s by design. The AIOS methodology targets
          60-70% automation of recurring operational tasks. The remaining 30-40%
          stays manual because it requires human judgment: relationship
          decisions, creative direction, strategic pivots, sensitive
          conversations.
        </p>
        <p className="mt-3">
          The goal isn&apos;t to remove you from the business. It&apos;s to
          remove the business from consuming you. When 60-70% of the maintenance
          work runs autonomously, you get the{" "}
          <Link
            href={RouteNames.Solution}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            bandwidth inversion
          </Link>{" "}
          — from 80% maintenance / 20% growth to 20-30% maintenance / 70-80%
          growth. The manual category also shrinks over time as the system
          learns and refines its capabilities.
        </p>
        <p className="mt-3">
          Full automation isn&apos;t the target. Full bandwidth is.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="is-ai-automation-better-than-hiring"
        question="22. Is AI automation better than hiring?"
      >
        <p>
          Different problem, different answer. Hiring adds capacity by adding
          people. An AIOS adds capacity by amplifying the people you already
          have.
        </p>
        <p className="mt-3">
          A new hire needs onboarding, management, and months to reach full
          productivity. An AIOS deploys in{" "}
          <Link
            href={RouteNames.HowItWorks}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            one to three weeks
          </Link>
          , runs around the clock, and compounds — every task it handles teaches
          it to handle the next one better. It doesn&apos;t take sick days,
          doesn&apos;t need supervision, and doesn&apos;t walk out the door with
          institutional knowledge.
        </p>
        <p className="mt-3">
          That said, an AIOS doesn&apos;t replace the work that requires human
          presence — client relationships, creative judgment, leadership. Most
          founders we work with don&apos;t cut team members after AIOS
          deployment. They redeploy them to the higher-value work that was
          always waiting. Revenue per person goes up. The team gets more done,
          not less to do.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="what-industries-benefit-most-from-ai-automation"
        question="23. What industries benefit most from AI automation?"
      >
        <p>
          Any industry where the founder is buried in recurring operational
          tasks — which is most of them. We&apos;ve seen AIOS infrastructure
          deployed across agencies, coaching businesses, ecommerce, SaaS,
          professional services, and creative businesses. See{" "}
          <Link
            href={RouteNames.UseCases}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            use cases
          </Link>{" "}
          for concrete workflow examples.
        </p>
        <p className="mt-3">
          The common thread isn&apos;t the industry. It&apos;s the pattern: a
          founder or small team spending most of their time on maintenance
          instead of growth. If your business runs on repeatable processes —
          lead generation, client onboarding, content production, data
          reporting, task management — those processes can be automated or
          heavily augmented.
        </p>
        <p className="mt-3">
          The industries that benefit most tend to share three traits: high
          volume of recurring tasks, multiple data platforms that don&apos;t
          talk to each other, and a founder whose time is the primary
          bottleneck.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="what-is-ai-automation"
        question="24. What is AI automation?"
      >
        <p>
          AI automation is the use of artificial intelligence to handle
          recurring business tasks — lead generation, content production, client
          onboarding, data reporting, scheduling, follow-ups — without manual
          intervention. Unlike traditional automation (like Zapier or Make),
          which connects apps with rigid if-then rules, AI automation can
          interpret context, make decisions, and produce creative output. At
          AAA,{" "}
          <Link
            href={RouteNames.HowItWorks}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            AI Automation
          </Link>{" "}
          is also our focused service tier: a single workflow automation for a
          specific bottleneck, typically scoped and delivered in about one week.
        </p>
      </FaqAccordionItem>

      <FaqAccordionItem
        id="what-is-the-agent-to-agent-economy"
        question="25. What is the agent-to-agent economy?"
      >
        <p>
          The agent-to-agent economy is the emerging economic model where AI
          agents transact with other AI agents on behalf of businesses —
          handling vendor interactions, procurement decisions, scheduling, and
          routine negotiations autonomously. Instead of a founder managing every
          touchpoint manually, their AI agent communicates directly with
          suppliers&apos;, partners&apos;, and clients&apos; AI agents. This
          shift is already underway: Gartner predicts that by 2028, 33% of
          enterprise software applications will include agentic AI, up from less
          than 1% in 2024 (Gartner, 2024). The businesses with{" "}
          <Link
            href={RouteNames.Solution}
            className="text-brand-teal underline underline-offset-2 transition-colors"
          >
            AIOS infrastructure
          </Link>{" "}
          will be ready. The ones still running on manual processes won&apos;t.
        </p>
      </FaqAccordionItem>
    </FaqAccordion>
  );
}
