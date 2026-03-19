import type { Metadata } from "next";
import { Jura } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTABar } from "@/components/MobileCTABar";
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
  title: "AI Operating System for Small Business -- AIOS by AAA",
  description:
    "60-70% of recurring tasks automated in weeks, not months. We build full AI operating systems for small businesses and startups. Get your free Blueprint.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
