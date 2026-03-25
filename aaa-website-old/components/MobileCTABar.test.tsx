import { render, screen, act } from "@testing-library/react";
import { MobileCTABar } from "./MobileCTABar";
import { CTA } from "@/lib/site-config";

type ObserverInstance = {
  callback: IntersectionObserverCallback;
  elements: Element[];
  observe(el: Element): void;
  unobserve(): void;
  disconnect(): void;
  takeRecords(): IntersectionObserverEntry[];
  root: Element | null;
  rootMargin: string;
  thresholds: ReadonlyArray<number>;
};

let observers: ObserverInstance[] = [];

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  elements: Element[] = [];
  root: Element | null = null;
  rootMargin = "";
  thresholds: ReadonlyArray<number> = [];

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    observers.push(this as unknown as ObserverInstance);
  }

  observe(el: Element): void {
    this.elements.push(el);
  }
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// DOM elements created by setupDOM — cleaned up in afterEach
let heroCta: HTMLElement | null = null;
let footerCta: HTMLElement | null = null;

function setupDOM() {
  heroCta = document.createElement("div");
  heroCta.id = "hero-cta";
  document.body.appendChild(heroCta);

  footerCta = document.createElement("div");
  footerCta.id = "footer-cta";
  document.body.appendChild(footerCta);
}

beforeEach(() => {
  observers = [];
  window.dataLayer = [];
  globalThis.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterEach(() => {
  heroCta?.remove();
  footerCta?.remove();
  heroCta = null;
  footerCta = null;
});

function triggerObserver(index: number, isIntersecting: boolean) {
  const obs = observers[index];
  if (!obs) return;
  act(() => {
    obs.callback(
      [{ isIntersecting } as IntersectionObserverEntry],
      obs as unknown as IntersectionObserver,
    );
  });
}

describe("MobileCTABar", () => {
  it("renders hidden by default (aria-hidden=true)", () => {
    setupDOM();
    render(<MobileCTABar />);

    const bar = screen.getByText(CTA.label).closest("[aria-hidden]");
    expect(bar).toHaveAttribute("aria-hidden", "true");
  });

  it("becomes visible when hero exits viewport and footer is not visible", () => {
    setupDOM();
    render(<MobileCTABar />);

    // Hero exits viewport (isIntersecting = false)
    triggerObserver(0, false);
    // Footer is not visible (isIntersecting = false)
    triggerObserver(1, false);

    const bar = screen.getByText(CTA.label).closest("[aria-hidden]");
    expect(bar).toHaveAttribute("aria-hidden", "false");
  });

  it("hides when footer becomes visible", () => {
    setupDOM();
    render(<MobileCTABar />);

    // Hero exited
    triggerObserver(0, false);
    triggerObserver(1, false);

    // Footer enters viewport
    triggerObserver(1, true);

    const bar = screen.getByText(CTA.label).closest("[aria-hidden]");
    expect(bar).toHaveAttribute("aria-hidden", "true");
  });

  it("links to the CTA href", () => {
    setupDOM();
    render(<MobileCTABar />);

    // Link is inside aria-hidden container, so use hidden: true
    const link = screen.getByRole("link", { name: new RegExp(CTA.label, "i"), hidden: true });
    expect(link).toHaveAttribute("href", CTA.href);
  });

  it("uses scroll fallback when hero element does not exist", () => {
    // No hero-cta or footer-cta elements in the DOM
    const addEventSpy = vi.spyOn(window, "addEventListener");

    render(<MobileCTABar />);

    const scrollCalls = addEventSpy.mock.calls.filter(
      ([event]) => event === "scroll",
    );
    expect(scrollCalls.length).toBeGreaterThan(0);
    addEventSpy.mockRestore();
  });
});
