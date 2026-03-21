/**
 * Tests for POST /api/subscribe
 *
 * Uses dynamic imports with vi.resetModules() so each test gets a fresh
 * module-level rateMap (no cross-test state leakage).
 */

// Mock next/server before any imports
vi.mock("next/server", () => ({
  NextResponse: {
    json: (body: unknown, init?: ResponseInit) =>
      new Response(JSON.stringify(body), {
        ...init,
        headers: { "content-type": "application/json" },
      }),
  },
}));

const HUBSPOT_URL = "https://api.hubapi.com/crm/v3/objects/contacts";

/** Helper: import a fresh copy of the route module */
async function importRoute() {
  return import("./route") as Promise<{
    POST: (request: Request) => Promise<Response>;
  }>;
}

function makeRequest(body: unknown, ip = "1.2.3.4"): Request {
  return new Request("http://localhost/api/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/subscribe", () => {
  const originalFetch = globalThis.fetch;
  const mockFetch = vi.fn<typeof fetch>();

  beforeEach(() => {
    vi.resetModules();
    vi.stubEnv("HUBSPOT_ACCESS_TOKEN", "test-token");
    globalThis.fetch = mockFetch;
    mockFetch.mockReset();
  });

  afterAll(() => {
    globalThis.fetch = originalFetch;
    vi.unstubAllEnvs();
  });

  // ── Environment ──────────────────────────────────────

  it("returns 503 when HUBSPOT_ACCESS_TOKEN is not set", async () => {
    vi.stubEnv("HUBSPOT_ACCESS_TOKEN", "");
    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: "a@b.com" }));
    expect(res.status).toBe(503);
    const data = await res.json();
    expect(data.error).toMatch(/not configured/i);
    expect(mockFetch).not.toHaveBeenCalled();
  });

  // ── Input validation ─────────────────────────────────

  it("returns 400 for non-JSON body", async () => {
    const { POST } = await importRoute();
    const req = new Request("http://localhost/api/subscribe", {
      method: "POST",
      headers: { "x-forwarded-for": "1.2.3.4" },
      body: "not json",
    });
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("returns 400 when email is missing", async () => {
    const { POST } = await importRoute();
    const res = await POST(makeRequest({}));
    expect(res.status).toBe(400);
  });

  it("returns 400 when email is not a string", async () => {
    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: 123 }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for invalid email format", async () => {
    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: "notanemail" }));
    expect(res.status).toBe(400);
  });

  it("returns 400 for empty email after trim", async () => {
    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: "   " }));
    expect(res.status).toBe(400);
  });

  // ── HubSpot integration ──────────────────────────────

  it("sends correct payload to HubSpot and returns 200", async () => {
    mockFetch.mockResolvedValueOnce(new Response("{}", { status: 201 }));

    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: "  Test@Example.COM  " }));

    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data.ok).toBe(true);

    // Verify HubSpot was called with sanitized email
    expect(mockFetch).toHaveBeenCalledOnce();
    const [url, opts] = mockFetch.mock.calls[0];
    expect(url).toBe(HUBSPOT_URL);
    const body = JSON.parse(opts!.body as string);
    expect(body.properties.email).toBe("test@example.com");
    expect(body.properties.lifecyclestage).toBe("subscriber");
  });

  it("returns 200 on 409 (contact already exists)", async () => {
    mockFetch.mockResolvedValueOnce(new Response("{}", { status: 409 }));

    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: "a@b.com" }));
    expect(res.status).toBe(200);
  });

  it("returns 502 on HubSpot error", async () => {
    mockFetch.mockResolvedValueOnce(
      new Response(JSON.stringify({ correlationId: "abc123" }), { status: 500 }),
    );

    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: "a@b.com" }));
    expect(res.status).toBe(502);
  });

  it("returns 503 on network failure", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network error"));

    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: "a@b.com" }));
    expect(res.status).toBe(503);
  });

  it("returns 503 on fetch timeout (AbortError)", async () => {
    const abortError = new DOMException("The operation was aborted", "AbortError");
    mockFetch.mockRejectedValueOnce(abortError);

    const { POST } = await importRoute();
    const res = await POST(makeRequest({ email: "a@b.com" }));
    expect(res.status).toBe(503);
    const data = await res.json();
    expect(data.error).toMatch(/unavailable/i);
  });

  // ── Rate limiting ────────────────────────────────────

  it("allows up to 5 requests then returns 429", async () => {
    mockFetch.mockResolvedValue(new Response("{}", { status: 201 }));

    const { POST } = await importRoute();

    for (let i = 0; i < 5; i++) {
      const res = await POST(makeRequest({ email: "a@b.com" }, "10.0.0.1"));
      expect(res.status).toBe(200);
    }

    const res = await POST(makeRequest({ email: "a@b.com" }, "10.0.0.1"));
    expect(res.status).toBe(429);
  });

  it("rate limits per IP (different IPs are independent)", async () => {
    mockFetch.mockResolvedValue(new Response("{}", { status: 201 }));

    const { POST } = await importRoute();

    // Exhaust IP1
    for (let i = 0; i < 5; i++) {
      await POST(makeRequest({ email: "a@b.com" }, "10.0.0.1"));
    }

    // IP2 should still work
    const res = await POST(makeRequest({ email: "a@b.com" }, "10.0.0.2"));
    expect(res.status).toBe(200);
  });

  it("uses 'unknown' when x-forwarded-for is missing", async () => {
    mockFetch.mockResolvedValue(new Response("{}", { status: 201 }));

    const { POST } = await importRoute();
    const req = new Request("http://localhost/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "a@b.com" }),
    });
    const res = await POST(req);
    expect(res.status).toBe(200);
  });
});
