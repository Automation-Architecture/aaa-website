"use client";

import Link from "next/link";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

interface TrackedLinkProps
  extends React.ComponentPropsWithoutRef<typeof Link> {
  event: AnalyticsEvent;
  eventParams?: Record<string, string>;
}

export function TrackedLink({
  event,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(event, eventParams);
        if (typeof onClick === "function") onClick(e);
      }}
    />
  );
}
