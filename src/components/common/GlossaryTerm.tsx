import type { ReactNode } from "react";

interface GlossaryTermProps {
  id: string;
  term: string;
  children: ReactNode;
}

export function GlossaryTerm({ id, term, children }: GlossaryTermProps) {
  return (
    <article
      id={id}
      className="py-6 border-b border-brand-gray/20 last:border-b-0"
    >
      <h2>
        <dfn className="not-italic font-bold text-brand-teal">{term}</dfn>
      </h2>
      <div className="mt-3 text-brand-teal/80">{children}</div>
    </article>
  );
}
