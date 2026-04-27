"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";
import { FOOTER_COLUMNS, RouteNames, SOCIAL_LINKS } from "@/constants";
import { isExternalHref } from "@/lib/utils";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        const apiMessage =
          typeof data?.message === "string"
            ? data.message
            : typeof data?.error === "string"
              ? data.error
              : null;
        setMessage(apiMessage ?? "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="bg-brand-white text-brand-gray mx-auto max-w-11/12 mt-20">
      <div className="border border-brand-gray2">
        <div className="grid grid-cols-1 min-[1025px]:grid-cols-[1fr_2fr_1fr]">
          <div className="flex items-center justify-center border-b border-brand-gray2 px-5 py-10 min-[1025px]:border-b-0 min-[1025px]:border-r min-[1025px]:px-10 min-[1025px]:py-12.5">
            <Image
              src="/images/logo-footer.png"
              alt="Automation Architecture AI"
              width={311}
              height={60}
              className="h-[3.3rem] w-auto"
            />
          </div>

          <div className="border-b border-brand-gray2 bg-brand-offwhite px-5 py-8 min-[1025px]:border-b-0 min-[1025px]:border-r min-[1025px]:px-[3.4375rem] min-[1025px]:py-10">
            <p className="text-[1rem] font-bold uppercase leading-[1.1] text-brand-black">
              Subscribe to be in touch
            </p>
            <form id="newsletter-form" className="mt-2.5" onSubmit={handleSubmit}>
              <div className="flex items-center border-b border-brand-divider px-2.5 py-2.5">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your E-mail"
                  className="w-full bg-transparent text-[1rem] font-normal text-brand-gray outline-none placeholder:text-brand-gray"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                />
              </div>
              {status === "success" && (
                <p className="mt-2 text-sm text-green-600">{message}</p>
              )}
              {status === "error" && (
                <p className="mt-2 text-sm text-red-600">{message}</p>
              )}
            </form>
          </div>

          <div className="flex items-center justify-center px-5 py-8 min-[1025px]:px-10 min-[1025px]:py-12.5">
            <button
              type="submit"
              form="newsletter-form"
              disabled={status === "loading"}
              className="cursor-pointer w-full rounded-tl-[0.875rem] rounded-tr-[0.1875rem] rounded-bl-[0.1875rem] rounded-br-2xl bg-brand-teal py-[0.9375rem] text-[1rem] font-normal uppercase text-brand-white transition-colors duration-300 transition-opacity hover:bg-brand-black hover:opacity-90 min-[1025px]:max-w-[20.9375rem] disabled:opacity-50"
            >
              {status === "loading" ? "SUBSCRIBING..." : "SUBSCRIBE"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 border-x border-brand-gray2 min-[1025px]:grid-cols-4">
        {FOOTER_COLUMNS.map((column, idx) => (
          <div
            key={column.title}
            className={[
              "flex flex-col px-5 py-7.5 min-[1025px]:px-15 min-[1025px]:py-12.5",
              "border-b border-brand-gray2",
              idx % 2 === 0 ? "border-r border-brand-gray2" : "",
              idx < FOOTER_COLUMNS.length - 1
                ? "min-[1025px]:border-r"
                : "min-[1025px]:border-r-0",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <h3 className="text-[1rem] font-bold uppercase text-brand-teal leading-none">
              {column.title}
            </h3>
            <ul className="mt-2.5 flex flex-col gap-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={isExternalHref(link.href) ? "_blank" : undefined}
                    rel={
                      isExternalHref(link.href) ? "noopener noreferrer" : undefined
                    }
                    className="text-[0.9375rem] font-normal text-brand-gray hover:text-brand-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar ── */}
      <div className="flex flex-col items-center gap-4 border border-brand-gray2 px-5 py-5 text-center min-[1025px]:flex-row min-[1025px]:justify-between min-[1025px]:px-15 min-[1025px]:py-10">
        <div className="flex items-center gap-2.75">
          <Link
            href={RouteNames.Privacy}
            className="text-[1rem] text-brand-gray font-normal hover:text-brand-teal"
          >
            Privacy Policy
          </Link>
          <span className="text-[1rem] text-brand-gray font-normal">|</span>
          <Link
            href={RouteNames.Terms}
            className="text-[1rem] text-brand-gray font-normal hover:text-brand-teal"
          >
            Terms of Service
          </Link>
        </div>

        {/* Social icons — visible on all screens, hidden on wide (sidebar handles it) */}
        <div className="flex items-center gap-3 wide:hidden" aria-label="Social media links">
          <Link
            href={SOCIAL_LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on X (Twitter)"
            className="flex size-9 items-center justify-center rounded-full bg-brand-black text-brand-white transition-colors duration-200 hover:bg-brand-lime hover:text-brand-black"
          >
            <Twitter className="size-4" />
          </Link>
          <Link
            href={SOCIAL_LINKS.medium}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read us on Medium"
            className="flex size-9 items-center justify-center rounded-full bg-brand-black text-brand-white transition-colors duration-200 hover:bg-brand-lime hover:text-brand-black"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </Link>
          <Link
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="flex size-9 items-center justify-center rounded-full bg-brand-black text-brand-white transition-colors duration-200 hover:bg-brand-lime hover:text-brand-black"
          >
            <Linkedin className="size-4" />
          </Link>
        </div>

        <p className="text-[0.75rem] font-normal text-brand-gray min-[1025px]:text-[1rem]">
          &copy; {new Date().getFullYear()} All Rights Reserved by Automation
          Architecture AI
        </p>
      </div>
    </footer>
  );
}
