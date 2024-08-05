"use client";

import { Card } from "@yieldhive/ui/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@yieldhive/ui/components/ui/table";
import { motion } from "framer-motion";

const StrategyDetailBTS = () => {
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
        delay: 0.8,
      }}
      className="h-full w-full"
    >
      <Card className="h-full w-full p-4 space-y-3">
        <div>
          <h2 className="text-lg font-semibold">Behind the scenes</h2>
          <p className="text-[15px] font-semibold text-primary/70">
            Actions done automatically by the strategy (smart-contract) with an
            investment of $1000
          </p>
        </div>
        <div className="space-y-1">
          <Table>
            <TableHeader>
              <TableRow className="border-none">
                <TableHead className="text-primary/80 font-semibold p-0">
                  Action
                </TableHead>
                <TableHead className="text-primary/80 font-semibold p-0">
                  Protocol
                </TableHead>
                <TableHead className="text-primary/80 font-semibold p-0">
                  Amount
                </TableHead>
                <TableHead className="text-primary/80 font-semibold p-0">
                  Yield
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="font-medium">
              {Array(8)
                .fill("")
                .map((_, idx) => (
                  <TableRow key={idx} className="border-none">
                    <TableCell className="!px-0 !py-2">
                      {idx + 1}. Supply's your USDC to zkLend
                    </TableCell>
                    <TableCell className="!px-0 !py-2">
                      <div className="flex items-center gap-1">
                        <div className="h-6 w-6 bg-secondary rounded-full" />{" "}
                        <span>USDC on</span>
                        <div className="h-6 w-6 bg-secondary rounded-full" />{" "}
                        <span>zkLend</span>
                      </div>
                    </TableCell>
                    <TableCell className="!px-0 !py-2">$1,000</TableCell>
                    <TableCell className="!px-0 !py-2">14.48%</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </motion.div>
  );
};

export default StrategyDetailBTS;
