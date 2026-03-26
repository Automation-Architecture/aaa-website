import { useEffect, useState } from "react";

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  laptopSmall: 1025,
  laptopMedium: 1280,
  laptopLarge: 1440,
} as const;

export type ResponsiveModule =
  | "mobile"
  | "tablet"
  | "laptop-small"
  | "laptop-medium"
  | "laptop-large";

export function getResponsiveModule(width: number): ResponsiveModule {
  if (width >= BREAKPOINTS.laptopLarge) return "laptop-large";
  if (width >= BREAKPOINTS.laptopMedium) return "laptop-medium";
  if (width >= BREAKPOINTS.laptopSmall) return "laptop-small";
  if (width >= BREAKPOINTS.tablet) return "tablet";
  return "mobile";
}

export function useResponsiveModule() {
  const [module, setModule] = useState<ResponsiveModule>("mobile");

  useEffect(() => {
    const onResize = () => {
      setModule(getResponsiveModule(window.innerWidth));
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return module;
}
