"use client";

import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/utils/cn";

type ToolId = "openai" | "zapier" | "browser";

const TOOLS: Record<ToolId, { src: string; alt: string }> = {
  openai: {
    src: "/images/problem_overwhelm_openai.png",
    alt: "OpenAI tool",
  },
  zapier: {
    src: "/images/problem_overwhelm_zapier.png",
    alt: "Zapier tool",
  },
  browser: {
    src: "/images/problem_overwhelm_browser.png",
    alt: "Browser tools",
  },
};

/** 1: O–Z–B → 2: Z–O–B → 3: Z–B–O → back to 1: O–Z–B (OpenAI returns to top) */
const ORDER_STATES: ToolId[][] = [
  ["openai", "zapier", "browser"],
  ["zapier", "openai", "browser"],
  ["zapier", "browser", "openai"],
];

const STEP_MS = 2400;

const layoutTransition = {
  type: "spring" as const,
  stiffness: 320,
  damping: 30,
  mass: 0.85,
};

type Props = {
  className?: string;
  direction: "row" | "column";
};

export function ProblemOverwhelmToolsLayoutAnimation({
  className,
  direction,
}: Props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s + 1) % ORDER_STATES.length);
    }, STEP_MS);
    return () => clearInterval(id);
  }, []);

  const order = ORDER_STATES[step];

  return (
    <LayoutGroup>
      <div
        className={cn(
          "flex items-center justify-center overflow-visible",
          direction === "row"
            ? "flex-row gap-10 py-5"
            : "flex-col gap-7.5",
          className,
        )}
      >
        {order.map((id) => (
          <motion.div
            key={id}
            layout
            transition={{ layout: layoutTransition }}
            className={cn(
              "shrink-0",
              direction === "row" ? "h-auto w-18.25" : "mx-auto h-auto w-29",
            )}
          >
            <Image
              src={TOOLS[id].src}
              alt={TOOLS[id].alt}
              width={160}
              height={160}
              className="h-auto w-full"
            />
          </motion.div>
        ))}
      </div>
    </LayoutGroup>
  );
}
