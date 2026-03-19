import Link from "next/link";
import Image from "next/image";

export function Logo({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const src =
    variant === "dark" ? "/images/logo-full-dark.svg" : "/images/logo-full.svg";

  return (
    <Link href="/" className={`flex items-center shrink-0 ${className}`}>
      <Image
        src={src}
        alt="Automation Architecture AI"
        width={137}
        height={29}
        preload
      />
    </Link>
  );
}
