"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const PYRAMID_FRAMES = [
  "/images/pyramid-blocks/pyramid-blocks-1.png",
  "/images/pyramid-blocks/pyramid-blocks-2.png",
];

export function LandingMetricsPyramidAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % PYRAMID_FRAMES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-auto w-full max-w-87.5 min-[1025px]:h-105 min-[1025px]:w-auto min-[1025px]:max-w-none">
      <div className="relative aspect-520/400 w-full min-[1025px]:h-full min-[1025px]:w-auto">
        {PYRAMID_FRAMES.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: frameIndex === index ? 1 : 0,
              scale: frameIndex === index ? 1 : 0.996,
              filter: frameIndex === index ? "blur(0px)" : "blur(0.6px)",
            }}
            transition={{
              opacity: { duration: 0.45, ease: "easeInOut" },
              scale: { duration: 0.55, ease: "easeInOut" },
              filter: { duration: 0.35, ease: "easeInOut" },
            }}
            style={{ pointerEvents: "none" }}
          >
            <Image
              src={src}
              alt="AIOS pyramid illustration"
              width={520}
              height={400}
              className="h-auto w-full min-[1025px]:h-full min-[1025px]:w-auto"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
