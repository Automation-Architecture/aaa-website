"use client";

import { createContext, useState, useCallback, useEffect } from "react";

interface FaqAccordionContextValue {
  openId: string | null;
  toggle: (id: string) => void;
}

export const FaqAccordionContext = createContext<FaqAccordionContextValue>({
  openId: null,
  toggle: () => {},
});

interface FaqAccordionProps {
  children: React.ReactNode;
}

export function FaqAccordion({ children }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    const hash = window.location.hash.slice(1);
    return hash || null;
  });

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const timer = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <FaqAccordionContext.Provider value={{ openId, toggle }}>
      <div className="grid grid-cols-1 gap-[0.9375rem] tablet:grid-cols-2 desktop:grid-cols-3">
        {children}
      </div>
    </FaqAccordionContext.Provider>
  );
}
