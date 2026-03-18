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
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  // Deep linking: auto-expand item matching URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setOpenId(hash);
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <FaqAccordionContext.Provider value={{ openId, toggle }}>
      <div className="divide-y divide-brand-gray/20">
        {children}
      </div>
    </FaqAccordionContext.Provider>
  );
}
