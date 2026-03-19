import Link from "next/link";
import { FOOTER_COLUMNS } from "@/lib/site-config";
import { CookiePreferencesLink } from "@/components/CookiePreferencesLink";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-brand-cream text-brand-teal">
      {/* Subscribe section */}
      <div className="mx-auto max-w-7xl px-4 tablet:px-6">
        <div className="flex flex-col tablet:flex-row items-start tablet:items-center gap-6 py-10 border-b border-brand-gray/20">
          <div className="shrink-0">
            <Logo variant="dark" />
          </div>
          <div className="hidden tablet:block w-px self-stretch bg-brand-gray/20" />
          <div className="flex-1 flex flex-col tablet:flex-row items-start tablet:items-center gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
              Subscribe to be in touch
            </h3>
            <div className="flex flex-1 w-full tablet:w-auto gap-3">
              <input
                type="email"
                placeholder="Your E-mail"
                className="flex-1 border-b border-brand-gray/40 bg-transparent px-2 py-2 text-sm outline-none focus:border-brand-teal placeholder:text-brand-gray"
              />
              <button
                type="button"
                className="rounded-full bg-brand-teal px-6 py-2.5 text-sm font-bold text-brand-cream uppercase tracking-wide hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-7xl px-4 py-10 tablet:px-6">
        <div className="grid grid-cols-2 tablet:grid-cols-4 tablet:divide-x tablet:divide-brand-gray/20 gap-y-8">
          {FOOTER_COLUMNS.map((column, index) => (
            <div key={column.title} className={index > 0 ? "tablet:pl-8" : ""}>
              <h3 className="text-sm font-semibold text-brand-teal uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-gray hover:text-brand-teal transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-4 tablet:px-6">
        <div className="flex flex-col tablet:flex-row items-center justify-between gap-4 border-t border-brand-gray/20 py-6">
          <div className="flex items-center gap-4 text-sm text-brand-gray">
            <Link
              href="/privacy"
              className="hover:text-brand-teal transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-brand-teal transition-colors"
            >
              Terms of Service
            </Link>
            <CookiePreferencesLink />
          </div>
          <p className="text-sm text-brand-gray">
            &copy; {new Date().getFullYear()} All Rights Reserved by Automation
            Architecture AI
          </p>
        </div>
      </div>
    </footer>
  );
}
