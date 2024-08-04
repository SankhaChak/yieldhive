"use client";

import { buttonVariants } from "@yieldhive/ui/components/ui/button";
import { Highlight } from "@yieldhive/ui/components/ui/hero-highlight";
import { cn } from "@yieldhive/ui/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mx-auto relative mt-28 md:mt-40 lg:mt-52 text-primary">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="font-bold text-[22px] sm:text-3xl md:text-4xl lg:text-5xl text-center !leading-tight"
      >
        Multiply Your Crypto
        <br />
        <Highlight
          className="from-accent/55 to-accent/40 px-2 sm:px-4 md:px-6 rounded-r-none"
          showBorder
          showBadge
          badgeText="YieldHive"
        >
          While You Sleep Peacefully
        </Highlight>
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.2,
        }}
        className="text-center mt-4 sm:text-lg md:text-xl lg:text-[22px] md:max-w-prose mx-auto font-medium relative bg-contrast"
      >
        YieldHive is a decentralized platform that allows you to earn passive
        income on your crypto assets.
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.2,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.6,
        }}
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2"
      >
        <Link
          href="/strategies"
          className={cn(
            buttonVariants(),
            "w-full max-w-80 sm:w-auto md:py-6 md:text-base"
          )}
        >
          Browse Strategies
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
