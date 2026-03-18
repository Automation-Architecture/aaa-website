import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy -- Automation Architecture AI",
  description:
    "Privacy policy for Automation Architecture AI. How we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy -- Automation Architecture AI",
    description:
      "Privacy policy for Automation Architecture AI. How we collect, use, and protect your information.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1>Privacy Policy</h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
      </article>
    </>
  );
}
