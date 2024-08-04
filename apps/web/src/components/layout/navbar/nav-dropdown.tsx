import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { cn } from "@yieldhive/ui/lib/utils";
import { ChevronDown } from "lucide-react";
import { Fragment, HTMLAttributes, PropsWithChildren } from "react";
import { INavCard } from "../../../utils/types";
import NavCard from "./nav-card";

interface NavDropdownProps {
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
  navCards: INavCard[];
}

const NavDropdown = (props: PropsWithChildren<NavDropdownProps>) => {
  const { navCards, children, className = "", ...otherProps } = props;

  return (
    <PopoverGroup>
      <Popover>
        <PopoverButton
          className={cn("group min-w-max", className)}
          {...otherProps}
        >
          <span className="min-w-min">{children}</span>
          <ChevronDown
            className="w-4 h-4 transform translate-y-0 group-hover:translate-y-[2px] transition-transform duration-300"
            strokeWidth={3}
          />
        </PopoverButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <PopoverPanel className="absolute left-1/2 transform -translate-x-1/2 top-0 container mx-auto -z-10 pt-20 pointer-events-none">
            <div className="max-w-[85%] grid bg-contrast shadow ring-1 ring-gray-900/5 grid-cols-3 gap-x-4 p-4 xl:gap-x-2 rounded-md pointer-events-auto">
              {navCards.slice(0, 3).map((card) => (
                <NavCard key={card.title} {...card} />
              ))}
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </PopoverGroup>
  );
};

export default NavDropdown;
