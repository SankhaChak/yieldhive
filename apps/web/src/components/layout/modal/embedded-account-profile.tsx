"use client";

import { useAccount, useLogout } from "@alchemy/aa-alchemy/react";
import { Button } from "@yieldhive/ui/components/ui/button";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@yieldhive/ui/components/ui/dialog";
import { useModalStore } from "../../../stores/useModalStore";
import { accountType } from "../../../utils/config/alchemy";

const EmbeddedAccountProfile = () => {
  const { address } = useAccount({ type: accountType });
  const { logout } = useLogout();

  const handleCloseModal = useModalStore((state) => state.handleCloseModal);

  const handleLogOut = () => {
    logout();
    setTimeout(() => {
      handleCloseModal();
    }, 100);
  };

  return (
    <DialogContent className="!top-1/2 !-translate-y-1/2 !left-1/2 !-translate-x-1/2 !max-w-lg !mx-auto !rounded-lg">
      <DialogHeader className="space-y-3">
        <DialogTitle>Profile Details</DialogTitle>
      </DialogHeader>
      <div className="flex flex-col gap-4 pt-3 pb-2">
        <p>{address}</p>
      </div>
      <DialogFooter>
        <Button onClick={handleLogOut} type="submit" className="w-full">
          Sign Out
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default EmbeddedAccountProfile;
