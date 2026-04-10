import { NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID ?? "0");

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));

      // Brevo returns "duplicate_parameter" when the contact already exists
      if (body?.code === "duplicate_parameter") {
        return NextResponse.json({ message: "Already subscribed!" });
      }

      console.error("Brevo API error:", body);
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Newsletter subscribe error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
