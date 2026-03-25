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
  headline: "The ROI of AI Automation: Bandwidth Math for Founders",
  description: "80% of your week goes to maintenance. An AIOS inverts that to 20-30%. Do the math on what recovered bandwidth means for your specific business.",
  author: AUTHOR_SCHEMA,
  publisher: PUBLISHER_SCHEMA,
  datePublished: "2026-01-01",
  dateModified: "2026-03-09",
  image: `${SITE_URL}/og-default.png`,
  mainEntityOfPage: `${SITE_URL}/value`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Value", item: `${SITE_URL}/value` },
  ],
};

export function ValueView() {
  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-brand-teal tablet:text-4xl">
          The ROI of AI Automation: Bandwidth Math for Founders
        </h1>

        <KeyTakeaway>
          The most expensive problem in most small businesses never shows up on a
          financial statement. It&apos;s the founder trapped in operations —
          unable to pursue the growth work that actually moves the needle. The
          AIOS doesn&apos;t promise a specific dollar return. It gives you a
          framework to see what your current bandwidth split is actually costing
          you, and what changes when the math flips.
        </KeyTakeaway>

        <h2 id="the-cost-of-staying-stuck" className="mt-12 text-2xl font-bold text-brand-teal">
          The Expense You Can&apos;t See
        </h2>

        <p className="mt-4 text-brand-teal/80">
          There&apos;s no line item on your P&amp;L for &ldquo;founder stuck in
          operations.&rdquo;
        </p>
        <p className="mt-4 text-brand-teal/80">
          But it&apos;s probably the most expensive thing in your business.
        </p>
        <p className="mt-4 text-brand-teal/80">
          Every hour you spend on admin, firefighting, platform-checking, and
          manual follow-ups is an hour you didn&apos;t spend on growth. New
          channels. New products. New markets. The stuff that actually generates
          revenue.
        </p>
        <p className="mt-4 text-brand-teal/80">
          The{" "}
          <Link href={RouteNames.Problem} className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
            Operator Trap
          </Link>{" "}
          doesn&apos;t look like a cost because it doesn&apos;t hit a budget. It
          looks like a full calendar. It feels like working hard. But the result
          is the same: growth stalls. Not because you lack ambition — because you
          have zero bandwidth left to deploy.
        </p>
        <p className="mt-4 text-brand-teal/80">
          That&apos;s the cost of staying stuck. And it compounds every week you
          don&apos;t address it.
        </p>

        <h2 id="the-bandwidth-math" className="mt-12 text-2xl font-bold text-brand-teal">
          The Bandwidth Math
        </h2>

        <p className="mt-4 text-brand-teal/80">
          Here&apos;s the split we see in almost every small business we talk to:
        </p>
        <p className="mt-4 text-brand-teal/80">
          <strong>Before:</strong> 80% of your working hours go to keeping the
          business running. 20% go to growing it.
        </p>
        <p className="mt-4 text-brand-teal/80">
          <strong>After the{" "}
            <Link href={RouteNames.Solution} className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
              bandwidth inversion
            </Link>
            :
          </strong>{" "}
          20-30% maintenance. 70-80% growth.
        </p>
        <p className="mt-4 text-brand-teal/80">Let&apos;s make that real.</p>
        <p className="mt-4 text-brand-teal/80">
          Say you work 50 hours a week. At the 80/20 split, that&apos;s 40 hours
          on maintenance and 10 on growth. After the inversion, it&apos;s 10-15
          hours on maintenance and 35-40 on growth.
        </p>
        <p className="mt-4 text-brand-teal/80">
          That&apos;s 25-30 hours per week redirected from keeping the lights on
          to building something new.
        </p>
        <p className="mt-4 text-brand-teal/80">
          Over a year, that&apos;s 1,250 to 1,500 hours. Not saved —
          redirected. From the work that keeps you stuck to the work that moves
          you forward.
        </p>

        <h2 id="the-time-savings" className="mt-12 text-2xl font-bold text-brand-teal">
          What Those Hours Are Worth
        </h2>

        <p className="mt-4 text-brand-teal/80">
          We&apos;re not going to fill in a dollar number for you. You know what
          your time is worth better than we do.
        </p>
        <p className="mt-4 text-brand-teal/80">But here&apos;s the simple math:</p>
        <p className="mt-4 font-semibold text-brand-teal">
          Hours recovered per week x what an hour of your growth work is
          worth = weekly value of the shift.
        </p>
        <p className="mt-4 text-brand-teal/80">
          If you recover 25 hours a week and your growth work is worth $100/hour
          to the business, that&apos;s $2,500 per week in redirected capacity.
          $125,000 per year.
        </p>
        <p className="mt-4 text-brand-teal/80">
          If your number is $50/hour, it&apos;s $62,500. If it&apos;s
          $200/hour, it&apos;s $250,000.
        </p>
        <p className="mt-4 text-brand-teal/80">
          We don&apos;t need to tell you the answer. You already know your
          number. The question is whether you&apos;re currently spending those
          hours on work that earns it — or on work that just keeps the operation
          from falling behind.
        </p>

        <h2 id="the-compound-effect" className="mt-12 text-2xl font-bold text-brand-teal">
          The Compound Effect
        </h2>

        <p className="mt-4 text-brand-teal/80">
          This is where the math separates the AIOS from any single tool, hire,
          or consultant.
        </p>
        <p className="mt-4 text-brand-teal/80">
          <strong>Month 1:</strong> The system is deployed. First automations are
          running. Your{" "}
          <Link href={RouteNames.UseCases} className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
            Morning Brief
          </Link>{" "}
          replaces two to three hours of daily platform-checking. Lead follow-ups
          run without you. The bandwidth shift is already visible.
        </p>
        <p className="mt-4 text-brand-teal/80">
          <strong>Month 3:</strong> Sixty to seventy percent of your recurring
          tasks are automated or augmented. The bandwidth inversion is taking
          hold. You&apos;re spending most of your week on growth work for the
          first time in years.
        </p>
        <p className="mt-4 text-brand-teal/80">
          <strong>Month 6:</strong> The system knows your business deeply. Output
          quality is consistently around ninety percent — because the AI has full
          business context, not a blank session. Every decision logged. Every
          workflow refined from feedback.
        </p>
        <p className="mt-4 text-brand-teal/80">
          <strong>Month 12:</strong> You have institutional memory that
          can&apos;t walk out the door. The system running your business is
          fundamentally more capable than the one we deployed on day one. It
          learned your patterns, your priorities, your preferences. And you
          didn&apos;t have to build any of it yourself.
        </p>
        <p className="mt-4 text-brand-teal/80">
          A contractor or employee costs the same in month twelve as month one.
          The AIOS gets better while costing the same. That&apos;s the difference
          between a recurring expense and a compounding asset.
        </p>

        <h2 id="three-things-we-measure" className="mt-12 text-2xl font-bold text-brand-teal">
          Three Things We Measure
        </h2>

        <p className="mt-4 text-brand-teal/80">
          We track three KPIs for every client. If these numbers aren&apos;t
          moving, we haven&apos;t done our job.
        </p>

        <h3 className="mt-6 font-semibold text-brand-teal">Away-from-Desk Autonomy</h3>
        <p className="mt-3 text-brand-teal/80">
          Can you take a full day away from your laptop and the business keeps
          running? Can you handle a request from a music festival, a car, a walk
          in the park — without rushing back to a desk? That&apos;s operational
          independence. It has a value, and you can feel it the first time it
          happens.
        </p>

        <h3 className="mt-6 font-semibold text-brand-teal">Task Automation Percentage</h3>
        <p className="mt-3 text-brand-teal/80">
          What percentage of your recurring operational work is handled by the
          system? Our target is sixty to seventy percent — automated or heavily
          augmented. Every task the system handles is bandwidth you never lose
          again. It doesn&apos;t take sick days. It doesn&apos;t forget. It
          compounds.
        </p>

        <h3 className="mt-6 font-semibold text-brand-teal">Revenue per Person</h3>
        <p className="mt-3 text-brand-teal/80">
          Same team. More output. The system multiplies what your people can do
          without adding headcount. In a market where margins are compressing and
          competitors are moving faster, revenue per person is the number that
          tells you whether your business is getting more capable — or just
          getting busier.
        </p>

        <section className="mt-12">
          <h3 className="font-semibold text-brand-teal">What This Looks Like in Practice</h3>
          <p className="mt-4 text-brand-teal/80">
            These are the kinds of time savings AIOS infrastructure is designed
            to deliver:
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2 text-brand-teal/80">
            <li>
              A{" "}
              <Link href={RouteNames.UseCases} className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Morning Brief
              </Link>{" "}
              that replaced <strong>2-3 hours of daily platform-checking</strong>{" "}
              — delivered before breakfast
            </li>
            <li>
              A{" "}
              <Link href={RouteNames.UseCases} className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Lead Pipeline
              </Link>{" "}
              that reduced <strong>15-20 hours per week</strong> of manual prospecting to zero
            </li>
            <li>
              <Link href={RouteNames.UseCases} className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors">
                Data Dashboards
              </Link>{" "}
              that eliminated{" "}
              <strong>30-45 minutes of daily context-switching</strong> across
              seven platforms
            </li>
          </ul>
          <p className="mt-4 text-brand-teal/80">
            None of these required the founder to become technical. None of them
            took months to deploy. And all of them compound — because the system
            gets smarter with every day of use.
          </p>
        </section>

        <section className="mt-12">
          <h3 className="font-semibold text-brand-teal">The Real Question</h3>
          <p className="mt-4 text-brand-teal/80">
            This page isn&apos;t here to convince you that AI automation has
            value. You already know that — it&apos;s why you&apos;re reading
            this.
          </p>
          <p className="mt-4 text-brand-teal/80">
            The real question is simpler: What would you do with 25 extra hours a
            week?
          </p>
          <p className="mt-4 text-brand-teal/80">
            Build the product you&apos;ve been putting off. Open the channel
            you&apos;ve been researching. Take a Wednesday off without checking
            Slack every ten minutes. Focus — like a laser beam — on the one thing
            that actually moves your business forward.
          </p>
          <p className="mt-4 text-brand-teal/80">
            That&apos;s what the bandwidth inversion gives you. Not a promise of
            revenue. Not a guarantee of growth. The capacity to pursue it.
          </p>
        </section>

        <section className="mt-12">
          <h3 className="text-brand-teal font-semibold">Important Context</h3>
          <p className="mt-4 text-sm text-brand-teal/80">
            The numbers on this page are illustrative — designed to help you
            think through your own math, not to promise a specific outcome.
            Actual results depend on your business model, operational complexity,
            team structure, and data readiness. We don&apos;t guarantee specific
            revenue outcomes. We measure away-from-desk autonomy, task automation
            percentage, and revenue per person — and we set realistic
            expectations during the free consultation before any work begins.
          </p>
        </section>

        <div className="mt-12">
          <RelatedLinks
            links={[
              { label: "The cost of the Operator Trap", href: RouteNames.Problem },
              { label: "How the system works", href: RouteNames.Solution },
              { label: "See it in action", href: RouteNames.UseCases },
              { label: "How we build it", href: RouteNames.HowItWorks },
            ]}
          />
        </div>
      </article>

      <PageCTA />
    </>
  );
}
