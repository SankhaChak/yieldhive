"use client";

import { Strategy } from "@yieldhive/database";
import { Card } from "@yieldhive/ui/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@yieldhive/ui/components/ui/tooltip";
import { motion } from "framer-motion";

interface Props {
  apy: string;
  protocols: NonNullable<Strategy>["protocols"];
  tokens: NonNullable<Strategy>["tokens"];
}

const StrategyDetailStats = (props: Props) => {
  const { apy, protocols = [], tokens = [] } = props;

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
        delay: 0.3,
      }}
      className="h-full w-full"
    >
      <Card className="h-full w-full p-4 flex flex-col justify-between">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">APY</h2>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-extrabold">{apy}%</h3>
            {/* <p className="font-semibold opacity-60">{multiplier}x boosted</p> */}
          </div>
        </div>
        <TooltipProvider>
          <div className="flex items-center justify-between">
            <div className="flex items-center -space-x-6">
              {tokens.map((token) => (
                <Tooltip delayDuration={100}>
                  <TooltipTrigger>
                    <img
                      key={token.id}
                      src={token.logo_url}
                      alt={token.name}
                      className="w-12 h-12 bg-secondary rounded-full border-2 border-contrast"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="ml-10">
                    <p>{token.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            <div className="flex items-center -space-x-6">
              {protocols.map((protocol) => (
                <Tooltip delayDuration={100}>
                  <TooltipTrigger>
                    <img
                      key={protocol.id}
                      src={protocol.image_url}
                      alt={protocol.name}
                      className="w-12 h-12 bg-secondary rounded-full border-2 border-contrast"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="ml-10">
                    <p>{protocol.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            {/* <p className="text-3xl font-bold">$20,00</p> */}
          </div>
        </TooltipProvider>
      </Card>
    </motion.div>
  );
};

export default StrategyDetailStats;
