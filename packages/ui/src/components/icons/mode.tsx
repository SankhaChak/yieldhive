import { cn } from "@yieldhive/ui/lib/utils";
import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const ModeIcon = (props: Props) => {
  return (
    <svg
      className={cn("", props.className)}
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 1760.4 431.2"
      version="1.1"
      viewBox="0 0 1760.4 431.2"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M356.7 19.9l-80.2 224v65.7h-26.3v-65.7L170 19.9H40.7v391.3h86.8v-195L92.9 105l24.7-8.7 112.8 315h66l112.8-315 24.7 8.7-34.7 111.2v195H486V19.9H356.7zm953.9 44.5c-21.2-15.7-45.9-27-74.3-34s-58.3-10.5-89.9-10.5h-130.2v391.3h141.9c29.3 0 57.3-4.2 84-12.7 26.7-8.5 50.3-20.9 70.7-37.3 20.4-16.4 36.6-36.7 48.7-60.8 12.1-24.1 18.1-52 18.1-83.7 0-35.7-6.2-66.1-18.6-91.2-12.4-25.1-29.2-45.4-50.4-61.1zm-32 204c-7.2 15.3-17.2 27.6-29.8 37-12.6 9.4-27.5 16.1-44.8 20.2-17.3 4.1-35.9 6.1-55.9 6.1H1103V99.5h51.2c18.2 0 35.5 2.3 52 6.9 16.5 4.6 30.9 11.5 43.1 20.7 12.2 9.2 22 20.9 29.2 35.1 7.2 14.2 10.9 30.9 10.9 50 .1 22.2-3.5 40.9-10.8 56.2zm250.2 63.3v-79.6h170.9v-79.6h-170.9v-73h190.9V19.9H1442v391.3h277.7v-79.6h-190.9z"></path>
      <ellipse cx="745.3" cy="215.6" rx="217.1" ry="215.6"></ellipse>
    </svg>
  );
};

export default ModeIcon;
