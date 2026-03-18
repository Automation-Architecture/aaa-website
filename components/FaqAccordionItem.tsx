"use client";

import { useContext } from "react";
import { FaqAccordionContext } from "./FaqAccordion";

interface FaqAccordionItemProps {
  id: string;
  question: string;
  children: React.ReactNode;
}

export function FaqAccordionItem({ id, question, children }: FaqAccordionItemProps) {
  const { openId, toggle } = useContext(FaqAccordionContext);
  const isOpen = openId === id;
  const buttonId = `btn-${id}`;
  const answerId = `answer-${id}`;

  return (
    <article key={id} id={id} className="py-2">
      <h2>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => toggle(id)}
          className="flex w-full items-center justify-between py-4 text-left font-semibold text-brand-teal hover:text-brand-lime transition-colors"
        >
          <span>{question}</span>
          <span
            className={`ml-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
            aria-hidden="true"
          >
            +
          </span>
        </button>
      </h2>
      <div
        id={answerId}
        role="region"
        aria-labelledby={buttonId}
        className="grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="pb-4 text-brand-teal/80">{children}</div>
        </div>
      </div>
    </article>
  );
}
