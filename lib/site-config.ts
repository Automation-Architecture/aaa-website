export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://automationarchitecture.ai";

export const SITE_NAME = "Automation Architecture AI";

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Philosophy", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "Industries",
    href: "#",
    children: [
      { label: "Agencies", href: "/industries/agencies" },
      { label: "Coaching", href: "/industries/coaching" },
      { label: "Ecommerce", href: "/industries/ecommerce" },
      { label: "SaaS", href: "/industries/saas" },
    ],
  },
  { label: "Solution", href: "/solution" },
  { label: "Cases", href: "/use-cases" },
  { label: "FAQ", href: "/faq" },
];

export const CTA = {
  label: "APPLY NOW",
  href: "/blueprint",
} as const;

export const SECONDARY_CTA = {
  label: "Our AI Blueprint",
  href: "/blueprint",
} as const;

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Platform",
    links: [
      { label: "Our Free AI Blueprint", href: "/blueprint" },
      { label: "AIOS Solution", href: "/solution" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Use Cases", href: "/use-cases" },
    ],
  },
  {
    title: "Comparisons",
    links: [
      { label: "AIOS vs. ChatGPT", href: "/aios-vs-chatgpt" },
      { label: "AIOS vs. Zapier", href: "/aios-vs-zapier" },
      { label: "AIOS vs. DIY", href: "/aios-vs-diy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Problem", href: "/problem" },
      { label: "Philosophy", href: "/about" },
      { label: "Glossary", href: "/glossary" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Agencies", href: "/industries/agencies" },
      { label: "SaaS", href: "/industries/saas" },
      { label: "Ecommerce", href: "/industries/ecommerce" },
      { label: "Coaching", href: "/industries/coaching" },
    ],
  },
];
