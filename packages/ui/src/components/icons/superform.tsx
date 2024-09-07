import { cn } from "@yieldhive/ui/lib/utils";
import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const SuperformIcon = (props: Props) => {
  return (
    <svg
      className={cn("", props.className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2.83 18.785L0 15.958l3.473-3.47a6.358 6.358 0 014.135-1.852 2.37 2.37 0 00-1.49-.527H1.204V6.111h4.912a6.36 6.36 0 014.235 1.611 2.367 2.367 0 00-.681-1.425l-3.474-3.47L9.027 0 12.5 3.47a6.347 6.347 0 011.854 4.13c.33-.408.527-.925.527-1.489V1.204h4.002V6.11c0 1.623-.61 3.104-1.613 4.23a2.37 2.37 0 001.427-.68l3.473-3.47L25 9.018l-3.473 3.47a6.358 6.358 0 01-4.135 1.852 2.37 2.37 0 001.49.527h4.913v3.997h-4.912a6.36 6.36 0 01-4.235-1.61c.056.52.283 1.026.681 1.425l3.474 3.47-2.83 2.827-3.473-3.47a6.347 6.347 0 01-1.854-4.13 2.365 2.365 0 00-.527 1.488v4.908H6.117v-4.908c0-1.622.61-3.103 1.613-4.23a2.37 2.37 0 00-1.427.68l-3.474 3.47z"
      ></path>
    </svg>
  );
};

export default SuperformIcon;
