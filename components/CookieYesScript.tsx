import Script from "next/script";

const RAW_COOKIEYES_ID = process.env.NEXT_PUBLIC_COOKIEYES_ID;
const COOKIEYES_ID =
  RAW_COOKIEYES_ID && /^[A-Za-z0-9-]+$/.test(RAW_COOKIEYES_ID)
    ? RAW_COOKIEYES_ID
    : undefined;

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
