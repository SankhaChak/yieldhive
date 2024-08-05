"use client";

import { Highlight } from "@yieldhive/ui/components/ui/hero-highlight";
import { motion } from "framer-motion";

const StrategyHeading = () => {
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
        Yield Strategies
      </motion.h1>
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
          duration: 0.4,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0.2,
        }}
        className="text-center mt-4 sm:text-lg md:text-xl lg:text-[22px] md:max-w-prose mx-auto font-medium"
      >
        Strategies are{" "}
        <Highlight className="from-accent/55 to-accent/40">
          a combination of investment steps
        </Highlight>{" "}
        that combine various pools and risk combinations to maximize yield.
      </motion.div>
    </div>
  );
};

export default StrategyHeading;
