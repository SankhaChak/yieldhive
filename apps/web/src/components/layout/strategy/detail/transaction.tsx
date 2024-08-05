"use client";

import LockIcon from "@yieldhive/ui/components/icons/lock";
import { Button } from "@yieldhive/ui/components/ui/button";
import { Card } from "@yieldhive/ui/components/ui/card";
import { Input } from "@yieldhive/ui/components/ui/input";
import { cn } from "@yieldhive/ui/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { TABS } from "../../../../utils/types";

const StrategyDetailTransaction = () => {
  // TODO: Replace with actual wallet connection status
  const isWalletConnected = false;

  const [activeTab, setActiveTab] = useState<TABS>(TABS.DEPOSIT);

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
        delay: 0.6,
      }}
      className="h-full w-full"
    >
      <Card
        className={cn("h-full w-full overflow-hidden", {
          "flex items-center justify-center p-4": !isWalletConnected,
        })}
      >
        {isWalletConnected ? (
          <div className="h-full flex flex-col">
            <div className="flex items-center border-b">
              <Button
                onClick={() => setActiveTab(TABS.DEPOSIT)}
                size="sm"
                variant="ghost"
                className={cn(
                  "text-sm rounded-none text-primary/80 font-semibold relative hover:bg-secondary transition-colors duration-300 group",
                  {
                    "text-contrast hover:text-contrast":
                      activeTab === TABS.DEPOSIT,
                  }
                )}
              >
                <span className="relative z-10">Deposit</span>
                {activeTab === TABS.DEPOSIT && (
                  <motion.span
                    transition={{ duration: 0.2 }}
                    layoutId="active-tab"
                    className="w-full h-full absolute inset-0 bg-accent group-hover:bg-accent/80 transition-colors duration-300"
                  />
                )}
              </Button>
              <Button
                onClick={() => setActiveTab(TABS.WITHDRAW)}
                size="sm"
                variant="ghost"
                className={cn(
                  "text-sm rounded-none text-primary/80 font-semibold relative hover:bg-secondary transition-colors duration-300 group",
                  {
                    "text-contrast hover:text-contrast":
                      activeTab === TABS.WITHDRAW,
                  }
                )}
              >
                <span className="relative z-10">Withdraw</span>
                {activeTab === TABS.WITHDRAW && (
                  <motion.span
                    transition={{ duration: 0.2 }}
                    layoutId="active-tab"
                    className="w-full h-full absolute inset-0 bg-accent group-hover:bg-accent/80 transition-colors duration-300"
                  />
                )}
              </Button>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="font-medium">Available Balance</h2>
                <div className="flex items-end gap-1">
                  <h3 className="text-lg font-semibold">0.00</h3>
                  <button className="text-xs font-bold text-accent relative -top-1">
                    [Max]
                  </button>
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center">
                  <Input
                    placeholder="Amount"
                    className="text-xs font-semibold focus-visible:ring-accent py-[9px] h-auto"
                  />
                  <Button size="sm">
                    {activeTab === TABS.DEPOSIT ? "Deposit" : "Withdraw"}
                  </Button>
                </div>
                <p className="text-xs font-semibold text-primary/40 mt-1 pl-1">
                  No additional fees
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <LockIcon className="w-16 h-16" />
            <Button
              size="sm"
              className="bg-accent gap-2 group hover:bg-accent/80 focus-visible:ring-accent"
            >
              <span>Connect Wallet to deposit or withdraw</span>
              <div className="relative">
                <ChevronRight
                  className="w-4 transform translate-x-0 group-hover:translate-x-[2px] transition-transform duration-300"
                  strokeWidth={2}
                />
                <div className="absolute w-[11px] origin-left scale-x-0 group-hover:-scale-x-100 h-[1.5px] bg-contrast left-[11px] top-1/2 transform -translate-y-1/2 transition-all duration-300" />
              </div>
            </Button>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default StrategyDetailTransaction;
