"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HERO_FRAMES = [
  "/images/blueprint/laptop_1.png",
  "/images/blueprint/laptop_2.png",
  "/images/blueprint/laptop_3.png",
  "/images/blueprint/laptop_4.png",
];

export function BlueprintLaptopAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    HERO_FRAMES.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % HERO_FRAMES.length);
    }, 1350);
    return () => clearInterval(interval);
  }, []);

  const src = HERO_FRAMES[frameIndex] ?? HERO_FRAMES[0]!;

  return (
    <div className="relative w-full" style={{ aspectRatio: "1 / 0.8" }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          style={{ pointerEvents: "none", willChange: "opacity" }}
        >
          <Image
            src={src}
            alt="AI dashboard and laptop scene"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
