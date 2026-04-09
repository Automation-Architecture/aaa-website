import Image from "next/image";

function RichCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-4 text-[1rem] leading-relaxed desktop:space-y-5 desktop:text-[1.25rem]">
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="text-[1.5rem] font-bold leading-tight text-brand-black desktop:text-[2rem]">
      {children}
    </h5>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return <p className="font-medium text-brand-gray">{children}</p>;
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <p className="font-bold text-brand-teal">{children}</p>;
}

export function PillarOneRichContent() {
  const files = [
    ["me.md", "Your identity, background, communication style"],
    ["work.md", "Business model, products, revenue"],
    ["team.md", "Every key person, role, responsibilities"],
    ["priorities.md", "What's urgent right now"],
    ["goals.md", "Annual and quarterly targets"],
    ["decisions/log", "Every major decision with reasoning"],
    ["projects/[name]", "Individual folders per active project"],
  ] as const;

  return (
    <RichCard>
      <SectionTitle>Your AI knows your business - fully.</SectionTitle>
      <Muted>
        The Business Context Data Engine is a structured knowledge layer that
        gives AI complete understanding of your business - team, products,
        financials, priorities, and decision history.
      </Muted>
      <Muted>
        The Business Context Data Engine gives your AIOS the complete picture:
      </Muted>

      <div className="space-y-2 rounded-[1rem] bg-brand-white p-3 tablet:p-4 desktop:space-y-2.5 desktop:rounded-[1.25rem] desktop:p-[1.875rem]">
        {files.map(([name, description]) => (
          <div key={name} className="flex items-center gap-3 desktop:gap-[1.375rem]">
            <div className="min-w-[7.75rem] rounded-[0.3125rem] bg-brand-black px-3 py-2 text-left text-[0.95rem] text-white desktop:min-w-[11.75rem] desktop:px-5 desktop:py-[0.4375rem] desktop:text-[1.25rem]">
              {name}
            </div>
            <p className="text-[0.95rem] text-brand-black desktop:text-[1.25rem]">
              - {description}
            </p>
          </div>
        ))}
      </div>

      <Muted>
        Plus connected data sources - Stripe, Google Analytics, CRM, marketing
        platforms - consolidated into one place your AI can query.
      </Muted>
      <Muted>
        This is why chatbots get you fifty percent of the way there. The AIOS
        methodology is designed to push output quality to ninety percent once
        full business context is in place.
      </Muted>
      <Highlight>
        The difference is context. Context is not optional - it is the
        foundation.
      </Highlight>
    </RichCard>
  );
}

export function PillarTwoRichContent() {
  const bullets = [
    "Revenue changes and anomalies",
    "Summaries of every call and meeting - including ones you did not attend",
    "Team updates and key decisions",
    "Content performance",
    "A SWOT analysis across the entire business",
    "Emerging opportunities and signals",
  ];

  return (
    <RichCard>
      <SectionTitle>
        The most informed person in your organization. Before 8am.
      </SectionTitle>
      <Muted>
        Dashboard Intelligence is an AI-powered daily briefing system that
        synthesizes data from every connected business platform into a single
        morning report.
      </Muted>
      <Muted>It synthesizes everything happening across your business:</Muted>

      <div className="space-y-2 rounded-[1rem] bg-brand-white p-2.5">
        {bullets.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-[0.625rem] bg-brand-surface p-2.5"
          >
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-[0.375rem] bg-brand-black text-brand-lime">
              ✓
            </span>
            <p className="text-brand-black">{item}</p>
          </div>
        ))}
      </div>

      <Muted>
        One read. Before breakfast. Replaces logging into seven platforms and
        sitting in every call.
      </Muted>
      <Muted>
        The system can analyze 74 calls overnight across multiple business
        streams and summarize them into one brief with deeper analysis attached.
      </Muted>
      <Highlight>
        You check the health of your business the same way you would check a
        weather app. One glance.
      </Highlight>
    </RichCard>
  );
}

export function PillarThreeRichContent() {
  const rows = [
    [
      "Automate",
      "Simple, rule-based tasks the AI handles fully. Hands-off.",
      "/icons/automate.svg",
    ],
    [
      "Augment",
      "Complex or creative tasks where AI does the heavy lift and you review. Minutes instead of hours.",
      "/icons/augment.svg",
    ],
    [
      "Manual",
      "Still requires you. These shrink over time as the system learns.",
      "/icons/manual.svg",
    ],
  ] as const;

  return (
    <RichCard>
      <SectionTitle>60 - 70% of your recurring tasks. Handled.</SectionTitle>
      <Muted>
        Automated Task Management audits every recurring business task and
        categorizes each as automate, augment, or manual - with an AIOS target
        of 60-70% automation.
      </Muted>
      <Muted>We categorize each task:</Muted>

      <div className="space-y-3 rounded-[1rem] bg-brand-white p-4 desktop:space-y-5 desktop:rounded-[1.25rem] desktop:p-[1.875rem]">
        {rows.map(([name, text, icon]) => (
          <div
            key={name}
            className="flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:gap-5"
          >
            <div className="inline-flex min-w-[9.6875rem] items-center gap-2 rounded-[0.375rem] bg-brand-black px-[0.9375rem] py-2 tablet:w-[9.6875rem] tablet:shrink-0">
              <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-[0.25rem] bg-white">
                <Image src={icon} alt="" width={14} height={14} className="size-3.5" />
              </span>
              <span className="text-[1.125rem] font-semibold text-white desktop:text-[1.25rem]">
                {name}
              </span>
            </div>
            <p className="text-brand-black desktop:text-[1.25rem]">{text}</p>
          </div>
        ))}
      </div>

      <Muted>
        <span className="font-bold text-brand-teal">The target: </span>
        sixty to seventy percent of your operational workload, automated or
        heavily augmented. Every task you wrap in automation is bandwidth you
        never lose again. It compounds.
      </Muted>
      <Muted>
        <span className="font-bold text-brand-teal">A real example: </span>a
        discovery call transcript goes in. The AI produces a completed scoping
        and proposal deck. The founder reviews and sends.
      </Muted>
    </RichCard>
  );
}
