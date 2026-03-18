import type { ReactNode } from "react";

export function KeyTakeaway({ children }: { children: ReactNode }) {
  return (
    <aside className="key-takeaway" data-cite="true">
      <strong>Key Takeaway:</strong> {children}
    </aside>
  );
}
