"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { CTA } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

export function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const footerCta = document.getElementById("footer-cta");

    /* Track each observed state independently */
    let heroExited = false;
    let footerVisible = false;

    function update() {
      setVisible(heroExited && !footerVisible);
    }

    /* If both observed targets exist, use IntersectionObserver */
    const observers: IntersectionObserver[] = [];

    if (heroCta) {
      const heroObs = new IntersectionObserver(
        ([entry]) => {
          heroExited = !entry.isIntersecting;
          update();
        },
        { threshold: 0 }
      );
      heroObs.observe(heroCta);
      observers.push(heroObs);
    }

    if (footerCta) {
      const footerObs = new IntersectionObserver(
        ([entry]) => {
          footerVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0 }
      );
      footerObs.observe(footerCta);
      observers.push(footerObs);
    }

    /* Fallback: if observed elements don't exist, show after 300px scroll */
    let fallbackCleanup: (() => void) | undefined;

    if (!heroCta) {
      function onScroll() {
        heroExited = window.scrollY > 300;
        update();
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      fallbackCleanup = () => window.removeEventListener("scroll", onScroll);
    }

    return () => {
      observers.forEach((obs) => obs.disconnect());
      fallbackCleanup?.();
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 tablet:hidden transition-transform duration-300",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      style={{
        zIndex: "var(--z-mobile-cta)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="shadow-[0_-2px_8px_rgba(0,0,0,0.15)]">
        <Link
          href={CTA.href}
          tabIndex={visible ? 0 : -1}
          className="flex min-h-[48px] items-center justify-center bg-brand-lime px-4 py-3 text-center font-bold text-brand-teal"
          onClick={() => trackEvent("cta_click", { cta_location: "mobile_sticky" })}
        >
          {CTA.label}
        </Link>
      </div>
    </div>
  );
}
