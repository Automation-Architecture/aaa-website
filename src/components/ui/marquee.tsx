"use client";

import { cn } from "@/utils/cn";

interface MarqueeProps {
  items: string[];
  speed?: number; // seconds per full loop
  separator?: string;
  className?: string;
  itemClassName?: string;
}

export function Marquee({
  items,
  speed = 20,
  separator = "·",
  className,
  itemClassName,
}: MarqueeProps) {
  // Duplicate items so the loop is seamless
  const repeated = [...items, ...items];

  return (
    <div className={cn("relative flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 animate-[marquee_var(--speed)_linear_infinite]"
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={cn(
              "whitespace-nowrap px-6 text-[1rem] uppercase",
              itemClassName,
            )}
          >
            {item}
            {i < repeated.length - 1 && (
              <span className="mx-6 opacity-50">{separator}</span>
            )}
          </span>
        ))}
      </div>

      {/* Second copy for seamless wrap */}
      <div
        className="flex shrink-0 animate-[marquee_var(--speed)_linear_infinite]"
        aria-hidden="true"
        style={{ "--speed": `${speed}s` } as React.CSSProperties}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className={cn(
              "whitespace-nowrap px-6 text-[1rem] uppercase",
              itemClassName,
            )}
          >
            {item}
            {i < repeated.length - 1 && (
              <span className="mx-6 opacity-50">{separator}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
