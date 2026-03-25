import type { Metadata } from "next";
import { AiosVsZapierView } from "@/feature/aios-vs-zapier/views/AiosVsZapierView";

export const metadata: Metadata = {
  title: "AIOS vs Zapier: Automation Tool vs Operating System -- AAA",
  description:
    "Zapier connects apps. An AIOS runs your business. Compare scope, intelligence, context, and compounding — and see which approach fits your operation.",
  alternates: { canonical: "/aios-vs-zapier" },
  openGraph: {
    title: "AIOS vs Zapier: Automation Tool vs Operating System",
    description:
      "Zapier connects apps. An AIOS runs your business. Compare scope, intelligence, context, and compounding — and see which approach fits your operation.",
    type: "article",
  },
};

export default function AIOSvsZapierPage() {
  return <AiosVsZapierView />;
}
