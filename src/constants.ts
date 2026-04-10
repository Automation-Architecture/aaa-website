export const RouteNames = {
  Home: "/",
  Blueprint: "/blueprint",
  Problem: "/problem",
  Solution: "/solution",
  Value: "/value",
  HowItWorks: "/how-it-works",
  UseCases: "/use-cases",
  About: "/about",
  FAQ: "/faq",
  Glossary: "/glossary",
  SoftwarePipelineIQ: "https://www.pipelineiq.app/",
  SoftwareYoutubeIQ: "https://youtubeiq.app",
  SoftwareJiraIQ: "https://jiraiq.app",
  AiosVsChatgpt: "/aios-vs-chatgpt",
  AiosVsDiy: "/aios-vs-diy",
  AiosVsZapier: "/aios-vs-zapier",
  Privacy: "/privacy",
  Terms: "/terms",
};

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Philosophy", href: RouteNames.About },
  { label: "How It Works", href: RouteNames.HowItWorks },
  {
    label: "Software",
    children: [
      { label: "PipelineIQ", href: RouteNames.SoftwarePipelineIQ },
      { label: "YoutubeIQ", href: RouteNames.SoftwareYoutubeIQ },
      { label: "JIRAIQ", href: RouteNames.SoftwareJiraIQ },
    ],
  },
  { label: "Solution", href: RouteNames.Solution },
  { label: "Cases", href: RouteNames.UseCases },
  { label: "FAQ", href: RouteNames.FAQ },
];

export const CTA = {
  label: "APPLY NOW",
  href: RouteNames.Blueprint,
} as const;

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Our Free AI Blueprint", href: RouteNames.Blueprint },
      { label: "AIOS Solution", href: RouteNames.Solution },
      { label: "How It Works", href: RouteNames.HowItWorks },
      { label: "Use Cases", href: RouteNames.UseCases },
    ],
  },
  {
    title: "Comparisons",
    links: [
      { label: "AIOS vs. ChatGPT", href: RouteNames.AiosVsChatgpt },
      { label: "AIOS vs. Zapier", href: RouteNames.AiosVsZapier },
      { label: "AIOS vs. DIY", href: RouteNames.AiosVsDiy },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Problem", href: RouteNames.Problem },
      { label: "Philosophy", href: RouteNames.About },
      { label: "Glossary", href: RouteNames.Glossary },
      { label: "FAQ", href: RouteNames.FAQ },
    ],
  },
  {
    title: "Software",
    links: [
      { label: "PipelineIQ", href: RouteNames.SoftwarePipelineIQ },
      { label: "YoutubeIQ", href: RouteNames.SoftwareYoutubeIQ },
      { label: "JIRAIQ", href: RouteNames.SoftwareJiraIQ },
    ],
  },
];
