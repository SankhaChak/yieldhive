"use client";

// POC: Embedded Account

import { useAccount } from "@alchemy/aa-alchemy/react";
import { Button } from "@yieldhive/ui/components/ui/button";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useModalStore } from "../../../stores/useModalStore";
import { accountType } from "../../../utils/config/alchemy";
import { ENV } from "../../../utils/config/env";
import { ModalName } from "../../../utils/types";

const EmbeddedAccountSignInButton = () => {
  const { address } = useAccount({ type: accountType });
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const orgId = searchParams.get("orgId");

  const handleOpenModal = useModalStore((state) => state.handleOpenModal);

  const handleButtonClick = () => {
    if (address) {
      handleOpenModal(ModalName.EMBEDDED_ACCOUNTS_PROFILE);
    } else {
      handleOpenModal(ModalName.EMBEDDED_ACCOUNTS_AUTH);
    }
  };

  useEffect(() => {
    if (address && orgId === ENV.NEXT_PUBLIC_ORG_ID) {
      handleOpenModal(ModalName.EMBEDDED_ACCOUNTS_PROFILE);
    }
  }, [address, pathname]);

  return (
    <Button size="sm" variant="secondary" onClick={handleButtonClick}>
      {address ? "Profile" : "Sign In"}
    </Button>
  );
};

export default EmbeddedAccountSignInButton;
