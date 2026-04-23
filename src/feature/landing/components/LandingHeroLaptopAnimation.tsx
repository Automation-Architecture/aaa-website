"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useResponsiveModule } from "@/lib/responsive-module";

const HERO_FRAMES = [
  "/images/hero/laptop-hero-1.png",
  "/images/hero/laptop-hero-2.png",
  "/images/hero/laptop-hero-3.png",
  "/images/hero/laptop-hero-4.png",
];

const MOBILE_FRAME_SCALES = [1.3, 1.3, 1.3, 1.22];
const DESKTOP_FRAME_SCALES = [1, 1, 1, 0.94];

type LandingHeroLaptopAnimationProps = {
  showBadges?: boolean;
  layout?: "landing" | "center";
};

export function LandingHeroLaptopAnimation({
  showBadges = true,
  layout = "landing",
}: LandingHeroLaptopAnimationProps) {
  const [frameIndex, setFrameIndex] = useState(0);
  const responsiveModule = useResponsiveModule();
  const isMode1 = responsiveModule === "laptop-large";
  const isDesktop =
    responsiveModule !== "mobile" && responsiveModule !== "tablet";

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % HERO_FRAMES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <MobileLaptop frameIndex={frameIndex} />
      <DesktopLaptop frameIndex={frameIndex} isMode1={isMode1} layout={layout} />

      {showBadges ? (
        <>
          {!isDesktop && <MobileMode2Badges />}
          {isDesktop && (isMode1 ? <DesktopMode1Badges /> : <DesktopMode2Badges />)}
        </>
      ) : null}
    </>
  );
}

function MobileLaptop({ frameIndex }: { frameIndex: number }) {
  return (
    <div className="relative z-40 flex justify-center min-[1025px]:hidden">
      <div className="relative h-72 w-full max-w-2xl tablet:h-56">
        <AnimatedFrames
          frameIndex={frameIndex}
          containerClassName="object-contain"
          scales={MOBILE_FRAME_SCALES}
          transformOrigin="center center"
          objectPosition="center center"
        />
      </div>
    </div>
  );
}

function DesktopLaptop({
  frameIndex,
  isMode1,
  layout,
}: {
  frameIndex: number;
  isMode1: boolean;
  layout: "landing" | "center";
}) {
  const wrapperClassName =
    layout === "center"
      ? "hidden min-[1025px]:flex min-[1025px]:justify-center"
      : isMode1
        ? "hidden overflow-hidden min-[1025px]:absolute min-[1025px]:inset-x-0 min-[1025px]:bottom-0 min-[1025px]:z-40 min-[1025px]:flex min-[1025px]:justify-end min-[1025px]:pr-10 min-[1800px]:left-30 left-0"
        : "hidden min-[1025px]:flex min-[1025px]:justify-center";

  const frameClassName =
    layout === "center"
      ? "relative h-152 w-228"
      : isMode1
        ? "relative h-152 w-228 min-[1510px]:left-44 left-0"
        : "relative h-120 w-180";

  return (
    <div className={wrapperClassName}>
      <div className={frameClassName}>
        <AnimatedFrames
          frameIndex={frameIndex}
          containerClassName="object-contain"
          scales={DESKTOP_FRAME_SCALES}
        />
      </div>
    </div>
  );
}

function AnimatedFrames({
  frameIndex,
  containerClassName,
  scales,
  transformOrigin,
  objectPosition,
}: {
  frameIndex: number;
  containerClassName: string;
  scales: number[];
  transformOrigin?: string;
  objectPosition?: string;
}) {
  return (
    <>
      {HERO_FRAMES.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: frameIndex === index ? 1 : 0,
            scale: scales[index],
            filter: frameIndex === index ? "blur(0px)" : "blur(1px)",
          }}
          transition={{
            opacity: { duration: 0.45, ease: "easeInOut" },
            scale: { duration: 0.55, ease: "easeInOut" },
            filter: { duration: 0.35, ease: "easeInOut" },
          }}
          style={{
            transformOrigin,
            pointerEvents: "none",
          }}
        >
          <Image
            src={src}
            alt="AI dashboard and laptop scene"
            width={912}
            height={608}
            className={`h-full w-full ${containerClassName}`}
            style={{ objectPosition }}
          />
        </motion.div>
      ))}
    </>
  );
}

function BadgeOne() {
  return (
    <div className="flex h-8.75 items-center gap-1.25 rounded-[0.375rem] border border-brand-black bg-brand-white px-2.5 py-1.5">
      <Image
        src="/images/landing-hero-task-icon.svg"
        alt=""
        width={20}
        height={20}
        className="h-4 w-4"
      />
      <span className="text-[0.875rem] font-semibold text-brand-black">
        Four tasks
      </span>
    </div>
  );
}

function BadgeTwo() {
  return (
    <div className="flex h-8.75 items-center rounded-[0.375rem] bg-brand-teal px-2.5 py-2.25">
      <span className="text-[0.875rem] font-medium text-brand-white">
        Ninety seconds
      </span>
    </div>
  );
}

function BadgeThree() {
  return (
    <div className="flex h-8.75 items-center rounded-[0.375rem] bg-brand-teal px-5 py-2.25">
      <span className="text-[0.875rem] font-medium text-brand-white">
        Before breakfast
      </span>
    </div>
  );
}

function DesktopMode1Badges() {
  return (
    <div className="hidden min-[1025px]:absolute min-[1025px]:right-7.5 min-[1025px]:top-56.5 min-[1025px]:z-42 min-[1025px]:flex min-[1025px]:flex-col min-[1025px]:items-start min-[1025px]:gap-2.5">
      <BadgeOne />
      <BadgeTwo />
      <BadgeThree />
    </div>
  );
}

function MobileMode2Badges() {
  return (
    <div className="relative -top-28 z-42 mt-2 flex flex-col items-center gap-2 min-[1025px]:hidden">
      <div className="flex w-full items-center justify-between px-6">
        <BadgeOne />
        <BadgeTwo />
      </div>
      <BadgeThree />
    </div>
  );
}

function DesktopMode2Badges() {
  return (
    <div className="hidden min-[1025px]:absolute min-[1025px]:bottom-20 min-[1025px]:left-0 min-[1025px]:right-0 min-[1025px]:z-42 min-[1025px]:flex min-[1025px]:-translate-y-60 min-[1025px]:flex-col min-[1025px]:items-center min-[1025px]:gap-2">
      <div className="flex items-center justify-center gap-5">
        <BadgeOne />
        <BadgeTwo />
      </div>
      <div className="-mt-0.5">
        <BadgeThree />
      </div>
    </div>
  );
}
