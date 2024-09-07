"use client";

import { motion } from "framer-motion";

const FeaturesHeader = () => {
  return (
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
        delay: 1.2,
      }}
      className="text-center"
    >
      <h2 className="text-xl md:text-2xl font-medium md:font-semibold relative">
        Here&apos;s what Yieldhive has to offer
      </h2>
    </motion.div>
  );
};

export default FeaturesHeader;
