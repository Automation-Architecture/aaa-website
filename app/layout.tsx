import type { Metadata } from "next";
import { Jura } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
import { SocialSidebar } from "@/components/SocialSidebar";
import { GtmScript, GtmNoScript } from "@/components/GtmScript";
import { CookieYesScript } from "@/components/CookieYesScript";
import { JsonLd } from "@/components/JsonLd";
import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "@/lib/schema-constants";
import "./globals.css";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jura-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://automationarchitecture.ai"),
  openGraph: {
    siteName: "Automation Architecture AI",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jura.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-jura">
        <GtmNoScript />
        <GtmScript />
        <CookieYesScript />
        <JsonLd data={ORGANIZATION_SCHEMA} />
        <JsonLd data={WEBSITE_SCHEMA} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-brand-lime focus:px-4 focus:py-2 focus:text-brand-black focus:font-bold">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <SocialSidebar />
        <MobileCTABar />
      </body>
    </html>
  );
}
