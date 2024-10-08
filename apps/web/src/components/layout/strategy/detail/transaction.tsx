"use client";

import { useQuery } from "@tanstack/react-query";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Strategy } from "@yieldhive/database";
import LockIcon from "@yieldhive/ui/components/icons/lock";
import { Button } from "@yieldhive/ui/components/ui/button";
import { Card } from "@yieldhive/ui/components/ui/card";
import { Input } from "@yieldhive/ui/components/ui/input";
import { cn } from "@yieldhive/ui/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import {
  useAccount,
  useReadContract,
  useSwitchChain,
  useWriteContract,
} from "wagmi";
import { useSandboxStore } from "../../../../stores/useSandboxStore";
import { useTransactionStore } from "../../../../stores/useTransactionStore";
import { getContractABI } from "../../../../utils/api/contract";
import { TRANSACTION_TABS } from "../../../../utils/types";

interface Props {
  strategy: NonNullable<Strategy>;
}

const StrategyDetailTransaction = ({ strategy }: Props) => {
  const { isConnected, address } = useAccount();
  const { open } = useWeb3Modal();
  const { chains, switchChain } = useSwitchChain();

  // TODO: Handle read USDC balance
  // const {data, error} = useReadContract({
  //   account: address,
  //   functionName: "balanceOf",
  //   address: USDC_CONTRACT_ADDRESS[chainId as ChainId],
  //   abi: [
  //     {
  //       inputs: [{ internalType: "address", name: "account", type: "address" }],
  //       name: "balanceOf",
  //       outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
  //       stateMutability: "view",
  //       type: "function",
  //     },
  //   ],
  //   args: [address as `0x${string}`],
  // });

  const [activeTab, setActiveTab] = useState<TRANSACTION_TABS>(
    TRANSACTION_TABS.DEPOSIT
  );
  const [amount, setAmount] = useState<number>(0);

  const isSandboxModeActive = useSandboxStore((state) => state.isActive);
  // const transactions = useTransactionStore((state) => state.transactions);
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  // const filteredTransactions = transactions
  //   .filter((transaction) => transaction.strategyId === strategy.id)
  //   .filter((transaction) =>
  //     isSandboxModeActive
  //       ? transaction.isSandboxTransaction
  //       : !transaction.isSandboxTransaction
  //   );

  // const totalInvestedAmount = filteredTransactions.reduce(
  //   (acc, transaction) => {
  //     if (transaction.action === "deposit") {
  //       return acc + transaction.amount;
  //     }

  //     return acc - transaction.amount;
  //   },
  //   0
  // );

  const { data: contractAbi } = useQuery({
    queryKey: ["strategy", strategy.id],
    queryFn: async () => {
      const { data } = await getContractABI(strategy.slug);
      return data;
    },
    refetchOnWindowFocus: false,
  });

  const { data: approveContractAbi } = useQuery({
    queryKey: ["approveContract", strategy.id],
    queryFn: async () => {
      const { data } = await getContractABI("weth-approve");
      return data;
    },
  });

  const { writeContract } = useWriteContract();
  const { data: approvedAmount } = useReadContract({
    abi: approveContractAbi,
    address: "0x4200000000000000000000000000000000000006",
    functionName: "allowance",
    args: [address as string, strategy.contract_address as `0x${string}`],
  }) as { data: bigint };

  const { data: investedAmount, refetch: refetchInvestedAmount } =
    useReadContract({
      abi: contractAbi,
      address: strategy.contract_address as `0x${string}`,
      functionName: "balanceOf",
      args: [address as string],
    }) as { data: bigint; refetch: () => void };

  const { data: totalAssets } = useReadContract({
    abi: contractAbi,
    address: strategy.contract_address as `0x${string}`,
    functionName: "totalAssets",
    args: [],
  }) as { data: bigint };

  const { data: totalSupply } = useReadContract({
    abi: contractAbi,
    address: strategy.contract_address as `0x${string}`,
    functionName: "totalSupply",
    args: [],
  }) as { data: bigint };

  const { data: balanceOf } = useReadContract({
    abi: contractAbi,
    address: strategy.contract_address as `0x${string}`,
    functionName: "balanceOf",
    args: [address as string],
  }) as { data: bigint };

  const totalValue = useMemo(() => {
    if (!totalAssets || !balanceOf || !totalSupply) return 0;

    return (totalAssets * balanceOf) / totalSupply;
  }, [totalAssets, balanceOf, totalSupply]);

  const handleTransaction = useCallback(() => {
    if (!address) return;

    const isDeposit = activeTab === TRANSACTION_TABS.DEPOSIT;

    const formattedAmount = amount * 10 ** 18;

    // TODO: Add check if amount is > invested amount for withdraw and amount > wallet balance for deposit
    if (formattedAmount > Number(investedAmount ?? 0) && !isDeposit) {
      // TODO: Show a toast message
      return;
    }

    const contractChain = chains.find((chain) =>
      chain.name.toLowerCase().includes(strategy.chain.name.toLowerCase())
    );
    if (!contractChain) return;

    switchChain({ chainId: contractChain.id });

    if (isSandboxModeActive) {
      return addTransaction({
        action: activeTab === TRANSACTION_TABS.DEPOSIT ? "deposit" : "withdraw",
        amount,
        currency: "USDC",
        status: "completed",
        timestamp: Date.now(),
        isSandboxTransaction: true,
        strategyId: strategy.id,
      });
    }

    if (approvedAmount < formattedAmount && isDeposit) {
      let approveContractParams: Parameters<typeof writeContract>[0] = {
        abi: approveContractAbi,
        address: "0x4200000000000000000000000000000000000006",
        functionName: "approve",
        args: [strategy.contract_address as `0x${string}`, formattedAmount],
      };

      try {
        writeContract(approveContractParams);
      } catch (error) {
        console.log(
          "🚀 ~ file: transaction.tsx:144 ~ handleTransaction ~ error:",
          error
        );
      }

      return;
    }

    let writeContractParams: Parameters<typeof writeContract>[0] = {
      abi: contractAbi,
      address: strategy.contract_address as `0x${string}`,
      functionName: "",
      args: [],
    };

    if (isDeposit) {
      writeContractParams.functionName = "deposit";
      writeContractParams.args = [formattedAmount, address];
    } else {
      writeContractParams.functionName = "withdraw";
      writeContractParams.args = [formattedAmount, address, address];
    }

    try {
      writeContract(writeContractParams);
      refetchInvestedAmount();
      // addTransaction({
      //   action: activeTab === TRANSACTION_TABS.DEPOSIT ? "deposit" : "withdraw",
      //   amount: formattedAmount,
      //   currency: "USDC",
      //   status: "completed",
      //   timestamp: Date.now(),
      //   isSandboxTransaction: false,
      //   strategyId: strategy.id,
      // });
    } catch (error) {
      console.log(
        "🚀 ~ file: transaction.tsx:155 ~ handleTransaction ~ error:",
        error
      );
    }
  }, [
    contractAbi,
    address,
    activeTab,
    isSandboxModeActive,
    amount,
    strategy.id,
    strategy.contract_address,
  ]);

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
        delay: 0.5,
      }}
      className="h-full w-full"
    >
      <Card
        className={cn("h-full w-full overflow-hidden", {
          "flex items-center justify-center p-4": !isConnected,
        })}
      >
        {isConnected ? (
          <div className="h-full flex flex-col">
            <div className="flex items-center border-b">
              {/* {TRANSACTION_TAB_KEYS.map((tab) => (
                <Button
                  onClick={() => setActiveTab(TRANSACTION_TABS[tab])}
                  size="sm"
                  variant="ghost"
                  className={cn(
                    "text-sm rounded-none text-primary/80 font-semibold relative hover:bg-secondary transition-colors duration-300 group",
                    {
                      "text-contrast hover:text-contrast":
                        activeTab === TRANSACTION_TABS[tab],
                    }
                  )}
                >
                  <span className="relative z-10">Deposit</span>
                  {activeTab === TRANSACTION_TABS.DEPOSIT && (
                    <motion.span
                      transition={{ duration: 0.2 }}
                      layoutId="active-tab"
                      className="w-full h-full absolute inset-0 bg-accent group-hover:bg-accent/80 transition-colors duration-300"
                    />
                  )}
                </Button>
              ))} */}
              <Button
                onClick={() => setActiveTab(TRANSACTION_TABS.DEPOSIT)}
                size="sm"
                variant="ghost"
                className={cn(
                  "text-sm rounded-none text-primary/80 font-semibold relative hover:bg-secondary transition-colors duration-300 group",
                  {
                    "text-contrast hover:text-contrast":
                      activeTab === TRANSACTION_TABS.DEPOSIT,
                  }
                )}
              >
                <span className="relative z-10">Deposit</span>
                {activeTab === TRANSACTION_TABS.DEPOSIT && (
                  <motion.span
                    transition={{ duration: 0.2 }}
                    layoutId="active-tab"
                    className="w-full h-full absolute inset-0 bg-accent group-hover:bg-accent/80 transition-colors duration-300"
                  />
                )}
              </Button>
              <Button
                onClick={() => setActiveTab(TRANSACTION_TABS.WITHDRAW)}
                size="sm"
                variant="ghost"
                className={cn(
                  "text-sm rounded-none text-primary/80 font-semibold relative hover:bg-secondary transition-colors duration-300 group",
                  {
                    "text-contrast hover:text-contrast":
                      activeTab === TRANSACTION_TABS.WITHDRAW,
                  }
                )}
              >
                <span className="relative z-10">Withdraw</span>
                {activeTab === TRANSACTION_TABS.WITHDRAW && (
                  <motion.span
                    transition={{ duration: 0.2 }}
                    layoutId="active-tab"
                    className="w-full h-full absolute inset-0 bg-accent group-hover:bg-accent/80 transition-colors duration-300"
                  />
                )}
              </Button>
              <Button
                onClick={() => setActiveTab(TRANSACTION_TABS.REDEEM)}
                size="sm"
                variant="ghost"
                className={cn(
                  "text-sm rounded-none text-primary/80 font-semibold relative hover:bg-secondary transition-colors duration-300 group",
                  {
                    "text-contrast hover:text-contrast":
                      activeTab === TRANSACTION_TABS.REDEEM,
                  }
                )}
              >
                <span className="relative z-10">Redeem</span>
                {activeTab === TRANSACTION_TABS.REDEEM && (
                  <motion.span
                    transition={{ duration: 0.2 }}
                    layoutId="active-tab"
                    className="w-full h-full absolute inset-0 bg-accent group-hover:bg-accent/80 transition-colors duration-300"
                  />
                )}
              </Button>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-medium">Total Shares</h2>
                  <div className="flex items-end gap-1">
                    <h3 className="text-lg font-semibold" key={investedAmount}>
                      {Number(investedAmount ?? 0) / 10 ** 18}{" "}
                      {strategy.slug === "liquid-mode" && "LMT"}
                    </h3>
                    {/* <button className="text-xs font-bold text-accent relative -top-1">
                      [Max]
                    </button> */}
                  </div>

                  {/* <h2 className="font-medium">
                    {activeTab === TRANSACTION_TABS.DEPOSIT
                      ? "Deposit USDC"
                      : "Withdraw USDC"}
                  </h2> */}
                  {/* <div className="flex items-end gap-1">
                    <h3 className="text-lg font-semibold">0.00</h3>
                    <button className="text-xs font-bold text-accent relative -top-1">
                      [Max]
                    </button>
                  </div> */}
                </div>
                <div className="flex flex-col items-end">
                  <h2 className="font-medium">Total Value</h2>
                  <div className="flex items-end gap-1">
                    <h3 className="text-lg font-semibold" key={investedAmount}>
                      {Number(totalValue) / 10 ** 18}{" "}
                      {strategy.slug === "liquid-mode" && "WETH"}
                    </h3>
                    {/* <button className="text-xs font-bold text-accent relative -top-1">
                      [Max]
                    </button> */}
                  </div>
                  {/* <h2 className="font-medium">
                    {activeTab === TRANSACTION_TABS.DEPOSIT
                      ? "Deposit USDC"
                      : "Withdraw USDC"}
                  </h2> */}
                  {/* <div className="flex items-end gap-1">
                    <h3 className="text-lg font-semibold">0.00</h3>
                    <button className="text-xs font-bold text-accent relative -top-1">
                      [Max]
                    </button>
                  </div> */}
                </div>
              </div>
              <div>
                <div className="flex gap-3 items-center mt-auto">
                  <Input
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="text-xs font-semibold focus-visible:ring-accent py-[9px] h-auto"
                    type="number"
                    step="any"
                  />
                  <Button
                    size="sm"
                    onClick={handleTransaction}
                    className="capitalize"
                  >
                    {activeTab}
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
              onClick={() => open()}
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
