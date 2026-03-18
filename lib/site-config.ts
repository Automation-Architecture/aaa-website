export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://automationarchitecture.ai";

export const SITE_NAME = "Automation Architecture AI";

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Solution", href: "/solution" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Use Cases", href: "/use-cases" },
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
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const CTA = {
  label: "Get Your Free AI Blueprint",
  href: "/blueprint",
} as const;

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Value / ROI", href: "/value" },
      { label: "AIOS vs Zapier", href: "/aios-vs-zapier" },
      { label: "AIOS vs DIY", href: "/aios-vs-diy" },
      { label: "AIOS vs ChatGPT", href: "/aios-vs-chatgpt" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Agencies", href: "/industries/agencies" },
      { label: "Coaching", href: "/industries/coaching" },
      { label: "Ecommerce", href: "/industries/ecommerce" },
      { label: "SaaS", href: "/industries/saas" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];
