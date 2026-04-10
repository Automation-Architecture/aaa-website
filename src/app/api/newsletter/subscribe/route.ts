import { NextResponse } from "next/server";
import { appConfig, brandConfig } from "@/config";
import {
  buildNewsletterConfirmationEmailHtml,
  newsletterConfirmationSubject,
} from "@/lib/newsletter-confirmation-email";

const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID ?? "103");
const BREVO_SENDER_EMAIL =
  process.env.BREVO_SENDER_EMAIL ?? brandConfig.AUTHOR_EMAIL;
/** If false, skip confirmation email (contact + list still updated). */
const BREVO_SEND_CONFIRMATION_EMAIL =
  process.env.BREVO_SEND_CONFIRMATION_EMAIL !== "false";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const contactRes = await fetch("https://api.brevo.com/v3/contacts", {
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

    if (!contactRes.ok) {
      const bodyText = await contactRes.text();
      let body: { code?: string } = {};
      try {
        body = bodyText ? JSON.parse(bodyText) : {};
      } catch {
        return NextResponse.json(
          { message: bodyText || "Invalid response from Brevo." },
          { status: contactRes.status },
        );
      }

      if (body?.code === "duplicate_parameter") {
        return NextResponse.json({ message: "Already subscribed!" });
      }

      console.error("Brevo contacts API error:", body);
      return NextResponse.json(body, { status: contactRes.status });
    }

    if (BREVO_SEND_CONFIRMATION_EMAIL) {
      const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
        appConfig.siteUrl;
      const logoUrl = `${siteUrl}/images/logo-footer.png`;

      const mailRes = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": BREVO_API_KEY,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          sender: {
            name: brandConfig.NAME,
            email: BREVO_SENDER_EMAIL,
          },
          to: [{ email }],
          subject: newsletterConfirmationSubject(),
          htmlContent: buildNewsletterConfirmationEmailHtml({
            siteUrl,
            logoUrl,
          }),
          tags: ["newsletter-confirmation"],
        }),
      });

      if (!mailRes.ok) {
        const errText = await mailRes.text();
        let errBody: unknown;
        try {
          errBody = errText ? JSON.parse(errText) : {};
        } catch {
          errBody = errText;
        }
        console.error("Brevo transactional email failed:", {
          status: mailRes.status,
          body: errBody,
        });
        // Contact is already saved; unverified sender / SMTP limits should not block signup.
      }
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
