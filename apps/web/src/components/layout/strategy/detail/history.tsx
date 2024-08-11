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
import { useSandboxStore } from "../../../../stores/useSandboxStore";
import { useTransactionStore } from "../../../../stores/useTransactionStore";

const StrategyDetailTransactionHistory = () => {
  const isSandboxModeActive = useSandboxStore((state) => state.isActive);
  const transactions = useTransactionStore((state) => state.transactions);

  const filteredTransactions = transactions
    // TODO: Replace with actual strategyId
    .filter((transaction) => transaction.strategyId === "1")
    .filter((transaction) =>
      isSandboxModeActive ? transaction.isSandboxTransaction : true
    );

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
    >
      <Card className="p-4 space-y-3">
        <h2 className="text-lg font-semibold">Transaction History</h2>
        <div>
          {filteredTransactions.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow className="border-none">
                  <TableHead className="text-primary/80 font-semibold p-0">
                    Date
                  </TableHead>
                  <TableHead className="text-primary/80 font-semibold p-0">
                    Action
                  </TableHead>
                  <TableHead className="text-primary/80 font-semibold p-0">
                    Amount
                  </TableHead>
                  <TableHead className="text-primary/80 font-semibold p-0">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {filteredTransactions.map((transaction, index) => (
                  <TableRow key={index} className="border-none font-medium">
                    <TableCell className="p-0 text-primary/80">
                      {new Date(transaction.timestamp).toLocaleDateString(
                        "en-US"
                      )}
                    </TableCell>
                    <TableCell className="p-0 text-primary/80 !capitalize">
                      {transaction.action}
                    </TableCell>
                    <TableCell className="p-0 text-primary/80">
                      {transaction.amount.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}{" "}
                      <span className="uppercase">{transaction.currency}</span>
                    </TableCell>
                    <TableCell className="p-0 text-primary/80 !capitalize">
                      {transaction.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <p className="text-[15px] font-semibold text-primary/70">
              No transactions recorded since this feature was added. We use
              your browser&apos;s storage to save your transaction history. Make
              a deposit or withdrawal to see your transactions here. Clearning
              browser cache will remove this data.
            </p>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default StrategyDetailTransactionHistory;
