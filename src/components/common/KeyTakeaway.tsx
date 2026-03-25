import type { ReactNode } from "react";

export function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <aside className="mt-6 rounded-lg border-l-4 border-brand-teal bg-brand-cream px-6 py-4 text-brand-teal">
      <strong>Key Takeaway:</strong> {children}
    </aside>
  );
}
