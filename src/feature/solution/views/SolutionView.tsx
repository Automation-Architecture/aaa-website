import Link from "next/link";
import { JsonLd } from "@/components/common/JsonLd";
import { PageCTA } from "@/components/common/PageCTA";
import { KeyTakeaway } from "@/components/common/KeyTakeaway";
import { QuotableStatement } from "@/components/common/QuotableStatement";
import { RelatedLinks } from "@/components/common/RelatedLinks";
import { RouteNames } from "@/constants";
import { articleSchema, serviceSchema, breadcrumbSchema } from "@/feature/solution/data";

export function SolutionView() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-brand-teal tablet:text-4xl">
          AIOS: The AI Operating System Built Around Your Business
        </h1>

        <KeyTakeaway>
          An AIOS (AI Operating System) is an autonomous infrastructure layer
          built on three pillars — the Business Context Data Engine, Dashboard
          Intelligence, and Automated Task Management. Together, they invert the
          founder&rsquo;s time ratio from 80% maintenance / 20% growth to
          20-30% maintenance / 70-80% growth. The system compounds in value over
          time, becoming an appreciating business asset rather than a recurring
          cost.
        </KeyTakeaway>

        <section id="section-what-an-aios-actually-is" className="mt-12">
          <h2 id="what-an-aios-actually-is" className="text-2xl font-bold text-brand-teal">
            What an AIOS Actually Is
          </h2>
          <p className="mt-6 text-brand-teal/80">
            An AIOS (AI Operating System) is an autonomous infrastructure layer
            that wraps around an entire business — operations, data,
            intelligence, and communications — and runs whether the founder is
            at their desk or not.
          </p>
          <p className="mt-4 text-brand-teal/80">
            It&rsquo;s not a tool you open. It&rsquo;s infrastructure that runs.
            It knows your business the way a co-founder would — your team, your
            products, your financials, your priorities — and it acts on that
            knowledge every day.
          </p>
          <p className="mt-4 text-brand-teal/80">
            That&rsquo;s the system we build. Three layers, configured around
            your operations. Each one reinforces the others — context makes the
            intelligence useful, intelligence makes the automation smart,
            automation feeds data back into the context layer. The result is a
            system that gets better the more you use it.
          </p>
        </section>

        <section id="section-pillar-1" className="mt-12">
          <h2 id="pillar-1-business-context-data-engine" className="text-2xl font-bold text-brand-teal">
            Pillar 1: Business Context Data Engine
          </h2>
          <p className="mt-2 text-lg font-semibold text-brand-lime">
            Your AI knows your business — fully.
          </p>
          <p className="mt-6 text-brand-teal/80">
            The Business Context Data Engine is a structured knowledge layer
            that gives AI complete understanding of a specific business — team,
            products, financials, priorities, and decision history. It&rsquo;s
            the foundation everything else runs on. Without it, AI loses track
            of what it&rsquo;s built, performance degrades, and you hit the same
            wall every chatbot user hits.
          </p>
          <p className="mt-4 text-brand-teal/80">
            The Business Context Data Engine gives your AIOS the complete
            picture:
          </p>
          <div className="mt-4 rounded-lg bg-brand-teal/5 p-4 font-mono text-sm text-brand-teal">
            <p>me.md &mdash; Your identity, background, communication style</p>
            <p>work.md &mdash; Business model, products, revenue</p>
            <p>team.md &mdash; Every key person, role, responsibilities</p>
            <p>priorities.md &mdash; What&rsquo;s urgent right now</p>
            <p>goals.md &mdash; Annual and quarterly targets</p>
            <p>decisions/log &mdash; Every major decision with reasoning</p>
            <p>projects/[name] &mdash; Individual folders per active project</p>
          </div>
          <p className="mt-4 text-brand-teal/80">
            Plus connected data sources — Stripe, Google Analytics, CRM,
            marketing platforms — consolidated into one place your AI can query.
          </p>
          <p className="mt-4 text-brand-teal/80">
            This is why chatbots get you fifty percent of the way there. The
            AIOS methodology is designed to push output quality to ninety
            percent once full business context is in place — where
            &ldquo;output quality&rdquo; means the percentage of AI-generated
            deliverables a founder can use with minimal editing. Databricks
            research backs this up: even the best LLMs top out at roughly 80%
            accuracy on standard benchmarks, but structured, domain-specific
            context is the single largest lever for closing the gap (Leng et
            al., 2024). The difference is context. Context isn&rsquo;t optional
            — it&rsquo;s the foundation.
          </p>
        </section>

        <section id="section-pillar-2" className="mt-12">
          <h2 id="pillar-2-dashboard-intelligence" className="text-2xl font-bold text-brand-teal">
            Pillar 2: Dashboard Intelligence
          </h2>
          <p className="mt-2 text-lg font-semibold text-brand-lime">
            The most informed person in your organization. Before 8am.
          </p>
          <p className="mt-6 text-brand-teal/80">
            Dashboard Intelligence is an AI-powered daily briefing system that
            synthesizes data from every connected business platform into a
            single morning report. Every morning, that brief arrives before
            you&rsquo;ve opened your laptop. It synthesizes everything happening
            across your business:
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-brand-teal/80">
            <li>Revenue changes and anomalies</li>
            <li>Summaries of every call and meeting — including ones you didn&rsquo;t attend</li>
            <li>Team updates and key decisions</li>
            <li>Content performance</li>
            <li>A SWOT analysis across the entire business</li>
            <li>Emerging opportunities and signals</li>
          </ul>
          <p className="mt-4 text-brand-teal/80">
            One read. Before breakfast. Replaces logging into seven platforms
            and sitting in every call.
          </p>
          <p className="mt-4 text-brand-teal/80">
            The system can analyze 74 calls overnight across multiple business
            streams — summarized into one brief with a deeper PDF analysis
            attached.
          </p>
          <p className="mt-4 text-brand-teal/80">
            You check the health of your business the same way you&rsquo;d
            check a weather app. One glance.
          </p>
        </section>

        <section id="section-pillar-3" className="mt-12">
          <h2 id="pillar-3-automated-task-management" className="text-2xl font-bold text-brand-teal">
            Pillar 3: Automated Task Management
          </h2>
          <p className="mt-2 text-lg font-semibold text-brand-lime">
            Sixty to seventy percent of your recurring tasks. Handled.
          </p>
          <p className="mt-6 text-brand-teal/80">
            Automated Task Management is an AI-driven system that audits every
            recurring business task and categorizes each as automate, augment,
            or manual — with an AIOS methodology target of 60-70% automation,
            consistent with McKinsey&rsquo;s estimate that generative AI can
            transform 60-70% of the time people spend working (McKinsey, 2023).
            This is where the Operator Trap breaks.
          </p>
          <p className="mt-4 text-brand-teal/80">We categorize each task:</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-brand-teal/80">
            <li><strong>Automate</strong> — Simple, rule-based tasks the AI handles fully. Hands-off.</li>
            <li><strong>Augment</strong> — Complex or creative tasks where AI does the heavy lift and you review. Minutes instead of hours.</li>
            <li><strong>Manual</strong> — Still requires you. These shrink over time as the system learns.</li>
          </ul>
          <p className="mt-4 text-brand-teal/80">
            The target: sixty to seventy percent of your operational workload,
            automated or heavily augmented. Every task you wrap in automation is
            bandwidth you never lose again. It compounds.
          </p>
          <p className="mt-4 text-brand-teal/80">
            A real example: a discovery call transcript goes in. The AI produces
            a completed scoping and proposal deck. The founder reviews and
            sends. What used to take hours takes minutes.
          </p>
        </section>

        <section id="section-the-outcome" className="mt-12">
          <h2 id="the-outcome" className="text-2xl font-bold text-brand-teal">
            The Outcome
          </h2>
          <p className="mt-6 text-brand-teal/80">
            When the three pillars are running together, the math changes.
          </p>
          <p className="mt-4 text-brand-teal/80">
            <strong>Before:</strong> 80% of your time IN the business. 20% ON the business.
          </p>
          <p className="mt-2 text-brand-teal/80">
            <strong>After:</strong> 20-30% IN the business. 70-80% ON the business.
          </p>
          <p className="mt-4 text-brand-teal/80">
            That&rsquo;s the bandwidth inversion. The maintenance load that
            consumed your days — the emails, the check-ins, the
            platform-hopping, the manual tasks — shrinks until it&rsquo;s the
            minority of your time, not the majority.
          </p>
          <p className="mt-4 text-brand-teal/80">
            That freed bandwidth is yours. Pour it into growth — new channels,
            new products, new markets. Or step back and run the business from
            your phone. Or both. The founders who make this shift describe it
            the same way: like pointing a laser beam at the things that actually
            matter.
          </p>
          <p className="mt-4 text-brand-teal/80">
            We measure three things for every client: away-from-desk autonomy,
            task automation percentage, and revenue per person. If those numbers
            aren&rsquo;t moving, we haven&rsquo;t done our job.
          </p>
        </section>

        <section id="section-compound-intelligence" className="mt-12">
          <h2 id="compound-intelligence" className="text-2xl font-bold text-brand-teal">
            Compound Intelligence
          </h2>
          <p className="mt-6 text-brand-teal/80">
            Compound Intelligence is the principle that an AIOS accumulates
            knowledge over time — every decision logged, every skill refined —
            becoming an appreciating asset rather than a recurring cost. Unlike
            chatbots, which are stateless and start from zero every session, an
            AIOS builds on everything it learns.
          </p>
          <p className="mt-4 text-brand-teal/80">
            Every research report saved. Every decision logged. Every skill
            refined from feedback. Every automation tuned. After a month of
            daily use, the system knows the business deeply. After a year,
            it&rsquo;s institutional memory that can&rsquo;t walk out the door.
          </p>
          <QuotableStatement text="This isn't a subscription you pay for. It's an asset you build.">
            <p className="text-brand-teal/80">
              This isn&rsquo;t a subscription you pay for. It&rsquo;s an asset
              you build. The longer it runs, the more valuable it becomes.
              Context compounds. Every module makes every other module smarter.
              A year from now, the system running your business will be
              fundamentally more capable than the one we deploy on day one — and
              you didn&rsquo;t have to build any of it yourself.
            </p>
          </QuotableStatement>
        </section>

        <section id="section-scope-and-expectations" className="mt-12">
          <h3 id="scope-and-expectations" className="text-xl font-bold text-brand-teal">
            Scope and Expectations
          </h3>
          <p className="mt-4 text-brand-teal/80">
            The bandwidth inversion targets described above (80/20 &rarr;
            20-30/70-80) represent the design goal of the AIOS methodology, not
            a guaranteed outcome for every business. Results depend on
            operational complexity, data readiness, team structure, and how
            deeply the system is adopted. We assess fit during the free
            consultation and set realistic expectations before any engagement
            begins. For what we don&rsquo;t do, see{" "}
            <Link href={RouteNames.About} className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
              our philosophy page
            </Link>
            .
          </p>
        </section>

        <div className="mt-12">
          <RelatedLinks
            links={[
              { label: "How it's built →", href: RouteNames.HowItWorks },
              { label: "Real outcomes →", href: RouteNames.UseCases },
              { label: "The philosophy behind it →", href: RouteNames.About },
              { label: "Common questions →", href: RouteNames.FAQ },
            ]}
          />
        </div>
      </article>

      <PageCTA />
    </>
  );
}
