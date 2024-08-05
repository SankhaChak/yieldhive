import { cn } from "@yieldhive/ui/lib/utils";

type Props = React.SVGProps<SVGSVGElement>;

const LockIcon = (props: Props) => {
  return (
    <svg
      className={cn("w-6 h-6", props.className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#AFABE8"
        d="M9 7a3 3 0 116 0v2h2V7A5 5 0 007 7v2h2V7zm3 11a1 1 0 01-1-1v-3a1 1 0 012 0v3a1 1 0 01-1 1z"
      ></path>
      <path
        fill="#635CD2"
        d="M17 9H7a3 3 0 00-3 3v7a3 3 0 003 3h10a3 3 0 003-3v-7a3 3 0 00-3-3zm-4 8a1 1 0 01-2 0v-3a1 1 0 012 0v3z"
      ></path>
    </svg>
  );
};

LockIcon.displayName = "LockIcon";

export default LockIcon;
