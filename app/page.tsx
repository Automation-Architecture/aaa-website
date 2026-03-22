import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { QuotableStatement } from "@/components/QuotableStatement";
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
    siteName: "Automation Architecture AI",
    locale: "en_US",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
};

interface UseCaseCard {
  title: string;
  outcome: string;
  body: string;
  icon: string;
}

const useCaseCards: UseCaseCard[] = [
  {
    title: "The Morning Brief",
    outcome: "74 calls analyzed overnight. One brief by 7am.",
    body: "Because the system knows the business fully — team, revenue, priorities, every active project — it can synthesize 74 calls across multiple streams into one brief that actually makes sense. Complete with a SWOT review. The founder becomes the most informed person in the organization before breakfast.",
    icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
  },
  {
    title: "Lead Pipeline — Built in One Week",
    outcome: "15 hours a week on lead gen. Then zero.",
    body: "A service business owner spending 15 hours a week on research, outreach, and follow-ups. With an AIOS, the entire flow is automated in one week: scoring, drafting, nurturing, and project handoff with full context intact. That bandwidth goes straight back into client delivery.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
  },
  {
    title: "Landing Page From a Phone",
    outcome: "Voice note in. Live page out. Before he got home.",
    body: "A founder needs a lead magnet page for a YouTube video. He opens Telegram from his car, explains what he needs via voice note. The system matches his site's design and copy, builds the page, and deploys it — all before he pulls into the driveway.",
    icon: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
  },
  {
    title: "Content Pipeline",
    outcome: "Idea to publish-ready — from a voice note.",
    body: "A founder captures a content idea via Telegram while walking. The system pulls the last 7 days of content context, aligns to brand positioning, and produces a LinkedIn post in his voice plus a 7-slide carousel — saved to the project folder, ready to publish.",
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
  },
];

const checklist = [
  "Calendar blocks set, priorities ranked, conflicts flagged.",
  "A LinkedIn post sits in your drafts, written in your voice.",
  "Your team pulse check is done — status vs. goals, two follow-ups flagged.",
  "A finished PNG diagram you needed for a client deck? Sitting in your project folder.",
];

