import Link from "next/link";
import { FOOTER_COLUMNS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-brand-teal text-brand-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 tablet:px-6 desktop:py-16">
        <div className="grid grid-cols-2 gap-8 tablet:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-brand-lime uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-gray hover:text-brand-lime transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-brand-gray/20 pt-6">
          <p className="text-center text-xs text-brand-gray">
            &copy; 2026 Automation Architecture AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
