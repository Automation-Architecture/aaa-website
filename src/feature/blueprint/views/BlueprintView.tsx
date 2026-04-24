"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BlueprintLaptopAnimation } from "@/feature/blueprint/components/BlueprintLaptopAnimation";
import { BlueprintStepForm } from "@/feature/blueprint/components/blueprint-step-form";

export function BlueprintView() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="border-x border-b border-brand-gray2 bg-brand-surface mx-auto max-w-11/12">
      <div className="flex flex-col min-[1025px]:flex-row min-[1025px]:min-h-[640px]">

        {/* ── LEFT COLUMN (~45%) ── */}
        <div className="flex flex-col min-[1025px]:w-[45%]">
          {showForm ? (
            /* Black panel with top gap matching the original top-area spacing */
            <div className="mt-8 flex flex-1 flex-col bg-brand-black px-6 py-8 tablet:mt-12 tablet:px-10 min-[1025px]:mt-16 min-[1025px]:px-12 min-[1025px]:py-10">
              <BlueprintStepForm />
            </div>
          ) : (
            <>
              {/* Top area: pill + headline + description */}
              <div className="px-6 pt-8 pb-8 tablet:px-10 tablet:pt-12 min-[1025px]:px-12 min-[1025px]:pt-16 min-[1025px]:pb-10">

                <div className="inline-flex w-fit items-center gap-2.5 rounded-[0.375rem] bg-brand-lime px-[15px] py-[10px]">
                  <span className="relative size-[14px]" aria-hidden="true">
                    <span className="absolute left-0 top-0 size-[4px] rounded-[2px] bg-brand-black" />
                    <span className="absolute right-0 top-0 size-[4px] rounded-[2px] bg-brand-black" />
                    <span className="absolute left-0 bottom-0 size-[4px] rounded-[2px] bg-brand-black" />
                    <span className="absolute right-0 bottom-0 size-[4px] rounded-[2px] bg-brand-black" />
                  </span>
                  <span className="text-[1.125rem] font-semibold uppercase text-brand-black">
                    From Chaos to System
                  </span>
                </div>

                <h1 className="mt-5 text-[clamp(1.875rem,3.5vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.07em] text-brand-heading">
                  Pipeline IQ: A Free AI Audit Built for Your Business
                </h1>

                <p className="mt-5 text-[1rem] leading-relaxed text-brand-gray min-[1025px]:text-[1.125rem]">
                  Not every automation belongs in every business. Pipeline IQ combines
                  domain analysis, industry intelligence, and ICP-level insight to
                  deliver a tailored blueprint of your highest-value AI opportunities —
                  the kind of assessment that usually takes a strategy engagement. Yours
                  free, in minutes.
                </p>
              </div>

              {/* Black block */}
              <div className="flex flex-1 flex-col bg-brand-black px-6 py-8 tablet:px-10 min-[1025px]:px-12 min-[1025px]:py-10">
                <h2 className="text-[1.375rem] font-bold text-brand-lime min-[1025px]:text-[1.5rem]">
                  What to Expect
                </h2>

                <ol className="mt-4 flex flex-col gap-4 text-[0.9375rem] leading-relaxed text-brand-white min-[1025px]:mt-5 min-[1025px]:gap-5 min-[1025px]:text-[1.125rem]">
                  <li>
                    <strong className="font-semibold">1. Fill out the intake form</strong>{" "}
                    (5 minutes) answering a few questions about your business.
                  </li>
                  <li>
                    <strong className="font-semibold">2. Receive your Blueprint</strong>{" "}
                    — A personal, sharable report with your automation recommendations.
                  </li>
                  <li>
                    <strong className="font-semibold">3. Book a consultation</strong>{" "}
                    (optional) to walk through your Blueprint together.
                  </li>
                </ol>

                <div className="mt-8">
                  <Button
                    onClick={() => setShowForm(true)}
                    className="h-[50px] rounded-[10px] px-[30px] text-[1rem] font-bold min-[1025px]:text-[1.125rem] cursor-pointer"
                  >
                    GET MY PIPELINE IQ
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-1 items-end justify-center px-2 pt-10 pb-2 tablet:px-4 tablet:pt-10 tablet:pb-2 min-[1025px]:px-4 min-[1025px]:pt-12 min-[1025px]:pb-4">
          <div className="relative w-full">
            <div className="pointer-events-none absolute left-1/2 top-0 z-0 w-20 -translate-x-1/2 -translate-y-2/5 rotate-15 tablet:w-32 min-[1025px]:w-48 min-[1200px]:w-60">
              <Image
                src="/images/blueprint/big_logo.png"
                alt="Logo of the company in the black"
                aria-hidden="true"
                width={400}
                height={400}
                className="h-auto w-full"
              />
            </div>

            <div className="relative z-10 -mb-40">
              <BlueprintLaptopAnimation />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
