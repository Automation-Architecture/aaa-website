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
  IndustryAgencies: "/industries/agencies",
  IndustryCoaching: "/industries/coaching",
  IndustryEcommerce: "/industries/ecommerce",
  IndustrySaas: "/industries/saas",
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
    label: "Industries",
    children: [
      { label: "Agencies", href: RouteNames.IndustryAgencies },
      { label: "Coaching", href: RouteNames.IndustryCoaching },
      { label: "Ecommerce", href: RouteNames.IndustryEcommerce },
      { label: "SaaS", href: RouteNames.IndustrySaas },
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
    title: "Industries",
    links: [
      { label: "Agencies", href: RouteNames.IndustryAgencies },
      { label: "SaaS", href: RouteNames.IndustrySaas },
      { label: "Ecommerce", href: RouteNames.IndustryEcommerce },
      { label: "Coaching", href: RouteNames.IndustryCoaching },
    ],
  },
];
