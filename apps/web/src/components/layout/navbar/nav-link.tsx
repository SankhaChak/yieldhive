import Link from "next/link";
import { HTMLAttributes, PropsWithChildren } from "react";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  className?: HTMLAttributes<HTMLAnchorElement>["className"];
}

const NavLink = (props: PropsWithChildren<NavLinkProps>) => {
  const { href, isActive, children, className = "", ...otherProps } = props;

  return (
    <Link href={href} className={className} {...otherProps}>
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent animate-scribble"></span>
      )}
    </Link>
  );
};

export default NavLink;
