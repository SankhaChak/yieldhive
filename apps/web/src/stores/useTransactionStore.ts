import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Transaction = {
  action: "deposit" | "withdraw";
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  timestamp: number;
  isSandboxTransaction: boolean;
  strategyId: string;
};

type State = {
  sandboxBalance: number;
  setSandboxBalance: (value: number) => void;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
};

export const useTransactionStore = create<State>()(
  devtools(
    immer((set) => ({
      sandboxBalance: 100000,
      setSandboxBalance: (value) =>
        set((state) => {
          state.sandboxBalance = value;
        }),
      transactions: [],
      addTransaction: (transaction) =>
        set((state) => {
          state.transactions.push(transaction);
        }),
    }))
  )
);
