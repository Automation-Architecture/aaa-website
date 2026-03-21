import { NextResponse } from "next/server";

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

export async function POST(request: Request) {
  if (!HUBSPOT_API_KEY) {
    return NextResponse.json(
      { error: "Newsletter service not configured" },
      { status: 503 },
    );
  }

  let email: string;
  try {
    const body = await request.json();
    email = body.email;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            email,
            lifecyclestage: "subscriber",
          },
        }),
      },
    );

    if (res.status === 409) {
      // Contact already exists — treat as success
      return NextResponse.json({ ok: true });
    }

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      console.error("HubSpot API error:", res.status, data);
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("HubSpot API request failed:", err);
    return NextResponse.json(
      { error: "Service unavailable" },
      { status: 503 },
    );
  }
}
