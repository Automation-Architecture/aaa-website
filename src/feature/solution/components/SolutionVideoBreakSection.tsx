"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { SolutionPillarAccordion } from "@/feature/solution/components/SolutionPillarAccordion";
import {
  PillarOneRichContent,
  PillarThreeRichContent,
  PillarTwoRichContent,
} from "@/feature/solution/components/SolutionPillarRichContent";

export function SolutionVideoBreakSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isActivated = useInView(sectionRef, { once: true, amount: 0.45 });
  const [showAccordions, setShowAccordions] = useState(false);

  useEffect(() => {
    if (!isActivated) return;
    const timer = setTimeout(() => {
      setShowAccordions(true);
    }, 760);

    return () => clearTimeout(timer);
  }, [isActivated]);

  const accordionData = useMemo(
    () => [
      {
        key: "pillar-1",
        pillarLabel: "Pillar 1:",
        title: "Business Context Data Engine",
        content: <PillarOneRichContent />,
      },
      {
        key: "pillar-2",
        pillarLabel: "Pillar 2:",
        title: "Dashboard Intelligence",
        content: <PillarTwoRichContent />,
      },
      {
        key: "pillar-3",
        pillarLabel: "Pillar 3:",
        title: "Automated Task Management",
        content: <PillarThreeRichContent />,
      },
    ],
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="border-b border-l border-r border-brand-gray2 bg-white"
    >
      <div className="relative mx-auto max-w-[76rem] px-6 pb-14 pt-10 tablet:px-10 tablet:pb-20 tablet:pt-14">
        <div className="relative min-h-[15.8125rem] w-full">
          <motion.div
            initial={{
              boxShadow: "0 0 0 0 rgba(0,0,0,0)",
              borderColor: "#D8D8D8",
            }}
            animate={
              isActivated
                ? {
                  boxShadow: "16px 12px 34px 0 rgba(0,0,0,0.18)",
                  borderColor: "#004D43",
                }
                : {
                  boxShadow: "0 0 0 0 rgba(0,0,0,0)",
                  borderColor: "#D8D8D8",
                }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 top-7 z-10 flex h-[10.9375rem] w-[11.25rem] -translate-x-1/2 items-center justify-center rounded-[1.25rem] border bg-brand-surface p-1"
          >
            <Image
              src="/images/logo-open-accodion.png"
              alt="AIOS logo state"
              width={120}
              height={118}
              className="h-full w-full rounded-[1.05rem] object-contain object-center"
            />
          </motion.div>

          <motion.span
            initial={{ x: 58, y: 42, rotate: -8 }}
            animate={
              isActivated
                ? { x: 0, y: 0, rotate: 0, backgroundColor: "#E6FF2B" }
                : { x: 58, y: 42, rotate: -8, backgroundColor: "#010101" }
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pointer-events-none absolute left-[calc(50%+38px)] top-[9.625rem] z-20 block h-[1.884rem] w-[1.684rem] [mask-image:url('/icons/top-left-cursor.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
            aria-hidden
          />

          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={isActivated ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
            transition={{ duration: 0.35, delay: 0.55 }}
            className="absolute left-[calc(50%+45px)] top-[11.5rem] z-10 rounded-[0.25rem] border border-brand-divider bg-[#fafafa] px-[0.625rem] py-[0.4375rem] text-[1rem] font-medium text-brand-black shadow-[4px_4px_13px_0_rgba(0,0,0,0.07)]"
          >
            Enter System
          </motion.div>
        </div>

        <motion.div
          className="mt-6 space-y-3"
          initial="hidden"
          animate={showAccordions ? "show" : "hidden"}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
        >
          {accordionData.map((item) => (
            <motion.div
              key={item.key}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <SolutionPillarAccordion
                data={item}
                activated={isActivated}
                autoOpenOnActivate={false}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
