"use client";

import Script from "next/script";

const COOKIEYES_ID = process.env.NEXT_PUBLIC_COOKIEYES_ID;

export function CookieYesScript() {
  if (!COOKIEYES_ID) return null;

  return (
    <Script
      id="cookieyes-script"
      src={`https://cdn-cookieyes.com/client_data/${COOKIEYES_ID}/script.js`}
      strategy="afterInteractive"
    />
  );
}
