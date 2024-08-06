"use client";

import { useMutation } from "@tanstack/react-query";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { Button } from "@yieldhive/ui/components/ui/button";
import { cn } from "@yieldhive/ui/lib/utils";
import { SIGNIN_MESSAGE } from "@yieldhive/utils/constants/wallet";
import { ChevronRight } from "lucide-react";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { useAccount, useDisconnect, useSignMessage } from "wagmi";
import { login } from "../../../utils/api/auth";
import { LOCALSTORAGE_IS_AUTHENTICATED } from "../../../utils/constants";

const ConnectButton = () => {
  const { isConnected, address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { disconnect } = useDisconnect();
  const { open } = useWeb3Modal();
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    LOCALSTORAGE_IS_AUTHENTICATED,
    false
  );

  const { mutate: loginUser } = useMutation({
    mutationKey: ["authenticate"],
    mutationFn: login,
    onSuccess: ({ data }: { data: { success: boolean } }) => {
      if (data.success) {
        setIsAuthenticated(true);
      }
    },
  });

  useEffect(() => {
    if (isConnected && address && !isAuthenticated) {
      (async () => {
        try {
          const signature = await signMessageAsync({ message: SIGNIN_MESSAGE });
          loginUser({ walletAddress: address, signature });
        } catch (error) {
          console.log("🚀 ~ file: connect-button.tsx:29 ~ error:", error);
          disconnect();
        }
      })();
    }
  }, [isConnected, address, isAuthenticated]);

  return (
    <Button
      size="sm"
      className={cn(
        "bg-accent gap-2 group hover:bg-accent/80 focus-visible:ring-accent",
        {
          "p-0 rounded-full bg-transparent hover:bg-transparent": isConnected,
        }
      )}
      onClick={() => open()}
      variant={isConnected ? "ghost" : "default"}
    >
      {isConnected ? (
        <div className="h-8 w-8 rounded-full bg-accent"></div>
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
