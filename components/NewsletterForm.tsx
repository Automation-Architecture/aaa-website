"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        trackEvent("newsletter_subscribe", { method: "footer_form" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" aria-live="polite" className="text-sm font-medium text-brand-teal">
        Thanks! You&rsquo;re subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-1 w-full tablet:w-auto gap-3">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your E-mail"
        className="flex-1 border-b border-brand-gray/40 bg-transparent px-2 py-2 text-sm outline-none focus:border-brand-teal placeholder:text-brand-gray"
        required
        disabled={status === "loading"}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-[10px] bg-brand-teal px-6 py-2.5 text-sm font-bold text-brand-cream uppercase tracking-wide hover:bg-brand-black transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "..." : "Subscribe"}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-red-600 self-center">
          Failed — try again.
        </p>
      )}
    </form>
  );
}
