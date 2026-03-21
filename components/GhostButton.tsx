import Link from "next/link";
import { cn } from "@/lib/cn";

interface GhostButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function GhostButton({ href, children, className }: GhostButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center min-h-[50px] px-8 py-3.5 border border-brand-black text-brand-black font-bold text-lg rounded-[10px] transition-colors duration-150 hover:bg-brand-lime hover:border-brand-lime hover:text-brand-black focus:outline-2 focus:outline-offset-2 focus:outline-brand-lime uppercase tracking-wide",
        className,
      )}
    >
      {children}
    </Link>
  );
}