function CheckCircleIcon() {
  return (
    <svg
      className="w-7 h-7 shrink-0 mt-0.5"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="#004D43" />
      <path
        d="M7 12.5l3 3 7-7"
        stroke="white"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ─── Hero ─── */}
      <section className="px-4 tablet:px-6 pt-6">
        <div className="bg-brand-lime rounded-2xl px-8 py-16 tablet:px-16 tablet:py-24 desktop:py-32">
          <h1 className="hero-headline uppercase text-brand-black max-w-5xl">
            How to prepare your business for the agent-to-agent economy
          </h1>
          <p className="mt-6 text-brand-black/70 max-w-3xl text-lg">
            Automation Architecture AI builds AI operating system infrastructure
            for small businesses and startups — a done-for-you system that
            handles operations so founders can focus on growth. We serve the
            founder who wants the result without becoming the engineer.
          </p>
        </div>
      </section>

      {/* ─── Scene (Block2) ─── */}
      <section className="bg-brand-black text-brand-cream mt-6">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-16 tablet:py-24">
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 items-start">
            {/* Left — intro text + device mockup */}
            <div>
              <div className="flex items-center gap-2 text-sm">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-lime" />
                <span className="text-brand-lime font-medium uppercase tracking-wider text-xs">
                  Morning 7:02am
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-brand-lime" />
                <span className="text-brand-cream/70">
                  You haven&rsquo;t opened your laptop
                </span>
              </div>
              <div className="mt-8">
                <Image
                  src="/images/device-mockup.png"
                  alt="Laptop and phone showing AIOS dashboard"
                  width={520}
                  height={360}
                  className="w-full max-w-md"
                  priority
                />
              </div>
            </div>

            {/* Right — checklist card + lime tags */}
            <div>
              <div className="flex gap-4 items-start">
                <div className="bg-brand-white rounded-xl p-6 text-brand-black flex-1">
                  <p className="font-bold uppercase text-sm tracking-wide mb-4">
                    Four things happened while you slept. Your day is planned:
                  </p>
                  <ul className="space-y-3">
                    {checklist.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded bg-brand-lime flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                          <svg className="w-3.5 h-3.5 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden desktop:flex flex-col gap-2 shrink-0 pt-4">
                  <span className="rounded-full bg-brand-lime px-4 py-1.5 text-sm font-semibold text-brand-black whitespace-nowrap">
                    Ninety seconds
                  </span>
                  <span className="rounded-full bg-brand-lime px-4 py-1.5 text-sm font-semibold text-brand-black whitespace-nowrap">
                    Before breakfast
                  </span>
                </div>
              </div>
              <div className="desktop:hidden mt-4 text-right">
                <p className="text-brand-lime text-lg font-semibold">
                  Ninety seconds
                </p>
                <p className="text-brand-lime text-lg font-semibold">
                  Before breakfast
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 text-sm text-brand-cream/60 max-w-md">
            That&rsquo;s not a pitch.
            <br />
            That&rsquo;s a Tuesday — when your business runs on the right
            infrastructure.
          </p>
        </div>
      </section>

      {/* ─── The Gap (split) ─── */}
      <section className="grid grid-cols-1 desktop:grid-cols-2">
        <div className="bg-brand-black text-brand-cream px-8 tablet:px-16 py-16 tablet:py-24 flex items-center">
          <h2 className="uppercase">
            Now think about your actual morning
          </h2>
        </div>
        <div className="bg-brand-cream text-brand-black px-8 tablet:px-16 py-16 tablet:py-24 flex items-center">
          <div className="space-y-2">
            <p className="text-xl tablet:text-2xl desktop:text-3xl font-light uppercase">
              How many tabs?
            </p>
            <p className="text-xl tablet:text-2xl desktop:text-3xl font-light uppercase">
              How many logins?
            </p>
            <p className="text-xl tablet:text-2xl desktop:text-3xl font-light uppercase">
              How long before you get to the work that actually matters?
            </p>
          </div>
        </div>
      </section>

      {/* ─── Problem / CTA ─── */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-16 tablet:py-24">
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 items-center">
            {/* Left — agent network illustration */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/agent-network.svg"
                alt="Connected AI agents forming a network"
                width={480}
                height={440}
                className="w-full max-w-md"
              />
            </div>

            {/* Right — text */}
            <div>
              <p className="text-lg">
                The agent-to-agent economy — where AI agents transact,
                negotiate, and operate on behalf of businesses — is arriving
                faster than most founders realize.
              </p>
              <p className="mt-6">
                The gap between where you are and where you could be isn&rsquo;t
                about effort. You&rsquo;re already working hard enough.
                It&rsquo;s about architecture — the system underneath everything
                else. The infrastructure that turns raw AI capability into daily
                business results.
              </p>
              <p className="mt-6">
                Your competitors haven&rsquo;t started building theirs yet. That
                gap is your advantage. In 12 months, this conversation will be
                obvious. Right now, it&rsquo;s still early — but the window
                won&rsquo;t stay open.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <TrackedLink
                  id="hero-cta"
                  href="/blueprint"
                  event="cta_click"
                  eventParams={{ cta_location: "hero" }}
                  className="inline-block rounded-[10px] bg-brand-lime px-8 py-3.5 font-bold text-brand-black hover:bg-brand-cream transition-colors uppercase tracking-wide text-lg"
                >
                  Get Your Free AI Blueprint
                </TrackedLink>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center rounded-[10px] border border-brand-black px-8 py-3.5 font-bold text-brand-black hover:bg-brand-lime hover:border-brand-lime transition-colors text-lg uppercase tracking-wide"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Operator Trap ─── */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-16 tablet:py-24">
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12">
            {/* Left — quote + text */}
            <div>
              <p className="text-lg font-semibold">
                &ldquo;I need to get focused. AI is changing so rapidly that I
                feel overwhelmed and catch myself chasing the next shiny
                object.&rdquo;
              </p>
              <p className="mt-8 text-sm text-brand-gray font-semibold">
                There&rsquo;s a name for what you&rsquo;re feeling:
              </p>
              <h3 className="mt-2 font-bold">The Operator Trap</h3>
              <p className="mt-4 text-brand-gray font-semibold">
                Eighty percent of your bandwidth goes to keeping the business
                running — admin, meetings, scheduling, putting out fires. That
                leaves maybe twenty percent for the work that actually grows the
                business.
              </p>
            </div>

            {/* Right — tools + text */}
            <div>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {/* ChatGPT */}
                <div className="text-center">
                  <p className="text-sm font-semibold">You&rsquo;ve tried ChatGPT</p>
                  <div className="mt-3 mx-auto w-14 h-14 bg-brand-gray/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-teal/60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                    </svg>
                  </div>
                </div>
                {/* Zapier */}
                <div className="text-center">
                  <p className="text-sm font-semibold">You&rsquo;ve tried Zapier</p>
                  <div className="mt-3 mx-auto w-14 h-14 bg-brand-gray/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-teal/60" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M15.557 12.004a4.737 4.737 0 0 1-.327 1.553h-3.226v3.226a4.737 4.737 0 0 1-1.553.327 4.737 4.737 0 0 1-1.554-.327v-3.226H5.671a4.737 4.737 0 0 1-.327-1.553c0-.54.117-1.063.327-1.554h3.226V7.224A4.737 4.737 0 0 1 10.45 6.897c.54 0 1.064.117 1.554.327v3.226h3.226c.21.491.327 1.014.327 1.554zM21.1 10.45h-4.96l3.507-3.507a10.222 10.222 0 0 0-1.69-2.003 9.387 9.387 0 0 0-1.993-1.68L12.457 6.767V1.807A10.9 10.9 0 0 0 10.45 1.6c-.705 0-1.38.076-2.007.207v4.96L4.936 3.26a10.222 10.222 0 0 0-2.003 1.69 9.387 9.387 0 0 0-1.68 1.993l3.507 3.507H-.2c-.131.627-.207 1.302-.207 2.007 0 .705.076 1.38.207 2.007h4.96L1.253 17.97a10.222 10.222 0 0 0 1.69 2.003 9.387 9.387 0 0 0 1.993 1.68l3.507-3.507v4.96c.627.131 1.302.207 2.007.207.705 0 1.38-.076 2.007-.207v-4.96l3.507 3.507a10.222 10.222 0 0 0 2.003-1.69 9.387 9.387 0 0 0 1.68-1.993l-3.507-3.507h4.96c.131-.627.207-1.302.207-2.007 0-.705-.076-1.38-.207-2.007z"/>
                    </svg>
                  </div>
                </div>
                {/* Browser Extensions */}
                <div className="text-center">
                  <p className="text-sm font-semibold">You&rsquo;ve tried a dozen browser extensions</p>
                  <div className="mt-3 mx-auto w-14 h-14 bg-brand-gray/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-teal/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="3"/>
                      <path d="M3 8h18"/>
                      <circle cx="6" cy="5.5" r="1" fill="currentColor" stroke="none"/>
                      <circle cx="9" cy="5.5" r="1" fill="currentColor" stroke="none"/>
                      <path d="M14 13.5a2.5 2.5 0 0 1 0-5v0a2 2 0 0 1 2 2h1.5a2 2 0 0 1 0 4H16a2 2 0 0 1-2-2v0" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <QuotableStatement text="You've tried ChatGPT. You've tried Zapier. The instinct was right — the infrastructure wasn't.">
                <p>
                  You&rsquo;ve tried ChatGPT. You&rsquo;ve tried Zapier. The
                  instinct was right — the infrastructure wasn&rsquo;t.
                </p>
              </QuotableStatement>
              <p className="mt-4">
                Over 46,700 AI tools exist today (per theresanaiforthat.com),
                and none of them talk to each other. Tools without architecture
                don&rsquo;t compound. They accumulate.
              </p>
              <div className="mt-8">
                <Link
                  href="/problem"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-brand-teal px-6 py-3.5 text-lg font-bold text-brand-white uppercase tracking-wide hover:bg-brand-black transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── "WHAT WE ACTUALLY BUILD" banner ─── */}
      <section className="px-4 tablet:px-6">
        <div className="bg-brand-lime rounded-2xl px-8 py-16 tablet:py-24 text-center">
          <h2 className="uppercase text-brand-black">What We Actually Build</h2>
          <Link
            href="/solution"
            className="mt-4 inline-flex items-center gap-2 text-brand-black/70 hover:text-brand-black transition-colors font-medium"
          >
            See the full picture
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── AIOS Block ─── */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-16 tablet:py-24">
          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Not a chatbot", "Not a wrapper"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-brand-gray/30 px-4 py-1.5 text-sm text-brand-teal"
              >
                {label}
              </span>
            ))}
            <span className="rounded-full border border-brand-teal bg-brand-teal/5 px-4 py-1.5 text-sm text-brand-teal font-medium flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="0" y="0" width="7" height="7" rx="1.5" />
                <rect x="9" y="0" width="7" height="7" rx="1.5" />
                <rect x="0" y="9" width="7" height="7" rx="1.5" />
                <rect x="9" y="9" width="7" height="7" rx="1.5" />
              </svg>
              An operating system
            </span>
          </div>

          <QuotableStatement text="Not a chatbot. Not a wrapper. An operating system.">
            <p>Not a chatbot. Not a wrapper. An operating system.</p>
          </QuotableStatement>

          {/* Three column cards */}
          <div className="grid grid-cols-1 desktop:grid-cols-3 gap-6">
            {/* Left card */}
            <div className="rounded-2xl border border-brand-gray/20 bg-brand-white p-8">
              <p className="font-semibold text-lg">
                There&rsquo;s a system that changes this.
              </p>
              <p className="mt-4 text-brand-teal/80">
                We call it the bottle — the operating system that channels the
                raw power of AI into something your business can actually use.
              </p>
            </div>

            {/* Center card — AIOS */}
            <div className="rounded-2xl border border-brand-gray/20 bg-brand-white p-8 flex items-center justify-center">
              <span className="text-6xl tablet:text-7xl desktop:text-8xl font-normal text-brand-teal/80 tracking-tight">
                AIOS
              </span>
            </div>

            {/* Right card — three pillars */}
            <div className="rounded-2xl border border-brand-gray/20 bg-brand-white p-8">
              <p className="text-sm text-brand-teal/70">
                An AI Operating System — and it wraps around your entire
                business in three layers:
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-base font-bold">Business Context Data Engine</h3>
                  <p className="text-sm text-brand-teal/70">
                    Your AI knows your business the way a co-founder would
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold">Dashboard Intelligence</h3>
                  <p className="text-sm text-brand-teal/70">
                    A morning brief, delivered before you open your laptop
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold">Automated Task Management</h3>
                  <p className="text-sm text-brand-teal/70">
                    60-70% of your recurring tasks, handled — a number McKinsey
                    backs up
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="mt-8 grid grid-cols-1 tablet:grid-cols-3 gap-px bg-brand-gray/20 rounded-xl overflow-hidden">
            {[
              "Three layers working together",
              "Context makes the intelligence useful",
              "Intelligence makes the automation smart",
            ].map((text) => (
              <div
                key={text}
                className="bg-brand-cream px-6 py-4 text-center text-sm font-medium uppercase tracking-wide"
              >
                {text}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/solution"
              className="inline-flex items-center gap-2 rounded-[10px] bg-brand-teal px-8 py-3.5 text-lg font-bold text-brand-white uppercase tracking-wide hover:bg-brand-black transition-colors"
            >
              See the Full Picture
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Use Case Cards ─── */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-16 tablet:py-24">
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6">
            {useCaseCards.map((card) => (
              <div
                key={card.title}
                className="group relative border border-brand-gray2 rounded-lg p-8 tablet:p-10 bg-brand-white transition-colors hover:border-brand-teal"
              >
                {/* Corner brackets */}
                <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-brand-gray2 transition-colors group-hover:border-brand-teal" aria-hidden="true" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-brand-gray2 transition-colors group-hover:border-brand-teal" aria-hidden="true" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-brand-gray2 transition-colors group-hover:border-brand-teal" aria-hidden="true" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-brand-gray2 transition-colors group-hover:border-brand-teal" aria-hidden="true" />

                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-[22px] text-brand-black">{card.title}</h3>
                <p className="mt-3 font-bold text-lg text-brand-teal">{card.outcome}</p>
                <p className="mt-4 text-lg text-brand-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Metrics Header (split) ─── */}
      <section className="grid grid-cols-1 desktop:grid-cols-2">
        <div className="bg-brand-black text-brand-cream px-8 tablet:px-16 py-16 tablet:py-24 flex items-center">
          <h2 className="uppercase">
            We measure three things for every client:
          </h2>
        </div>
        <div className="hidden desktop:block bg-brand-white" />
      </section>

      {/* ─── Metrics Block ─── */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-16 tablet:py-24">
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12">
            {/* Left — pyramid illustration */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/pyramid-blocks.svg"
                alt="Stacked building blocks representing AIOS layers"
                width={400}
                height={480}
                className="w-full max-w-sm"
              />
            </div>

            {/* Right — three metrics */}
            <div className="space-y-0 divide-y divide-brand-gray/20">
              <div className="py-8 first:pt-0 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Away-from-Desk Autonomy</h3>
                  <p className="mt-2 text-brand-teal/80">Run your business from your phone. Full days without a laptop — nothing falls apart.</p>
                </div>
              </div>
              <div className="py-8 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Task Automation</h3>
                  <p className="mt-2 text-brand-teal/80">60-70% of recurring operational tasks, automated or heavily augmented</p>
                </div>
              </div>
              <div className="py-8 last:pb-0 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Revenue per Person</h3>
                  <p className="mt-2 text-brand-teal/80">More output, same team. The real advantage isn&rsquo;t headcount — it&rsquo;s what each person produces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Strip ─── */}
      <section className="bg-brand-teal text-brand-cream">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-12 tablet:py-16">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8 tablet:gap-0 tablet:divide-x divide-brand-cream/20">
            <div className="text-center tablet:pr-8">
              <span className="text-4xl tablet:text-5xl desktop:text-6xl font-bold">
                12-25X
              </span>
              <span className="ml-3 text-lg tablet:text-xl font-light">
                time leverage
              </span>
            </div>
            <div className="text-center tablet:pl-8">
              <span className="text-4xl tablet:text-5xl desktop:text-6xl font-bold">
                60-70%
              </span>
              <span className="ml-3 text-lg tablet:text-xl font-light">
                tasks automated
              </span>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-brand-cream/20 text-center">
            <span className="text-3xl tablet:text-4xl desktop:text-5xl font-bold">
              50% &rarr; 90%
            </span>
            <span className="ml-3 text-lg tablet:text-xl font-light">
              output quality with full business context
            </span>
          </div>
        </div>
      </section>

      {/* ─── Disclaimer ─── */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-12">
          <div className="border-l-4 border-brand-lime pl-6 max-w-3xl">
            <p className="text-sm text-brand-teal/70">
              These are methodology targets based on AIOS architecture — derived
              from time-per-task comparisons before and after AIOS deployment —
              and supported by industry research (McKinsey, 2023; Leng et al.,
              2024).
            </p>
          </div>
        </div>
      </section>

      {/* ─── "YOU HAVE TWO PATHS FROM HERE" banner ─── */}
      <section className="px-4 tablet:px-6">
        <div className="bg-brand-lime rounded-2xl px-8 py-16 tablet:py-24 text-center">
          <h2 className="uppercase text-brand-black">You Have Two Paths From Here</h2>
        </div>
      </section>

      {/* ─── Two Paths ─── */}
      <section className="grid grid-cols-1 desktop:grid-cols-2">
        {/* Do it alone */}
        <div className="bg-brand-cream px-8 tablet:px-16 py-16 tablet:py-24">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/cube-single.svg"
              alt=""
              width={64}
              height={64}
              className="w-16 h-16"
              aria-hidden="true"
            />
            <h3 className="text-2xl tablet:text-3xl font-bold">
              Do it alone:
            </h3>
          </div>
          <p className="text-brand-teal/80">
            Evaluate 46,700 AI tools. Learn the architecture. Navigate context
            systems, API integrations, and automation layers yourself. Spend
            months iterating before anything runs. Maintain and evolve it as the
            landscape shifts underneath you.
          </p>
        </div>

        {/* Do it with us */}
        <div className="bg-brand-black text-brand-cream px-8 tablet:px-16 py-16 tablet:py-24 relative">
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/cube-triple.svg"
              alt=""
              width={64}
              height={56}
              className="w-16 h-14"
              aria-hidden="true"
            />
            <h3 className="text-2xl tablet:text-3xl font-bold">
              Do it with us:
            </h3>
          </div>
          <p className="text-brand-cream/80">
            We build the full system around your business. Business context,
            dashboard intelligence, automated task management — configured for
            your operations. First working system live within weeks. Ongoing
            support as your business grows.
          </p>
          <div className="flex justify-end mt-8">
            <Link
              href="/blueprint"
              className="w-12 h-12 rounded-lg bg-brand-cream/10 flex items-center justify-center hover:bg-brand-cream/20 transition-colors"
              aria-label="Get started with us"
            >
              <svg className="w-6 h-6 text-brand-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Guarantees ─── */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-3xl px-4 tablet:px-6 py-16 tablet:py-24">
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <CheckCircleIcon />
              <div>
                <p className="font-bold">
                  Get a personalized AI Blueprint before any commitment.
                </p>
                <p className="mt-1 text-brand-teal/70">
                  You see exactly what&rsquo;s possible for your business —
                  free, before any engagement begins.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon />
              <div>
                <p className="font-bold">
                  You&rsquo;ll never be stuck alone.
                </p>
                <p className="mt-1 text-brand-teal/70">
                  We don&rsquo;t build and disappear. Ongoing partnership means
                  the system evolves with you.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircleIcon />
              <div>
                <p className="font-bold">
                  You don&rsquo;t need to be technical.
                </p>
                <p className="mt-1 text-brand-teal/70">
                  We build it. We configure it. We maintain it. You use it.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ─── Final Banner CTA ─── */}
      <section id="footer-cta" className="bg-brand-black text-brand-cream">
        <div className="mx-auto max-w-7xl px-4 tablet:px-6 py-16 tablet:py-24 desktop:py-32">
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 desktop:gap-12">
            {/* Left column */}
            <div>
              <h2 className="uppercase text-brand-white">We build the bottle</h2>
              <div className="mt-10">
                <TrackedLink
                  href="/blueprint"
                  event="cta_click"
                  eventParams={{ cta_location: "final_cta" }}
                  className="inline-block rounded-[10px] bg-brand-lime px-8 py-3.5 font-bold text-brand-black hover:bg-brand-cream transition-colors uppercase tracking-wide text-lg"
                >
                  Get Your Free AI Blueprint
                </TrackedLink>
              </div>
            </div>
            {/* Right column — offset */}
            <div className="desktop:pt-16">
              <h2 className="uppercase text-brand-lime">
                You fill it with the business you actually want to run
              </h2>
              <QuotableStatement text="A business that serves you, not the other way around.">
                <p className="mt-4 text-brand-cream/60 text-lg">
                  A business that serves you, not the other way around.
                </p>
              </QuotableStatement>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
