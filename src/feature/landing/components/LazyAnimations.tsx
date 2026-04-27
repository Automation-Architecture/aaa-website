"use client";
import dynamic from "next/dynamic";

// Lazy-loaded wrappers for below-fold animation components.
// ssr: false keeps them out of the initial JS bundle; they only load after hydration.
// These sections are off-screen during Lighthouse measurement so there is no LCP/SI impact.

export const LandingMetricsPyramidAnimationLazy = dynamic(
  () =>
    import("./LandingMetricsPyramidAnimation").then((m) => ({
      default: m.LandingMetricsPyramidAnimation,
    })),
  { ssr: false },
);

export const LandingOfferThreeBlockAnimationLazy = dynamic(
  () =>
    import("./LandingOfferThreeBlockAnimation").then((m) => ({
      default: m.LandingOfferThreeBlockAnimation,
    })),
  { ssr: false },
);

export const LandingAgentEconomySectionLazy = dynamic(
  () =>
    import("./LandingAgentEconomySection").then((m) => ({
      default: m.LandingAgentEconomySection,
    })),
  { ssr: false },
);
