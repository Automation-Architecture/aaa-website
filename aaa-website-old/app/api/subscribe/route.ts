import { NextResponse } from "next/server";

const HUBSPOT_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

/** Simple in-memory rate limiter: max 5 requests per IP per minute */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  if (!HUBSPOT_TOKEN) {
    return NextResponse.json(
      { error: "Newsletter service not configured" },
      { status: 503 },
    );
  }

  // Rate limit by IP
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 },
    );
  }

  // Parse and sanitize email
  let email: unknown;
  try {
    const body = await request.json();
    email = body.email;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof email !== "string") {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const sanitized = email.trim().toLowerCase();
  if (!sanitized || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitized)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    const res = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUBSPOT_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            email: sanitized,
            lifecyclestage: "subscriber",
          },
        }),
        signal: controller.signal,
      },
    );

    clearTimeout(timeout);

    if (res.status === 409) {
      // Contact already exists — treat as success
      return NextResponse.json({ ok: true });
    }

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      const correlationId = data?.correlationId ?? "unknown";
      console.error("HubSpot API error:", res.status, "correlationId:", correlationId);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      console.error("HubSpot API request timed out");
    } else {
      console.error("HubSpot API request failed");
    }
    return NextResponse.json(
      { error: "Service unavailable" },
      { status: 503 },
    );
  }
}
