"use client";

import type { FormEvent } from "react";
import { useState } from "react";

// TODO: Wire to newsletter API endpoint (HubSpot, Mailchimp, etc.)
// Currently displays the form but shows "coming soon" on submit
// until a backend endpoint is connected.

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p role="status" aria-live="polite" className="text-sm font-medium text-brand-teal">
        Thanks! Newsletter coming soon &mdash; we&rsquo;ll notify you.
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
      />
      <button
        type="submit"
        className="rounded-[10px] bg-brand-teal px-6 py-2.5 text-sm font-bold text-brand-cream uppercase tracking-wide hover:bg-brand-black transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
