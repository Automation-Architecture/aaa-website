"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { CTA, NAV_ITEMS, type NavItem } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function enter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }

  function leave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="industries-dropdown"
        className="flex items-center gap-1 text-brand-cream hover:text-brand-lime transition-colors"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
      >
        {item.label}
        <svg
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && item.children && (
        <ul id="industries-dropdown" className="absolute top-full left-0 mt-2 w-48 rounded-md bg-brand-teal border border-brand-gray/20 py-2 shadow-lg">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href!}
                className="block px-4 py-2 text-sm text-brand-cream hover:text-brand-lime hover:bg-brand-teal/80 transition-colors"
                onClick={() => trackEvent("nav_click", { nav_item: child.label })}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function MobileDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between text-2xl text-brand-cream hover:text-brand-lime transition-colors"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <svg
          className={cn("h-5 w-5 transition-transform", open && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && item.children && (
        <ul className="mt-2 ml-4 space-y-2">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href!}
                className="block text-xl text-brand-gray hover:text-brand-lime transition-colors"
                onClick={() => trackEvent("nav_click", { nav_item: child.label })}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  /* Lock body scroll when overlay is open */
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close on Escape */
  useEffect(() => {
    if (!menuOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  /* Focus trap */
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function onTab(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    first.focus();
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 bg-brand-teal text-brand-cream"
      style={{ zIndex: "var(--z-header)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 tablet:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide text-brand-cream hover:text-brand-lime transition-colors">
          AAA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden tablet:flex items-center gap-6" aria-label="Primary">
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="text-brand-cream hover:text-brand-lime transition-colors"
                onClick={() => trackEvent("nav_click", { nav_item: item.label })}
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            href={CTA.href}
            className="ml-2 rounded-md bg-brand-lime px-4 py-2 text-sm font-bold text-brand-teal hover:opacity-90 transition-opacity"
            onClick={() => trackEvent("cta_click", { cta_location: "header" })}
          >
            {CTA.label}
          </Link>
        </nav>

        {/* Hamburger button */}
        <button
          ref={toggleRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="tablet:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={cn("block h-0.5 w-6 bg-brand-cream transition-transform", menuOpen && "translate-y-2 rotate-45")}
          />
          <span
            className={cn("block h-0.5 w-6 bg-brand-cream transition-opacity", menuOpen && "opacity-0")}
          />
          <span
            className={cn("block h-0.5 w-6 bg-brand-cream transition-transform", menuOpen && "-translate-y-2 -rotate-45")}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-0 top-0 bg-brand-teal flex flex-col tablet:hidden"
          style={{ zIndex: "var(--z-hamburger)" }}
        >
          {/* Overlay header */}
          <div className="flex items-center justify-between px-4 py-3">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-xl font-bold tracking-wide text-brand-cream"
            >
              AAA
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="p-2"
              onClick={closeMenu}
            >
              <svg className="h-6 w-6 text-brand-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-6" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <MobileDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={closeMenu}
                  className="block text-2xl text-brand-cream hover:text-brand-lime transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              href={CTA.href}
              onClick={(e) => {
                trackEvent("cta_click", { cta_location: "header_mobile" });
                closeMenu();
              }}
              className="mt-4 block rounded-md bg-brand-lime px-6 py-3 text-center text-lg font-bold text-brand-teal"
            >
              {CTA.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
