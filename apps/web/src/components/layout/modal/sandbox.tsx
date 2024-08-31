"use client";

import CheckIcon from "@yieldhive/ui/components/icons/check";
import { Button } from "@yieldhive/ui/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@yieldhive/ui/components/ui/dialog";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useModalStore } from "../../../stores/useModalStore";
import { useSandboxStore } from "../../../stores/useSandboxStore";
import {
  SANDBOX_INFO_LIST_ITEMS,
  SANDBOX_REDIRECT_PATH,
} from "../../../utils/constants/sandbox";

const SandboxInfoModal = () => {
  const handleCloseModal = useModalStore((state) => state.handleCloseModal);
  const setIsActive = useSandboxStore((state) => state.setIsActive);
  const isActive = useSandboxStore((state) => state.isActive);

  const handleEnableSandboxMode = () => {
    setIsActive(true);
    handleCloseModal();
  };

  // The user will be redirected to the sandbox mode page if the modal is closed and the sandbox mode is enabled
  useEffect(() => {
    return () => {
      if (isActive) {
        redirect(SANDBOX_REDIRECT_PATH);
      }
    };
  }, [isActive]);

  return (
    <DialogContent className="!top-1/2 !-translate-y-1/2 !left-1/2 !-translate-x-1/2 !max-w-xl !mx-auto !rounded-lg">
      <DialogHeader className="space-y-3">
        <DialogTitle>Sandbox Mode</DialogTitle>
        <DialogDescription>
          Sandbox mode allows you to play around with Yieldhive with paper
          money. You can switch back to the real mode from the button at the
          bottom right.
        </DialogDescription>
      </DialogHeader>
      <div className="py-2">
        <ul className="space-y-2">
          {SANDBOX_INFO_LIST_ITEMS.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon className="w-5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <DialogFooter>
        <Button
          onClick={handleEnableSandboxMode}
          type="submit"
          className="w-full"
        >
          Enable Sandbox Mode
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default SandboxInfoModal;
