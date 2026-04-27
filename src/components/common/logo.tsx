import Image from "next/image";
import Link from "next/link";
import { RouteNames } from "@/constants";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  iconOnly?: boolean;
  priority?: boolean;
}

export function Logo({ variant = "light", className, iconOnly = false, priority = true }: LogoProps) {
  const src = iconOnly
    ? "/images/logo-icon.svg"
    : variant === "light"
      ? "/images/logo-full.svg"
      : "/images/logo-full-dark.svg";

  const baseClass = iconOnly ? "h-[49px] w-[49px]" : "h-[49px] w-auto";
  const finalClassName = cn(baseClass, className);

  return (
    <Link href={RouteNames.Home} aria-label="Automation Architecture AI home">
      {/* Match the intrinsic aspect ratio of `logo-full*.svg` (255x49) */}
      <Image
        src={src}
        alt="Automation Architecture AI"
        width={iconOnly ? 49 : 255}
        height={49}
        priority={priority}
        className={finalClassName}
      />
    </Link>
  );
}
