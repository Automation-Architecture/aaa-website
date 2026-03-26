"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const THREE_BLOCK_FRAMES = [
  "/images/3-block/three-block1.png",
  "/images/3-block/three-block2.png",
];

export function LandingOfferThreeBlockAnimation() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % THREE_BLOCK_FRAMES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full">
      {THREE_BLOCK_FRAMES.map((src, index) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: frameIndex === index ? 1 : 0,
            scale: frameIndex === index ? 1 : 0.985,
            filter: frameIndex === index ? "blur(0px)" : "blur(0.6px)",
          }}
          transition={{
            opacity: { duration: 0.4, ease: "easeInOut" },
            scale: { duration: 0.5, ease: "easeInOut" },
            filter: { duration: 0.3, ease: "easeInOut" },
          }}
          style={{ pointerEvents: "none" }}
        >
          <Image
            src={src}
            alt="Three block icon animation"
            fill
            className="object-contain p-4"
          />
        </motion.div>
      ))}
    </div>
  );
}
