"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/utils/cn";

type TierTab = "fullAios" | "aiAutomation";

const TIER_TAB_ITEMS: Array<{
  key: TierTab;
  number: string;
  label: string;
  imageSrc: string;
}> = [
  {
    key: "fullAios",
    number: "1",
    label: "FULL AIOS",
    imageSrc: "/images/full_aios.png",
  },
  {
    key: "aiAutomation",
    number: "2",
    label: "AI AUTOMATION",
    imageSrc: "/images/ai_automation.png",
  },
];

const TIER_DETAILS: Record<
  TierTab,
  {
    whatItIs: string;
    timeline: string;
    deployment: string;
  }
> = {
  fullAios: {
    whatItIs:
      "Complete AI Operating System — context, data, intelligence, and automation across your entire business",
    timeline: "~3 weeks",
    deployment: "Gradual rollout, layer by layer",
  },
  aiAutomation: {
    whatItIs:
      "Targeted AI automation for high-impact workflows to reduce repetitive operations fast.",
    timeline: "~1–2 weeks",
    deployment: "Fast implementation on prioritized workflows",
  },
};

const CONTENT_MAX = "max-w-[65.625rem]";

export function HowItWorksStepOne() {
  const [activeTab, setActiveTab] = useState<TierTab>("fullAios");
  const currentTier = TIER_DETAILS[activeTab];

  return (
    <div
      className={cn(
        "mx-auto mt-52 flex w-full flex-col gap-8",
        CONTENT_MAX,
      )}
    >
      <header className="text-left">
        <h2 className="normal-case text-[1.75rem] font-bold leading-[1.06] tracking-[-0.03em] text-brand-black tablet:text-[2rem]">
          Two Tiers
        </h2>
        <p className="mt-4 max-w-[65.8125rem] text-[1.125rem] font-medium leading-normal text-brand-gray tablet:text-xl">
          We offer two levels of engagement. The free AI Blueprint and
          consultation determine which one fits your business — based on your
          goals, your current tools, and the complexity of your operations.
        </p>
      </header>

      <div className="mt-8 overflow-hidden rounded-[10px]">
        {/* Tabs: Figma 194:6294 — flex-col, number trên, title dưới */}
        <div className="flex min-h-0 w-full">
          {TIER_TAB_ITEMS.map((tab, index) => {
            const isActive = activeTab === tab.key;
            const isFirst = index === 0;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "flex min-h-0 min-w-0 flex-1 cursor-pointer flex-col items-center justify-center gap-2.5 px-2.5 py-[15px] text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2",
                  isActive
                    ? cn(
                        "bg-brand-teal text-brand-lime",
                        isFirst && "rounded-tl-[10px]",
                        !isFirst && "rounded-tr-[10px]",
                      )
                    : cn(
                        "border-t border-brand-divider bg-brand-white text-brand-gray",
                        isFirst &&
                          "rounded-tl-[10px] border-l border-r border-brand-divider",
                        !isFirst &&
                          "rounded-tr-[10px] border-r border-brand-divider",
                      ),
                )}
                aria-pressed={isActive}
              >
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-[5px] border text-[1.875rem] font-semibold leading-none",
                    isActive
                      ? "border-brand-lime text-brand-lime"
                      : "border-brand-gray2 text-brand-gray2",
                  )}
                >
                  {tab.number}
                </span>
                <span
                  className={cn(
                    "max-w-full font-semibold uppercase leading-tight tracking-[0.02em]",
                    isActive
                      ? "text-lg tablet:text-xl"
                      : "text-base tablet:text-lg",
                  )}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel: mobile = text trên, ảnh dưới (Figma 194:6809+); wide = 2 cột ảnh | chữ */}
        <div className="min-h-[min(31.25rem,100%)] rounded-b-[10px] border border-brand-divider bg-brand-surface px-5 py-4 tablet:px-6 tablet:py-6 wide:px-8 wide:py-10">
          <div className="grid items-stretch gap-8 wide:grid-cols-2 wide:gap-0">
            <div
              className={cn(
                "order-2 flex min-h-0 w-full items-center justify-center wide:order-1 wide:justify-start wide:pr-6",
                "border-t border-brand-divider pt-8 wide:border-t-0 wide:pt-0",
              )}
            >
              <div className="relative w-full max-w-[32.3125rem]">
                <Image
                  src={
                    TIER_TAB_ITEMS.find((item) => item.key === activeTab)!
                      .imageSrc
                  }
                  alt={
                    TIER_TAB_ITEMS.find((item) => item.key === activeTab)!
                      .label
                  }
                  width={517}
                  height={453}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <div
              className={cn(
                "order-1 flex min-h-0 flex-col justify-center wide:order-2",
                "wide:border-l wide:border-brand-black wide:pl-6",
              )}
            >
              <div className="flex flex-col gap-5 py-2.5 tablet:gap-6 wide:gap-8">
                <div className="rounded-md px-0 py-2.5 tablet:px-1">
                  <p className="text-lg font-semibold leading-normal text-brand-black tablet:text-xl">
                    What it is
                  </p>
                  <p className="mt-2 text-base font-normal leading-normal text-brand-gray tablet:text-xl">
                    {currentTier.whatItIs}
                  </p>
                </div>

                <div className="rounded-md px-0 py-2.5 tablet:px-1">
                  <p className="text-lg font-semibold leading-normal text-brand-black tablet:text-xl">
                    Timeline*
                  </p>
                  <p className="mt-2 text-base font-normal leading-normal text-brand-gray tablet:text-2xl tablet:font-medium">
                    {currentTier.timeline}
                  </p>
                </div>

                <div className="rounded-md px-0 py-2.5 tablet:px-1">
                  <p className="text-lg font-semibold leading-normal text-brand-black tablet:text-xl">
                    Deployment
                  </p>
                  <p className="mt-2 text-base font-normal leading-normal text-brand-gray tablet:text-xl">
                    {currentTier.deployment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
