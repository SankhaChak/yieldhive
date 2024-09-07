"use client";

import {
  BentoGrid,
  BentoGridItem,
} from "@yieldhive/ui/components/ui/bento-grid";
import { cn } from "@yieldhive/ui/lib/utils";
import { motion } from "framer-motion";
import {
  ChartBarStackedIcon,
  ChartSplineIcon,
  CoinsIcon,
  CopyIcon,
  TableColumnsSplitIcon,
} from "lucide-react";
import Skeleton from "../../layout/skeleton";
import FeaturesHeader from "./header";

const items = [
  {
    title: "Goodness of the best protocols",
    description:
      "We go through a multitude of protocols and their best offerings to create a strategy.",
    header: <Skeleton />,
    icon: <CopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tons of strategies",
    description:
      "Choose from an assortment of chains and risks and involved protocols.",
    header: <Skeleton />,
    icon: <ChartBarStackedIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cross-chain",
    description:
      "All the strategies are usable from its native chains and other OP stack chains.",
    header: <Skeleton />,
    icon: <ChartSplineIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "One-click deposit",
    description:
      "You invest in a strategy and all the rest - from claiming rewards to risk mitigation is done by us.",
    header: <Skeleton />,
    icon: <CoinsIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Open Risk Disclosure",
    description:
      "Every strategy has its associated risks clearly written in english.",
    header: <Skeleton />,
    icon: <TableColumnsSplitIcon className="h-4 w-4 text-neutral-500" />,
  },
];

const Features = () => {
  return (
    <div className="container mx-auto">
      <FeaturesHeader />
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
          delay: 1.35,
        }}
      >
        <BentoGrid className="py-10">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={cn("hover:relative", {
                "md:col-span-2": i === 3 || i === 6,
              })}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </div>
  );
};

export default Features;
