"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const TRAJECTORY_LINE_FRAMES = [
  "/images/trajectory-line-1.png",
  "/images/trajectory-line-2.png",
  "/images/trajectory-line-3.png",
  "/images/trajectory-line-4.png",
  "/images/trajectory-line-5.png",
] as const;

const FRAME_MS = 2200;

export function TrajectoryLineCarousel() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % TRAJECTORY_LINE_FRAMES.length);
    }, FRAME_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative aspect-640/320 w-full">
        {TRAJECTORY_LINE_FRAMES.map((src, index) => (
          <motion.div
            key={src}
            className="absolute inset-0 flex items-center justify-center"
            initial={false}
            animate={{ opacity: frameIndex === index ? 1 : 0 }}
            transition={{
              opacity: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
            }}
            style={{ pointerEvents: "none" }}
          >
            <Image
              src={src}
              alt={
                frameIndex === index
                  ? `Trajectory curve, step ${index + 1} of ${TRAJECTORY_LINE_FRAMES.length}`
                  : ""
              }
              width={640}
              height={320}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 40rem, 100vw"
              aria-hidden={frameIndex !== index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
