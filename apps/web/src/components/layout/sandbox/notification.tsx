"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSandboxStore } from "../../../stores/useSandboxStore";
import { useTransactionStore } from "../../../stores/useTransactionStore";
import { getFormattedBalance } from "../../../utils/sandbox";

const SandboxModeNotification = () => {
  const isActive = useSandboxStore((state) => state.isActive);
  const sandboxBalance = useTransactionStore((state) => state.sandboxBalance);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key="sandbox-mode-notification"
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1],
            delay: 0.2,
          }}
          className="fixed top-24 w-full text-center flex items-center justify-center"
        >
          <div className="rounded-full bg-accent flex items-center gap-2 px-1 py-1">
            <p className="py-2 pl-2 text-contrast">Sandbox Mode is active</p>
            <div className="py-2 px-3 bg-[#B4AFED] text-primary/80 font-semibold rounded-full">
              <p>Bal: {getFormattedBalance(sandboxBalance)} USDC</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SandboxModeNotification;
