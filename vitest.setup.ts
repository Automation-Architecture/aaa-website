import "@testing-library/jest-dom/vitest";

// Mock IntersectionObserver (not available in jsdom)
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];

  constructor(private callback: IntersectionObserverCallback) {}

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver =
  MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Mock window.dataLayer for GTM analytics
Object.defineProperty(window, "dataLayer", {
  value: [] as Record<string, unknown>[],
  writable: true,
});

// Mock window.scrollTo (jsdom doesn't implement it)
window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;

// Mock Element.scrollIntoView
Element.prototype.scrollIntoView = vi.fn();
