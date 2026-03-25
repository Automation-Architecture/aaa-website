import type { ReactNode } from "react";

interface QuotableStatementProps {
  text: string;
  children: ReactNode;
}

export function QuotableStatement({ children }: QuotableStatementProps) {
  return (
    <blockquote className="my-6 border-l-4 border-brand-lime pl-6 py-2 italic text-brand-teal">
      {children}
    </blockquote>
  );
}
