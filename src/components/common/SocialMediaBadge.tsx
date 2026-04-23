import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

const socialItems = [
  {
    key: "twitter",
    href: SOCIAL_LINKS.twitter,
    label: "Follow us on X (Twitter)",
    icon: <Twitter className="size-4.5" />,
  },
  {
    key: "medium",
    href: SOCIAL_LINKS.medium,
    label: "Read us on Medium",
    icon: <MediumIcon className="size-4.5" />,
  },
  {
    key: "linkedin",
    href: SOCIAL_LINKS.linkedin,
    label: "Connect on LinkedIn",
    icon: <Linkedin className="size-4.5" />,
  },
] as const;

export function SocialMediaBadge() {
  return (
    <aside
      className="fixed right-0 top-1/2 z-40 -translate-y-1/2 hidden wide:flex flex-col"
      aria-label="Social media links"
    >
      {socialItems.map(({ key, href, label, icon }) => (
        <Link
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex size-10 items-center justify-center bg-brand-black text-brand-white transition-colors duration-200 hover:bg-brand-lime hover:text-brand-black"
        >
          {icon}
        </Link>
      ))}
    </aside>
  );
}
