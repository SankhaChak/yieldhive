"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import StrategyCard from "./card";

const Strategies = () => {
  return (
    <div className="container mx-auto">
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
          delay: 0.6,
        }}
        className="mt-12 md:mt-16 lg:mt-24 space-y-8 pb-12"
        variants={{
          visible: {
            transition: {
              staggerChildren: 5000,
            },
          },
        }}
      >
        {Array(5)
          .fill("")
          .map((_, index) => (
            <Link
              href={`/strategies/${index + 1}`}
              key={index}
              className="block"
            >
              <StrategyCard />
            </Link>
          ))}
      </motion.div>
    </div>
  );
};

export default Strategies;
