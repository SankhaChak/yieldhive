"use client";

import { Button } from "@yieldhive/ui/components/ui/button";
import Logo from "@yieldhive/ui/components/ui/logo";
import { motion } from "framer-motion";
import { useState } from "react";
import { useModalStore } from "../../../stores/useModalStore";
import { useSandboxStore } from "../../../stores/useSandboxStore";
import { ModalName } from "../../../utils/types";

const SandboxModeSwitcher = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleOpenModal = useModalStore((state) => state.handleOpenModal);
  const isActive = useSandboxStore((state) => state.isActive);
  const setIsActive = useSandboxStore((state) => state.setIsActive);

  const handleEnableSandboxMode = () => {
    if (isActive) {
      setIsActive(false);
      return;
    }

    handleOpenModal(ModalName.SANDBOX_INFO);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 2,
      }}
    >
      <Button
        className="fixed right-10 bottom-10 p-0 rounded-full h-24 w-24 flex items-center justify-center group transition-all duration-300 scale-100 hover:scale-110 z-20"
        variant="outline"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={handleEnableSandboxMode}
      >
        <div className="absolute inset-0 animate-orbit">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="fill-accent group-hover:fill-contrast uppercase text-xs transition-colors duration-300">
              <textPath href="#circle" startOffset="0%">
                {isActive ? "Disable Sandbox Mode" : "Enable Sandbox Mode"}
              </textPath>
            </text>
          </svg>
        </div>
        <Logo
          className="w-8 h-8 group-hover:fill-contrast group-hover:stroke-contrast"
          fill={isHovering ? "#fff" : ""}
          stroke={isHovering ? "#fff" : ""}
        />
      </Button>
    </motion.div>
  );
};

export default SandboxModeSwitcher;
