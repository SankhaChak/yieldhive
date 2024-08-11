import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface Transaction {
  action: "deposit" | "withdraw";
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  timestamp: number;
  isSandboxTransaction: boolean;
  strategyId: string;
}

interface State {
  sandboxBalance: number;
  setSandboxBalance: (value: number) => void;
  balance: number;
  setBalance: (value: number) => void;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

export const useTransactionStore = create<State>()(
  devtools(
    immer((set) => ({
      sandboxBalance: 100000,
      setSandboxBalance: (value) =>
        set((state) => {
          state.sandboxBalance = value;
        }),
      balance: 0,
      setBalance: (value) =>
        set((state) => {
          state.balance = value;
        }),
      transactions: [],
      addTransaction: (transaction) =>
        set((state) => {
          const amountToBeAdded =
            transaction.action === "deposit"
              ? transaction.amount
              : -transaction.amount;

          if (transaction.isSandboxTransaction) {
            state.sandboxBalance += amountToBeAdded;
          } else {
            state.balance += amountToBeAdded;
          }

          state.transactions.push(transaction);
        }),
    }))
  )
);
