import type { ReactNode } from "react";

export function QuotableStatement({ children }: { children: ReactNode }) {
  return <aside className="quotable">{children}</aside>;
}
