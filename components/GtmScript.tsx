import Script from "next/script";

const RAW_GTM_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
const GTM_ID =
  RAW_GTM_ID && /^[A-Za-z0-9-]+$/.test(RAW_GTM_ID) ? RAW_GTM_ID : undefined;

/**
 * GTM consent defaults + container snippet.
 *
 * Server Component (no "use client") so that the consent-defaults Script
 * with strategy="beforeInteractive" is injected before hydration,
 * guaranteeing deny-all defaults are set before the GTM container loads.
 */
export function GtmScript() {
  if (!GTM_ID) return null;

  return (
    <>
      {/* Consent defaults — deny-all until CookieYes updates */}
      <Script id="gtm-consent-defaults" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      {/* GTM container snippet */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
    </>
  );
}

/**
 * GTM noscript iframe — render as the first child of <body> in
 * the root layout. App Router renders it as first body child,
 * which is the closest equivalent to "immediately after <body>".
 */
export function GtmNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
