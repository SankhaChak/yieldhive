"use client";

import { Card } from "@yieldhive/ui/components/ui/card";
import { motion } from "framer-motion";

interface Props {
  description: string;
}

const StrategyDetailDescription = ({ description }: Props) => {
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
        delay: 0.2,
      }}
      className="w-full h-full"
    >
      <Card className="bg-accent text-contrast/90 w-full h-full p-4 space-y-4">
        <h2 className="text-lg font-semibold">How does it work?</h2>
        <p className="text-[15px] font-medium !leading-normal">{description}</p>
      </Card>
    </motion.div>
  );
};

export default StrategyDetailDescription;
