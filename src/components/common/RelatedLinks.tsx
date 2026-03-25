import Link from "next/link";

interface RelatedLinksProps {
  links: { label: string; href: string }[];
}

export function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <nav aria-label="Related pages">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-gray">
        Related
      </p>
      <ul className="mt-3 flex flex-wrap gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-block rounded-[10px] border border-brand-teal px-4 py-2 text-sm text-brand-teal transition-colors hover:bg-brand-teal hover:text-brand-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
