"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const strategy = {
  name: "Strategy 1",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui eget est tincidunt varius. Donec sit amet turpis eget purus ultricies tincidunt. Sed nec orci nec odio aliquam luctus. Integer et turpis et est aliquet ultricies. Nullam nec nunc nec nunc ultricies tincidunt. Nullam nec nunc nec nunc ultricies tincidunt.",
};

const StrategyCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(cardRef, { once: true });

  if (isInView) {
    controls
      .start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "anticipate" },
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="w-full bg-secondary hover:bg-accent hover:text-contrast transition-colors duration-300 rounded-md relative p-4 md:p-8 flex flex-col-reverse md:!grid md:grid-cols-5 overflow-hidden group"
    >
      <div className="md:col-span-3">
        <h4 className="font-semibold">{strategy.name}</h4>
        <p className="text-sm mt-4 font-medium text-primary/80 group-hover:text-contrast/80 transition-colors duration-300">
          {strategy.description}
        </p>

        <div className="mt-12 flex -space-x-2">
          <span className="h-8 w-8 rounded-full bg-gray-900 ring ring-contrast group-hover:ring-accent transition-all duration-300"></span>
          <span className="h-8 w-8 rounded-full bg-gray-900 ring ring-contrast group-hover:ring-accent transition-all duration-300"></span>
          <span className="h-8 w-8 rounded-full bg-gray-900 ring ring-contrast group-hover:ring-accent transition-all duration-300"></span>
          <span className="h-8 w-8 rounded-full bg-gray-900 ring ring-contrast group-hover:ring-accent transition-all duration-300"></span>
        </div>
      </div>
      <div className="w-full col-span-2 relative hidden md:block">
        <img
          src="https://via.placeholder.com/250x300"
          alt="Placeholder"
          className="object-cover h-auto w-full md:!w-auto max-w-full md:absolute md:-right-12 md:-bottom-8 md:top-4 md:transform md:-rotate-3 rounded-md group-hover:md:-rotate-6 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
};

export default StrategyCard;
