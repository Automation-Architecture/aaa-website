import Link from "next/link";

interface RelatedLinksProps {
  links: { label: string; href: string }[];
}

export function RelatedLinks({ links }: RelatedLinksProps) {
  return (
    <nav aria-label="Related pages" className="py-6 border-t border-brand-gray/20">
      <span className="font-semibold text-brand-teal">Related: </span>
      {links.map((link, i) => (
        <span key={link.href}>
          <Link
            href={link.href}
            className="text-brand-teal underline underline-offset-2 hover:text-brand-lime transition-colors"
          >
            {link.label}
          </Link>
          {i < links.length - 1 && <span className="mx-2 text-brand-gray">|</span>}
        </span>
      ))}
    </nav>
  );
}
