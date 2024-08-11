"use client";

import { Strategy } from "@yieldhive/database";
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

interface Props {
  bts: NonNullable<Strategy>["steps"];
  chain: NonNullable<Strategy>["chain"];
}

const StrategyDetailBTS = ({ bts, chain }: Props) => {
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
                  Chain
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
              {bts.map((step, idx) => (
                <TableRow key={idx} className="border-none">
                  <TableCell className="!px-0 !py-2">
                    {idx + 1}. {step.name}
                  </TableCell>
                  <TableCell className="!px-0 !py-2">
                    <div className="flex items-center gap-1">
                      <img
                        src={step.token.logo_url}
                        alt={step.token.name}
                        className="h-6 w-6 bg-secondary rounded-full"
                      />
                      <span>{step.token.name} on</span>

                      <img
                        src={step.protocol.image_url}
                        alt={step.protocol.name}
                        className="h-6 w-6 bg-secondary rounded-full"
                      />

                      <span>{step.protocol.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="!px-0 !py-2">
                    <p>{chain.name}</p>
                  </TableCell>
                  <TableCell className="!px-0 !py-2">{step.amount}</TableCell>
                  <TableCell className="!px-0 !py-2">{step.yield}%</TableCell>
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
