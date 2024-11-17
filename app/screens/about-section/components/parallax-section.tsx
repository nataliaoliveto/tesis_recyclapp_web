"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ParallaxSectionProps {
  imageUrl: string;
  alt: string;
  height?: string;
}

export const ParallaxSection = ({ 
  imageUrl, 
  alt, 
  height = "600px" 
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      <motion.div
        className="relative w-full h-[100%]"
        style={{ y }}
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}; 