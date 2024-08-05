"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
}

const StrategyDetailTitle = ({ title = "" }: Props) => {
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
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-2xl font-bold text-primary/80"
    >
      {title}
    </motion.div>
  );
};

export default StrategyDetailTitle;
