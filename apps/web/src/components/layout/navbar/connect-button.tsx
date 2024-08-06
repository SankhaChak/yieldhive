"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button } from "@yieldhive/ui/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useAccount } from "wagmi";

const ConnectButton = () => {
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();

  return (
    <Button
      size="sm"
      className="bg-accent gap-2 group hover:bg-accent/80 focus-visible:ring-accent"
      onClick={() => open()}
      variant={isConnected ? "ghost" : "default"}
    >
      {isConnected ? (
        <div className="h-8 w-8 rounded-full bg-indigo-400"></div>
      ) : (
        <>
          <span>Connect Wallet</span>
          <div className="relative">
            <ChevronRight
              className="w-4 transform translate-x-0 group-hover:translate-x-[2px] transition-transform duration-300"
              strokeWidth={2}
            />
            <div className="absolute w-[11px] origin-left scale-x-0 group-hover:-scale-x-100 h-[1.5px] bg-contrast left-[11px] top-1/2 transform -translate-y-1/2 transition-all duration-300" />
          </div>
        </>
      )}
    </Button>
  );
};

export default ConnectButton;
