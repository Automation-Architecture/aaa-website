import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service -- Automation Architecture AI",
  description: "Terms of service for Automation Architecture AI.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Service -- Automation Architecture AI",
    description: "Terms of service for Automation Architecture AI.",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <>

      <article className="mx-auto max-w-3xl px-4 py-16">
        <h1>
          Terms of Service
        </h1>
        <p className="mt-6 text-brand-gray">Content coming soon.</p>
      </article>
    </>
  );
}
