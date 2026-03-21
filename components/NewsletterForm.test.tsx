import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewsletterForm } from "./NewsletterForm";

const mockFetch = vi.fn<typeof fetch>();

beforeEach(() => {
  globalThis.fetch = mockFetch;
  mockFetch.mockReset();
  window.dataLayer = [];
});

describe("NewsletterForm", () => {
  it("renders email input and subscribe button", () => {
    render(<NewsletterForm />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });

  it("shows success message on successful submission", async () => {
    mockFetch.mockResolvedValueOnce(new Response("{}", { status: 200 }));
    const user = userEvent.setup();

    render(<NewsletterForm />);
    await user.type(screen.getByLabelText(/email address/i), "test@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent(/subscribed/i);
    });
  });

  it("shows error message on failed response", async () => {
    mockFetch.mockResolvedValueOnce(new Response("{}", { status: 400 }));
    const user = userEvent.setup();

    render(<NewsletterForm />);
    await user.type(screen.getByLabelText(/email address/i), "test@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(/failed/i);
    });
  });

  it("shows error message on network failure", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network error"));
    const user = userEvent.setup();

    render(<NewsletterForm />);
    await user.type(screen.getByLabelText(/email address/i), "test@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent(/failed/i);
    });
  });

  it("disables input and button during loading", async () => {
    // Never-resolving promise to keep loading state
    mockFetch.mockReturnValueOnce(new Promise(() => {}));
    const user = userEvent.setup();

    render(<NewsletterForm />);
    await user.type(screen.getByLabelText(/email address/i), "test@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    await waitFor(() => {
      expect(screen.getByLabelText(/email address/i)).toBeDisabled();
      expect(screen.getByRole("button")).toBeDisabled();
      expect(screen.getByRole("button")).toHaveTextContent(/subscribing/i);
    });
  });

  it("sends trimmed email to API", async () => {
    mockFetch.mockResolvedValueOnce(new Response("{}", { status: 200 }));
    const user = userEvent.setup();

    render(<NewsletterForm />);
    await user.type(screen.getByLabelText(/email address/i), "  test@example.com  ");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledOnce();
    });

    const body = JSON.parse(
      (mockFetch.mock.calls[0][1] as RequestInit).body as string,
    );
    expect(body.email).toBe("test@example.com");
  });

  it("tracks newsletter_subscribe event on success", async () => {
    mockFetch.mockResolvedValueOnce(new Response("{}", { status: 200 }));
    const user = userEvent.setup();

    render(<NewsletterForm />);
    await user.type(screen.getByLabelText(/email address/i), "test@example.com");
    await user.click(screen.getByRole("button", { name: /subscribe/i }));

    await waitFor(() => {
      expect(window.dataLayer).toContainEqual({
        event: "newsletter_subscribe",
        method: "footer_form",
      });
    });
  });
});
