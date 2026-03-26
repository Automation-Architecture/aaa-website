"use client";

import { useContext } from "react";
import { cn } from "@/lib/utils";
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
  const questionParts = question.match(/^(\d+\.)\s*(.*)$/);
  const questionNumber = questionParts?.[1];
  const questionText = questionParts?.[2] ?? question;

  return (
    <article
      id={id}
      className="overflow-hidden rounded-[0.625rem] border border-[#d9d9d9] bg-[#fafafa]"
    >
      <h2>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={answerId}
          onClick={() => toggle(id)}
          className={cn(
            "flex w-full items-center justify-between gap-[0.625rem] px-[1.125rem] py-[0.75rem] text-left text-[0.9375rem] leading-[1.3] transition-colors tablet:min-h-[4.25rem] tablet:px-[1.5625rem] tablet:py-[0.9375rem] tablet:text-[1rem] desktop:text-[1.0625rem] min-[1440px]:text-[1.125rem]",
            isOpen
              ? "bg-brand-teal font-medium text-brand-lime"
              : "bg-[#fafafa] font-normal text-brand-teal",
          )}
        >
          <span className={cn("flex-1", isOpen ? "text-brand-lime" : "text-brand-teal")}>
            {questionNumber ? (
              <>
                <span className="mr-1">{questionNumber}</span>
                {questionText}
              </>
            ) : (
              questionText
            )}
          </span>
          <span
            className={cn(
              "inline-flex size-[2rem] shrink-0 items-center justify-center rounded-[0.375rem] text-[1.25rem] leading-none transition-colors duration-200",
              isOpen
                ? "bg-brand-lime font-semibold text-brand-black"
                : "bg-brand-divider font-medium text-brand-heading",
            )}
            aria-hidden="true"
          >
            {isOpen ? "−" : "+"}
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
          <div className="border-t border-[#d9d9d9] bg-[#fafafa] px-[1.125rem] pb-[1.25rem] pt-[1rem] text-[0.9375rem] font-medium leading-relaxed text-brand-gray tablet:px-[1.5625rem]">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}
