import { render, screen, act } from "@testing-library/react";

// Capture Widget props so we can trigger callbacks
let capturedOnReady: (() => void) | undefined;
let capturedOnSubmit: (() => void) | undefined;

async function importTypeformEmbed() {
  // doMock is NOT hoisted, so it runs after resetModules() and applies
  // to the freshly-loaded module graph.
  vi.doMock("@typeform/embed-react", () => ({
    Widget: (props: { onReady?: () => void; onSubmit?: () => void }) => {
      capturedOnReady = props.onReady;
      capturedOnSubmit = props.onSubmit;
      return <div data-testid="typeform-widget" />;
    },
  }));
  const mod = await import("./TypeformEmbed");
  return mod.TypeformEmbed;
}

beforeEach(() => {
  vi.useFakeTimers();
  vi.resetModules();
  window.dataLayer = [];
  capturedOnReady = undefined;
  capturedOnSubmit = undefined;
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllEnvs();
});

describe("TypeformEmbed", () => {
  describe("with TYPEFORM_ID set", () => {
    beforeEach(() => {
      vi.stubEnv("NEXT_PUBLIC_TYPEFORM_ID", "test-form-id");
    });

    it("shows skeleton while loading", async () => {
      const TypeformEmbed = await importTypeformEmbed();
      render(<TypeformEmbed />);
      expect(screen.getByLabelText(/loading intake form/i)).toBeInTheDocument();
    });

    it("shows widget and hides skeleton after onReady fires", async () => {
      const TypeformEmbed = await importTypeformEmbed();
      render(<TypeformEmbed />);

      act(() => {
        capturedOnReady?.();
      });

      expect(screen.queryByLabelText(/loading intake form/i)).not.toBeInTheDocument();
      expect(screen.getByTestId("typeform-widget")).toBeInTheDocument();
    });

    it("shows fallback after 8-second timeout", async () => {
      const TypeformEmbed = await importTypeformEmbed();
      render(<TypeformEmbed />);

      act(() => {
        vi.advanceTimersByTime(8000);
      });

      expect(screen.getByText(/couldn.t load/i)).toBeInTheDocument();
    });

    it("tracks form_load_error on timeout", async () => {
      const TypeformEmbed = await importTypeformEmbed();
      render(<TypeformEmbed />);

      act(() => {
        vi.advanceTimersByTime(8000);
      });

      expect(window.dataLayer).toContainEqual({ event: "form_load_error" });
    });

    it("tracks form_start on ready", async () => {
      const TypeformEmbed = await importTypeformEmbed();
      render(<TypeformEmbed />);

      act(() => {
        capturedOnReady?.();
      });

      expect(window.dataLayer).toContainEqual({ event: "form_start" });
    });

    it("tracks generate_lead on submit", async () => {
      const TypeformEmbed = await importTypeformEmbed();
      render(<TypeformEmbed />);

      act(() => {
        capturedOnReady?.();
      });
      act(() => {
        capturedOnSubmit?.();
      });

      expect(window.dataLayer).toContainEqual({ event: "generate_lead" });
    });
  });

  describe("without TYPEFORM_ID", () => {
    it("shows fallback immediately when TYPEFORM_ID is empty", async () => {
      vi.stubEnv("NEXT_PUBLIC_TYPEFORM_ID", "");
      const TypeformEmbed = await importTypeformEmbed();
      render(<TypeformEmbed />);

      expect(screen.getByText(/couldn.t load/i)).toBeInTheDocument();
    });
  });
});
