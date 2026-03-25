import type { ReactNode } from "react";
import { JsonLd } from "@/components/JsonLd";

interface QuotableStatementProps {
  children: ReactNode;
  text: string;
}

export function QuotableStatement({ children, text }: QuotableStatementProps) {
  const quotationSchema = {
    "@context": "https://schema.org",
    "@type": "Quotation",
    text,
    creator: {
      "@type": "Organization",
      name: "Automation Architecture AI",
    },
  };

  return (
    <>
      <JsonLd data={quotationSchema} />
      <aside className="quotable" data-cite="true">
        {children}
      </aside>
    </>
  );
}
