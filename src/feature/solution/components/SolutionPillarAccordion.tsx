"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SolutionPillarAccordionData {
  key: string;
  pillarLabel: string;
  title: string;
  content: React.ReactNode;
}

interface SolutionPillarAccordionProps {
  data: SolutionPillarAccordionData;
  activated?: boolean;
  autoOpenOnActivate?: boolean;
}

export function SolutionPillarAccordion({
  data,
  activated = false,
  autoOpenOnActivate = false,
}: SolutionPillarAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (activated && autoOpenOnActivate) {
      setIsOpen(true);
    }
  }, [activated, autoOpenOnActivate]);

  return (
    <article className="relative">
      <span
        className={cn(
          "absolute left-0 top-0 z-10 inline-flex rounded-[0.375rem] px-5 py-[0.3125rem] text-[1.125rem] font-semibold",
          isOpen ? "bg-brand-lime text-brand-black" : "bg-brand-teal text-white",
        )}
      >
        {data.pillarLabel}
      </span>

      <div className="pl-[0.55rem] pt-[1.78rem]">
        <div className="overflow-hidden rounded-[0.625rem] border border-brand-divider bg-white">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={`solution-pillar-${data.key}`}
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
              "flex min-h-[5.3125rem] w-full items-center justify-between gap-3 px-[1.875rem] py-6 text-left transition-colors",
              isOpen
                ? "bg-brand-black text-brand-lime"
                : "bg-white text-brand-black hover:bg-brand-surface",
            )}
          >
            <span className="text-[1.15rem] font-semibold leading-tight tablet:text-[1.35rem]">
              {data.title}
            </span>
            <span
              aria-hidden
              className={cn(
                "block h-6 w-[1.125rem] shrink-0 transition-transform duration-300 [mask-image:url('/icons/right-arrow.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]",
                isOpen ? "bg-brand-lime" : "bg-brand-teal",
                isOpen && "rotate-90",
              )}
            />
          </button>

          <div
            id={`solution-pillar-${data.key}`}
            className="grid transition-[grid-template-rows] duration-300 ease-out"
            style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="border-t border-brand-divider bg-brand-surface px-[1.875rem] pb-5 pt-4 text-[1rem] font-medium leading-relaxed text-brand-gray">
                {data.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
