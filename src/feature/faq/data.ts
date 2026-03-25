export const faqSchemaItems = [
  { q: "Is this just ChatGPT?", a: "No. An AIOS is a full business operating system — not a chatbot. ChatGPT gets you maybe fifty percent of the way there. You paste in context every session, you repeat yourself, and you get generic output that doesn't know your business. An AIOS fully knows your business — your team, your products, your financials, your priorities. It doesn't just answer questions — it researches, creates, schedules, checks in, and reports back. It acts on your behalf, across your entire operation." },
  { q: "Can I build this myself?", a: "Yes, with the right tools, technical skills, and months of ongoing iteration. Over 46,700 AI tools exist. Context architecture, integration complexity, developer cost ($75-$300/hour), and architecture failure are all challenges. We exist for founders who want the system, not the degree." },
  { q: "Is my data secure?", a: "Your business data stays on your infrastructure — not in a third-party cloud. Our systems run locally. The API layer strictly does not train on your data. You own your data, your context, and your automations. If the engagement ends, everything we built stays with you." },
  { q: "Do I need to be technical?", a: "No. The entire system is built, configured, and maintained for you. That's the point of done-for-you. The 7-phase delivery process — from intake form to running system — is designed so you never need to touch the technical layer." },
  { q: "How long does it take?", a: "AI Automation engagements take about one week. Full AIOS builds take about three weeks. Our modular approach means we're assembling and configuring proven components, not building from scratch." },
  { q: "How much does it cost?", a: "Every engagement is scoped and priced individually based on your business. During the free consultation, we assess your tools, your goals, and the scope of work. You receive a detailed proposal within 1-2 days of the call with clear pricing." },
  { q: "What does it actually do each day?", a: "By 7am, before you've opened your laptop, your AIOS has already analyzed overnight data, prepared your morning brief, and queued tasks for review. Throughout the day it handles research, content drafting, data analysis, meeting summaries, and task orchestration." },
  { q: "Is it suitable for a business just starting up?", a: "Yes — and arguably more so, because startups have no legacy systems to work around. No bureaucratic IT backlog, no approval chains. You can build the right infrastructure from day one instead of retrofitting later." },
  { q: "What if something better comes out?", a: "The AIOS architecture is model-agnostic — when better AI models arrive, they slot into the existing system. The value isn't in any single AI model. It's in the structured context, data connections, and automation layers built around your business." },
  { q: "Can I sell this as a service to my clients?", a: "Yes. If you run an agency or consultancy, AIOS infrastructure can become part of your offering. Some of our clients do exactly that — building systems for their own businesses first, then offering the same capability to their clients." },
  { q: "What is an AI Operating System?", a: "An AI Operating System (AIOS) is an autonomous infrastructure layer that wraps around an entire business and runs whether the founder is at their desk or not. It's three integrated systems working together: Business Context Data Engine, Dashboard Intelligence, and Automated Task Management." },
  { q: "What's the difference between an AI tool and an AI Operating System?", a: "An AI tool is a point solution. An AIOS is connected infrastructure. Tools handle one task in isolation. An AIOS connects every layer — context informs intelligence, intelligence drives automation, automation feeds data back into context. That's how a system compounds instead of just accumulates." },
  { q: "What is the Operator Trap in business?", a: "The Operator Trap is a pattern where 80% of a founder's working hours go to operational maintenance — admin, firefighting, meetings, legal, finance — leaving only 20% for the growth work that actually moves the business forward. An AIOS inverts the ratio to 20-30% operational, 70-80% growth." },
  { q: "How does AI automation work for small businesses?", a: "It starts with an audit of every recurring task in your operation. Each task gets categorized: automate fully, augment with AI assistance, or keep manual. The AIOS methodology target is 60-70% automation of recurring work. What makes it work is business context." },
  { q: "What is a Business Context Data Engine?", a: "The Business Context Data Engine is a structured knowledge layer that gives AI complete understanding of a specific business. It includes your identity and communication style, business model and products, team and roles, priorities, goals, decision history, and active projects. Connected data sources feed real-time information into the same layer." },
  { q: "What's the difference between done-for-you AI and DIY AI tools?", a: "Done-for-you means we build the full system around your business. DIY means you evaluate tools, learn the platforms, build the integrations, maintain the connections, and iterate alone. We exist for founders who want the system, not the degree." },
  { q: "How is an AIOS different from Zapier or Make?", a: "Zapier and Make are point-to-point workflow automation. An AIOS is full infrastructure with context, intelligence, and automation layers working together. The difference is context. Zapier triggers actions based on events. An AIOS understands why those events matter. Triggers react. An AIOS reasons." },
  { q: "Do I need a developer to use AI automation?", a: "No. Done-for-you means we handle all technical work — architecture, configuration, integration, testing, deployment, and ongoing maintenance. The 7-phase delivery process is designed for non-technical founders. Zero technical burden on your end." },
  { q: "Is AI automation safe for sensitive business data?", a: "Yes. Your data stays on your infrastructure, not in a third-party database. The API layer does not train on your data. You own everything — data, context, automations, and outputs. If the engagement ends, all of it stays with you." },
  { q: "Will AI replace my team?", a: "No. An AIOS augments your team, not replaces them. The system targets 60-70% automation of recurring operational tasks. Your team gets those hours back for higher-value work: strategy, relationships, creative problem-solving. Revenue per person goes up." },
  { q: "Can AI automate my entire business?", a: "Not entirely — and that's by design. The AIOS methodology targets 60-70% automation of recurring operational tasks. The remaining 30-40% stays manual because it requires human judgment. Full automation isn't the target. Full bandwidth is." },
  { q: "Is AI automation better than hiring?", a: "Different problem, different answer. Hiring adds capacity by adding people. An AIOS adds capacity by amplifying the people you already have. An AIOS deploys in one to three weeks, runs around the clock, and compounds." },
  { q: "What industries benefit most from AI automation?", a: "Any industry where the founder is buried in recurring operational tasks. The common thread isn't the industry — it's the pattern: a founder or small team spending most of their time on maintenance instead of growth." },
  { q: "What is AI automation?", a: "AI automation is the use of artificial intelligence to handle recurring business tasks without manual intervention. Unlike traditional automation, AI automation can interpret context, make decisions, and produce creative output. At AAA, AI Automation is also our focused service tier." },
  { q: "What is the agent-to-agent economy?", a: "The agent-to-agent economy is the emerging economic model where AI agents transact with other AI agents on behalf of businesses — handling vendor interactions, procurement decisions, scheduling, and routine negotiations autonomously. Gartner predicts that by 2028, 33% of enterprise software applications will include agentic AI." },
];

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqSchemaItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export const faqBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://automationarchitecture.ai/" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://automationarchitecture.ai/faq" },
  ],
};
