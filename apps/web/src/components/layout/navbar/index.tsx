import Logo from "@yieldhive/ui/components/ui/logo";
import Link from "next/link";
import { navItems } from "../../../utils/constants";
import ConnectButton from "./connect-button";
import EmbeddedAccountSignInButton from "./embedded-account-poc";
import MobileNav from "./mobile-nav";
import NavItem from "./nav-item";

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 isolate z-10 bg-contrast/50 backdrop-filter backdrop-blur-xl shadow-sm">
        <nav
          aria-label="Desktop navigation"
          className="mx-auto flex container items-center justify-between p-6 lg:!px-8 !py-4"
        >
          <div className="flex-1 hidden md:block justify-start items-center">
            <div className="flex items-center gap-8 [&:hover>a]:opacity-50 [&>a:hover]:opacity-100 [&:hover_button]:opacity-50 [&_button:hover]:!opacity-100">
              {navItems.map((item) => (
                <NavItem key={item.href} item={item}>
                  {item.children}
                </NavItem>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center px-4">
            <Link href="/">
              <Logo className="w-8 h-8 hover:opacity-80 transition-opacity duration-300" />
            </Link>
          </div>
          <div className="flex-1 justify-end items-center hidden md:!flex gap-2">
            <EmbeddedAccountSignInButton />
            <ConnectButton />
          </div>
          <div className="block md:hidden ml-8">
            <MobileNav navItems={navItems} />
          </div>
        </nav>
      </header>
      {/* <Gg /> */}
    </>
  );
};

export default Navbar;
