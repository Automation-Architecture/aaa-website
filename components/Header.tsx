"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { CTA, SECONDARY_CTA, NAV_ITEMS, type NavItem } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";
import { Logo } from "@/components/Logo";

function GridIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <rect x="0" y="0" width="7" height="7" rx="1.5" />
      <rect x="9" y="0" width="7" height="7" rx="1.5" />
      <rect x="0" y="9" width="7" height="7" rx="1.5" />
      <rect x="9" y="9" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function NavBracketLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="relative px-2.5 py-1.5 text-lg font-medium text-brand-cream hover:text-brand-lime transition-colors whitespace-nowrap group"
      onClick={onClick}
    >
      {/* Top-left bracket */}
      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-brand-lime opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" aria-hidden="true" />
      {/* Bottom-right bracket */}
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-brand-lime opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" aria-hidden="true" />
      {children}
    </Link>
  );
}

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
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        className="relative flex items-center gap-1 px-2.5 py-1.5 text-lg font-medium text-brand-cream hover:text-brand-lime transition-colors group"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-brand-lime opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" aria-hidden="true" />
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-brand-lime opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" aria-hidden="true" />
        {item.label}
        <svg
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && item.children && (
        <ul className="absolute top-full left-0 mt-2 w-48 rounded-md bg-brand-black border border-brand-gray/20 py-2 shadow-lg">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href ?? "#"}
                className="block px-4 py-2 text-sm text-brand-cream hover:text-brand-lime hover:bg-brand-white/5 transition-colors"
                onClick={() =>
                  trackEvent("nav_click", { nav_item: child.label })
                }
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

function MobileDropdown({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        className="flex w-full items-center justify-between text-lg font-medium text-brand-cream hover:text-brand-lime transition-colors py-2.5"
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && item.children && (
        <ul className="mt-2 ml-4 space-y-2">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href ?? "#"}
                className="block text-base text-brand-gray hover:text-brand-lime transition-colors"
                onClick={() => {
                  trackEvent("nav_click", { nav_item: child.label });
                  onNavigate();
                }}
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

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeMenu();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
      className="sticky top-0 bg-brand-black text-brand-cream"
      style={{ zIndex: "var(--z-header)" }}
    >
      <div className="mx-auto flex max-w-[1920px] items-center h-[70px] desktop:h-[100px]">
        {/* Logo zone */}
        <div className="flex items-center px-4 tablet:px-6 desktop:px-8 shrink-0">
          <Logo variant="light" />
        </div>

        {/* Vertical divider */}
        <div className="hidden desktop:block w-px h-full bg-brand-gray/30" />

        {/* Desktop nav */}
        <nav
          className="hidden desktop:flex items-center gap-6 px-8 flex-1"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} />
            ) : (
              <NavBracketLink
                key={item.href}
                href={item.href ?? "#"}
                onClick={() =>
                  trackEvent("nav_click", { nav_item: item.label })
                }
              >
                {item.label}
              </NavBracketLink>
            ),
          )}
        </nav>

        {/* Vertical divider */}
        <div className="hidden desktop:block w-px h-full bg-brand-gray/30" />

        {/* CTA zone */}
        <div className="hidden desktop:flex items-center gap-4 px-8 shrink-0">
          <Link
            href={SECONDARY_CTA.href}
            className="flex items-center gap-2 text-brand-cream hover:text-brand-lime transition-colors"
            onClick={() =>
              trackEvent("cta_click", { cta_location: "header_secondary" })
            }
          >
            {/* Grid icon */}
            <GridIcon />
            {SECONDARY_CTA.label}
          </Link>

          <Link
            href={CTA.href}
            className="rounded-[10px] bg-brand-lime px-6 py-2.5 text-sm font-bold text-brand-black hover:bg-brand-cream transition-colors uppercase tracking-wide"
            onClick={() =>
              trackEvent("cta_click", { cta_location: "header" })
            }
          >
            {CTA.label}
          </Link>
        </div>

        {/* Hamburger button — lime square with rounded corners per Figma spec */}
        <button
          ref={toggleRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="desktop:hidden ml-auto mr-4 flex h-6 w-6 flex-col items-center justify-center gap-[3px] rounded-[10px] bg-brand-lime p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={cn(
              "block h-0.5 w-3.5 bg-brand-black transition-transform",
              menuOpen && "translate-y-[5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-3.5 bg-brand-black transition-opacity",
              menuOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-3.5 bg-brand-black transition-transform",
              menuOpen && "-translate-y-[5px] -rotate-45",
            )}
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
          className="fixed inset-0 top-0 bg-brand-black flex flex-col desktop:hidden"
          style={{ zIndex: "var(--z-hamburger)" }}
        >
          {/* Overlay header */}
          <div className="flex items-center justify-between px-4 py-4">
            <Logo variant="light" />
            <div className="flex items-center gap-3">
              <Link
                href={CTA.href}
                onClick={() => {
                  trackEvent("cta_click", { cta_location: "header_mobile" });
                  closeMenu();
                }}
                className="rounded-[10px] bg-brand-lime px-5 py-2 text-sm font-bold text-brand-black hover:bg-brand-cream transition-colors uppercase tracking-wide"
              >
                {CTA.label}
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                className="p-2"
                onClick={closeMenu}
              >
                <svg
                  className="h-6 w-6 text-brand-cream"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Nav links */}
          <nav
            className="flex-1 overflow-y-auto px-[30px] py-[30px] space-y-0"
            aria-label="Mobile navigation"
          >
            {/* Blueprint highlight link */}
            <Link
              href={SECONDARY_CTA.href}
              onClick={() => {
                trackEvent("cta_click", { cta_location: "header_secondary_mobile" });
                closeMenu();
              }}
              className="inline-flex items-center gap-2 rounded-[5px] bg-brand-lime px-2.5 py-2.5 text-lg font-normal text-brand-black"
            >
              <GridIcon />
              {SECONDARY_CTA.label}
            </Link>

            {NAV_ITEMS.map((item) =>
              item.children ? (
                <MobileDropdown key={item.label} item={item} onNavigate={closeMenu} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href ?? "#"}
                  onClick={closeMenu}
                  className="block text-lg text-brand-cream font-medium hover:text-brand-lime transition-colors py-2.5"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
