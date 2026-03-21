import { trackEvent } from "./analytics";

describe("trackEvent", () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it("pushes event to window.dataLayer", () => {
    trackEvent("cta_click");
    expect(window.dataLayer).toContainEqual({ event: "cta_click" });
  });

  it("includes params in the push", () => {
    trackEvent("nav_click", { nav_item: "FAQ" });
    expect(window.dataLayer).toContainEqual({
      event: "nav_click",
      nav_item: "FAQ",
    });
  });

  it("does nothing when dataLayer is undefined", () => {
    const original = window.dataLayer;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer = undefined;
    expect(() => trackEvent("cta_click")).not.toThrow();
    window.dataLayer = original;
  });
});
