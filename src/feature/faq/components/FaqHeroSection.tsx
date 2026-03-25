import { KeyTakeaway } from "@/components/common/KeyTakeaway";

export function FaqHeroSection() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-brand-teal tablet:text-4xl">
        Frequently Asked Questions About AIOS and AI Automation
      </h1>

      <KeyTakeaway>
        AAA builds done-for-you AI Operating Systems (AIOS) for small
        businesses and startups. We don&apos;t sell software subscriptions or
        DIY courses — we build, deploy, and maintain the full system.
        Engagements start with a free AI Blueprint tailored to your industry,
        followed by a consultation to determine scope and fit. Below are the 25
        most common questions we hear from founders evaluating AIOS
        infrastructure.
      </KeyTakeaway>

      <p className="mt-4 text-sm text-brand-gray">Last updated: March 2026</p>
    </div>
  );
}
