"use client";
import { cn } from "@yieldhive/ui/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div
      className={cn(
        "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
  showBadge = false,
  showBorder = false,
  badgeText = "",
}: {
  children: React.ReactNode;
  className?: string;
  showBorder?: boolean;
  showBadge?: boolean;
  badgeText?: string;
}) => {
  return (
    <motion.div
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1 px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500`,
        className
      )}
    >
      {children}
      {showBorder && (
        <motion.div
          initial={{ right: "100%" }}
          animate={{ right: "0%" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{
            position: "absolute",
            top: "-5%",
            height: "110%",
            width: "5px",
            backgroundColor: "#8B81E3",
          }}
          className="rounded-[2px]"
        />
      )}
      {showBadge && (
        <motion.div
          initial={{ left: "0%" }}
          animate={{ left: "100%" }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            delay: 0.5,
          }}
          style={{
            position: "absolute",
            top: "-20px",
            backgroundColor: "#8B81E3",
            color: "#FFF",
            padding: "3px 5px",
            borderRadius: "3px",
            fontSize: "12px",
          }}
          className="transform -translate-x-[5px] hidden md:block"
        >
          {badgeText}
        </motion.div>
      )}
    </motion.div>
  );
};
