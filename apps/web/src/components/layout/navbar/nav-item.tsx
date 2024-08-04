"use client";

import { cn } from "@yieldhive/ui/lib/utils";
import { usePathname } from "next/navigation";
import { HTMLAttributes, PropsWithChildren } from "react";
import { INavItem } from "../../../utils/types";
import NavDropdown from "./nav-dropdown";
import NavLink from "./nav-link";

interface Props {
  item: INavItem;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
}

const NavItem = (props: PropsWithChildren<Props>) => {
  const { item, children, className = "" } = props;

  const pathname = usePathname();
  const isActive = Boolean(item.href) && pathname === item.href;

  const commonProps = {
    className: cn(
      "flex items-center gap-x-1 text-base md:text-sm leading-6 text-primary/70 capitalize transition-all duration-300 font-semibold relative",
      {
        "text-accent !opacity-100": isActive,
      },
      className
    ),
    ...props,
  };

  return item.href ? (
    <NavLink href={item.href} isActive={isActive} {...commonProps}>
      {children}
    </NavLink>
  ) : (
    <NavDropdown navCards={item.cards || []} {...commonProps}>
      {children}
    </NavDropdown>
  );
};

export default NavItem;
