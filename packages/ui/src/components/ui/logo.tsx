import { cn } from "@yieldhive/ui/lib/utils";

type Props = React.SVGProps<SVGSVGElement>;

const Logo = (props: Props) => {
  return (
    <svg
      className={cn("w-6 h-6", props.className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 84 81"
      {...props}
    >
      <path
        fill="#6E64DD"
        stroke="#6E64DD"
        strokeWidth="8"
        d="M4 14.087L19.887 5l15.887 9.087v16.777L19.887 39.95 4 30.864V14.087zM48.226 14.087L64.113 5 80 14.087v16.777L64.113 39.95l-15.887-9.087V14.087zM26.22 49.63l15.887-9.088 15.887 9.088v16.776l-15.887 9.087-15.887-9.087V49.63z"
      ></path>
    </svg>
  );
};

Logo.displayName = "Logo";

export default Logo;
