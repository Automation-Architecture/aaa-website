import Link from "next/link";

interface GhostButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function GhostButton({ href, children, className = "" }: GhostButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center min-h-[48px] px-6 py-3 border-2 border-brand-teal text-brand-teal font-semibold rounded-lg transition-colors duration-150 hover:bg-brand-lime hover:border-brand-lime hover:text-brand-teal focus:outline-2 focus:outline-offset-2 focus:outline-brand-lime ${className}`}
    >
      {children}
    </Link>
  );
}
