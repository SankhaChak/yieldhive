"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroProductDemo = () => {
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
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
        delay: 0.8,
      }}
      className="container mx-auto pb-12"
    >
      <div className="relative rounded-lg mt-12 w-full md:!w-10/12 mx-auto overflow-hidden">
        {/* <BorderBeam colorFrom="#6E64DD" colorTo="#C3C0F2" borderWidth={3} /> */}
        <Image
          src="https://hackathons.youprotab.com/hackathons/superhack-2024/hero.png"
          height={720}
          width={1080}
          alt="Hero Product Demo"
          className="w-full"
        />
      </div>
    </motion.div>
  );
};

export default HeroProductDemo;
