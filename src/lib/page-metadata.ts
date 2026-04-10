import type { Metadata } from "next";
import { brandConfig } from "@/config";

/** Default OG / Twitter image; keep in sync with `layout.tsx`. */
const DEFAULT_OG_IMAGE = {
  url: "/og-default.png",
  width: 1200,
  height: 630,
} as const;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
};

/**
 * Per-route SEO: title, description, canonical, Open Graph, and Twitter card.
 * Add or edit entries here — each `page.tsx` re-exports the matching export.
 */
function buildPageMetadata({
  title,
  description,
  path,
  ogType = "article",
}: PageMetaInput): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: ogType,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export const homeMetadata = buildPageMetadata({
  title: "Automation Architecture AI — Done-for-You AI Operating Systems",
  description: `${brandConfig.DESCRIPTION} Prepare for the agent-to-agent economy — operational infrastructure built for small businesses and startups.`,
  path: "/",
  ogType: "website",
});

export const aboutMetadata = buildPageMetadata({
  title: "About AAA: The Philosophy Behind the AI Operating System",
  description:
    "We build AI operating systems founders own, not rent. Compound intelligence means your system gets smarter every day it runs. Done-for-you in 1-3 weeks.",
  path: "/about",
});

export const aiosVsChatgptMetadata = buildPageMetadata({
  title: "AIOS vs ChatGPT: Why a Chatbot Isn't Enough — AAA",
  description:
    "ChatGPT gets you 50% of the way there. An AIOS with full business context reaches 90%. Compare what a chatbot does vs what an operating system does.",
  path: "/aios-vs-chatgpt",
});

export const aiosVsDiyMetadata = buildPageMetadata({
  title: "AIOS vs DIY: Done-for-You AI vs Building It Yourself — AAA",
  description:
    "46,700 AI tools exist. Building your own system takes months and developer-level skill. Done-for-you deploys in 1-3 weeks. Here's how to decide.",
  path: "/aios-vs-diy",
});

export const aiosVsZapierMetadata = buildPageMetadata({
  title: "AIOS vs Zapier: Automation Tool vs Operating System — AAA",
  description:
    "Zapier connects apps. An AIOS runs your business. Compare scope, intelligence, context, and compounding — and see which approach fits your operation.",
  path: "/aios-vs-zapier",
});

export const blueprintMetadata = buildPageMetadata({
  title: "Get Your Free AI Blueprint — Automation Architecture AI",
  description:
    "AI automation recommendations tailored to your industry. Fill out a 5-minute intake form and receive a personalized Blueprint. Free, no obligation.",
  path: "/blueprint",
  ogType: "website",
});

export const faqMetadata = buildPageMetadata({
  title: "AIOS FAQ: AI Operating System Questions Answered",
  description:
    "25 questions answered about AIOS and AI automation for small businesses. Covers cost, timeline of 1-3 weeks, data security, and how AIOS actually works.",
  path: "/faq",
});

export const glossaryMetadata = buildPageMetadata({
  title: "AAA Glossary: AI Operating System Key Terms",
  description:
    "17 key terms defined: AIOS, Operator Trap, compound intelligence, Business Context Data Engine, bandwidth inversion, and more. A plain-language guide.",
  path: "/glossary",
});

export const howItWorksMetadata = buildPageMetadata({
  title: "How AIOS Works: 7 Phases From Blueprint to Live System",
  description:
    "7 phases from free AI Blueprint to a running system. AI Automation deploys in about 1 week. Full AIOS builds take roughly 3 weeks using proven modules.",
  path: "/how-it-works",
});

export const problemMetadata = buildPageMetadata({
  title: "The Operator Trap: Founders Stuck in Operations — AAA",
  description:
    "80% of a founder's week goes to keeping the lights on. 46,700 AI tools exist but none connect. The Operator Trap compounds until you break the pattern.",
  path: "/problem",
});

const privacyDescription =
  "How Automation Architecture AI collects, uses, and protects your information. Covers Typeform, HubSpot, Google Analytics, Google Tag Manager, CookieYes, Vercel, and your data rights.";

export const privacyMetadata = buildPageMetadata({
  title: "Privacy Policy — Automation Architecture AI",
  description: privacyDescription,
  path: "/privacy",
  ogType: "website",
});

const termsDescription =
  "Terms of service governing your use of the Automation Architecture AI website, AI Blueprint, and related content.";

export const termsMetadata = buildPageMetadata({
  title: "Terms of Service — Automation Architecture AI",
  description: termsDescription,
  path: "/terms",
  ogType: "website",
});

export const solutionMetadata = buildPageMetadata({
  title: "AIOS: The AI Operating System Built for Your Business",
  description:
    "An AIOS gives your business 3 connected layers: a Context Data Engine, Dashboard Intelligence, and Automated Task Management. Output quality jumps 50% to 90%.",
  path: "/solution",
});

export const useCasesMetadata = buildPageMetadata({
  title: "AI Automation Use Cases: Real Outcomes From Real Businesses",
  description:
    "74 calls analyzed overnight into 1 morning brief. 15 hours of weekly lead gen reduced to zero. 7 real outcomes from businesses running on AIOS systems.",
  path: "/use-cases",
});

export const valueMetadata = buildPageMetadata({
  title: "The ROI of AI Automation: Bandwidth Math for Founders — AAA",
  description:
    "80% of your week goes to maintenance. An AIOS inverts that to 20-30%. Do the math on what recovered bandwidth means for your specific business.",
  path: "/value",
});
