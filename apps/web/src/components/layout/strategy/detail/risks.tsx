"use client";

import { Card } from "@yieldhive/ui/components/ui/card";
import { motion } from "framer-motion";

const StrategyDetailRisks = () => {
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
        delay: 1,
      }}
      className="h-full w-full"
    >
      <Card className="h-full w-full p-4 space-y-3">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold">Risks Associated</h2>
            <p className="text-[15px] font-semibold text-primary/70">
              Some probable risks that you should be aware of before investing
              in this strategy
            </p>
          </div>

          <div className="space-y-5">
            {Array(8)
              .fill("")
              .map((_, idx) => (
                <p key={idx} className="font-medium text-sm">
                  {idx + 1}. Supply's your USDC to zkLend
                </p>
              ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default StrategyDetailRisks;
