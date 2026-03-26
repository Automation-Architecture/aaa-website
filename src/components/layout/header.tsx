"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CTA, NAV_ITEMS, type NavItem, RouteNames } from "@/constants";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { cn, isExternalHref } from "@/lib/utils";

function NavCorners({ label, open }: { label: string; open?: boolean }) {
  const show = !!open;

  return (
    <span
      className={cn(
        "group relative inline-flex items-center justify-center px-[10px] py-[9.5px]",
        show && "text-brand-lime",
      )}
    >
      <span
        className={cn(
          "text-[1rem] font-normal text-brand-white transition-colors duration-300 ease-in-out group-hover:text-brand-lime",
          show && "text-brand-lime",
        )}
      >
        {label}
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "absolute left-[5px] top-[5px] h-[10px] w-[10px] border-l-2 border-t-2 border-brand-lime opacity-0 transition-opacity duration-300 ease-in-out",
          show ? "opacity-100" : "group-hover:opacity-100",
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          "absolute bottom-[5px] right-[5px] h-[10px] w-[10px] border-b-2 border-r-2 border-brand-lime opacity-0 transition-opacity duration-300 ease-in-out",
          show ? "opacity-100" : "group-hover:opacity-100",
        )}
      />
    </span>
  );
}

function IndustriesDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [offsetX, setOffsetX] = useState(0);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const el = rootRef.current;
      if (!el) return;
      if (!(e.target instanceof Node)) return;
      if (!el.contains(e.target)) setOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  function handleOpen() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = null;
    setOpen(true);
  }

  function handleDelayedClose() {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 140);
  }

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => {
      if (!open) {
        setOffsetX(0);
        return;
      }

      const contentEl = contentRef.current;
      const buttonEl = buttonRef.current;
      if (!contentEl || !buttonEl) return;

      const rect = contentEl.getBoundingClientRect();
      const padding = 8;

      let dx = 0;
      if (rect.right > window.innerWidth - padding) {
        dx -= rect.right - (window.innerWidth - padding);
      }
      if (rect.left < padding) {
        dx += padding - rect.left;
      }

      setOffsetX(dx);
    });

    return () => window.cancelAnimationFrame(raf);
  }, [open]);

  if (!item.children?.length) return null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="group relative inline-flex"
        aria-label={item.label}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        ref={buttonRef}
        onMouseEnter={handleOpen}
        onMouseLeave={handleDelayedClose}
      >
        <NavCorners label={item.label} open={open} />
      </button>

      {open ? (
        <div
          ref={contentRef}
          className="absolute left-0 top-full z-50 mt-2 w-[220px] rounded-[10px] border border-brand-gray/20 bg-brand-black p-2 shadow-lg"
          style={{ transform: `translateX(${offsetX}px)` }}
          onMouseEnter={handleOpen}
          onMouseLeave={handleDelayedClose}
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href ?? RouteNames.Home}
              target={isExternalHref(child.href) ? "_blank" : undefined}
              rel={isExternalHref(child.href) ? "noopener noreferrer" : undefined}
              onClick={() => setOpen(false)}
              className="block cursor-pointer rounded-[10px] px-3 py-2 text-[1rem] font-normal text-brand-white hover:bg-transparent hover:text-brand-lime focus:bg-transparent focus:text-brand-lime"
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-99 overflow-visible border-brand-gray bg-brand-black text-brand-cream">
      <div className="mx-auto grid h-[70px] max-w-[1920px] grid-cols-[auto_1fr_auto] items-center px-2.5 tablet:px-3 min-[1025px]:h-[100px] min-[1025px]:px-[50px]">
        <div className="flex items-center">
          <Logo
            variant="dark"
            iconOnly
            className="h-[40px] w-[40px] tablet:h-[44px] tablet:w-[44px] min-[1025px]:h-[48px] min-[1025px]:w-[48px] min-[1600px]:hidden"
          />
          <Logo
            variant="dark"
            className="hidden min-[1600px]:block h-[49px] w-auto"
          />

          <div
            className="hidden h-[50px] w-px bg-brand-gray/60 ml-[30px] mr-[30px] min-[1025px]:block"
            aria-hidden="true"
          />
        </div>

        <nav
          className="hidden justify-self-center items-center min-[1025px]:flex"
          aria-label="Primary navigation"
        >
          <div className="flex items-center justify-center gap-[25px]">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <IndustriesDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href ?? RouteNames.Home}
                  aria-label={item.label}
                >
                  <NavCorners label={item.label} />
                </Link>
              ),
            )}
          </div>
        </nav>

        <div className="flex items-center justify-self-end gap-3">
          <div className="hidden items-center gap-3 min-[1025px]:flex">
            <div className="flex items-center gap-[25px] border-l border-brand-gray/60 pl-[30px]">
              <Link
                href={CTA.href}
                className="group flex items-center gap-[10px] text-[1rem] font-normal text-brand-white transition-colors duration-300 ease-in-out hover:text-brand-lime"
                aria-label="Our AI Blueprint"
              >
                <span
                  className="relative size-[20px] shrink-0"
                  aria-hidden="true"
                >
                  <span className="absolute left-[2.5px] top-[2.5px] size-[5px] rounded-[2.5px] bg-brand-lime" />
                  <span className="absolute right-[2.5px] top-[2.5px] size-[5px] rounded-[2.5px] bg-brand-lime" />
                  <span className="absolute left-[2.5px] bottom-[2.5px] size-[5px] rounded-[2.5px] bg-brand-lime" />
                  <span className="absolute right-[2.5px] bottom-[2.5px] size-[5px] rounded-[2.5px] bg-brand-lime" />
                </span>
                <span>Our AI Blueprint</span>
              </Link>

              <Button
                asChild
                size="default"
                className="h-[50px] rounded-[10px] px-[30px] py-[15px] text-[1rem]"
              >
                <Link href={CTA.href}>{CTA.label}</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3 min-[1025px]:hidden">
            <Button asChild size="xs" className="h-10 px-2.5 text-[1rem]">
              <Link href={CTA.href}>{CTA.label}</Link>
            </Button>
            <Button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              variant="ghost"
              size="icon-sm"
              className={cn(
                "text-brand-cream transition-colors duration-300",
                mobileOpen
                  ? "bg-brand-gray/20 hover:bg-brand-gray/20"
                  : "hover:bg-brand-gray/20",
              )}
            >
              <Image
                src={mobileOpen ? "/icons/close.svg" : "/icons/hamburger.svg"}
                alt=""
                aria-hidden="true"
                width={30}
                height={24}
                className="h-4 tablet:h-4.5 w-auto object-contain"
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop decorative corner cuts */}
      <div className="pointer-events-none absolute bottom-0 bg-transparent left-0 z-40 hidden h-[30px] w-[30px] min-[1025px]:block">
        <div className="h-full w-full bg-brand-cream [clip-path:polygon(0_0,100%_100%,0_100%)]" />
      </div>
      <div className="pointer-events-none absolute bottom-0 bg-transparent right-0 z-40 hidden h-[30px] w-[30px] min-[1025px]:block">
        <div className="h-full w-full bg-brand-cream [clip-path:polygon(100%_0,100%_100%,0_100%)]" />
      </div>

      <div
        className={`min-[1025px]:hidden border-t border-brand-gray/30 bg-brand-black px-3 tablet:px-4 py-3 transition-all duration-300 ${mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 overflow-hidden opacity-0 p-0 border-t-0"}`}
      >
        <nav className="space-y-3" aria-label="Mobile navigation">
          <Link
            href={CTA.href}
            className="flex items-center gap-[10px] rounded-[5px] bg-brand-lime px-[10px] py-[10px]"
            onClick={() => setMobileOpen(false)}
          >
            <span className="relative size-[20px]" aria-hidden="true">
              <span className="absolute left-[2.5px] top-[2.5px] size-[5px] rounded-[2.5px] bg-brand-teal" />
              <span className="absolute right-[2.5px] top-[2.5px] size-[5px] rounded-[2.5px] bg-brand-teal" />
              <span className="absolute left-[2.5px] bottom-[2.5px] size-[5px] rounded-[2.5px] bg-brand-teal" />
              <span className="absolute right-[2.5px] bottom-[2.5px] size-[5px] rounded-[2.5px] bg-brand-teal" />
            </span>
            <span className="text-[1rem] font-normal text-brand-black">
              Our AI Blueprint
            </span>
          </Link>

          {NAV_ITEMS.map((item) =>
            item.children ? (
              <div key={item.label} className="space-y-2">
                <p className="text-[1rem] font-normal text-brand-cream">
                  {item.label}
                </p>
                <div className="pl-3 space-y-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href ?? RouteNames.Home}
                      target={isExternalHref(child.href) ? "_blank" : undefined}
                      rel={
                        isExternalHref(child.href)
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block text-[1rem] font-normal text-brand-cream hover:text-brand-lime"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href ?? RouteNames.Home}
                className="block text-[1rem] font-normal text-brand-cream hover:text-brand-lime"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
