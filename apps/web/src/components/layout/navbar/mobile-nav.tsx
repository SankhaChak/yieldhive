import Logo from "@yieldhive/ui/components/ui/logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@yieldhive/ui/components/ui/sheet";
import { AlignRight } from "lucide-react";
import { INavItem } from "../../../utils/types";
import ConnectButton from "./connect-button";
import NavItem from "./nav-item";

interface Props {
  navItems: INavItem[];
}

const MobileNav = ({ navItems = [] }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>
        <AlignRight
          className="w-6 h-6 text-accent hover:text-accent/80 transition-colors duration-300"
          strokeWidth={3}
        />
      </SheetTrigger>
      <SheetContent aria-describedby="mobile-nav" className="!max-w-72">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-3">
              <Logo className="w-6 h-6" />
              <h3 className="font-semibold">YieldHive</h3>
            </div>
          </SheetTitle>
          <div className="flex flex-col items-start pt-12 gap-4">
            {navItems
              .filter((item) => Boolean(item.href))
              .map((item) => {
                return (
                  <NavItem key={item.href} item={item}>
                    {item.children}
                  </NavItem>
                );
              })}
          </div>
          <ConnectButton />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
