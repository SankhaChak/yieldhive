"use client";

import { Strategy } from "@yieldhive/database";
import { motion } from "framer-motion";
import Link from "next/link";
import StrategyCard from "./card";

interface Props {
  strategies: NonNullable<Strategy>[];
}

const Strategies = (props: Props) => {
  const { strategies } = props;

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
        {strategies.map((strategy) => (
          <Link
            href={`/strategies/${strategy.slug}`}
            key={strategy.id}
            className="block"
          >
            <StrategyCard strategy={strategy} />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Strategies;
