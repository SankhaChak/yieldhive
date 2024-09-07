import { cn } from "@yieldhive/ui/lib/utils";
import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

const PythIcon = (props: Props) => {
  return (
    <svg
      className={cn("", props.className)}
      xmlns="http://www.w3.org/2000/svg"
      width="170"
      height="58"
      fill="none"
      viewBox="0 0 170 58"
      {...props}
    >
      <path
        fill="#E6DAFE"
        d="M64.415 33.62v-3.893h9.236c1.412 0 2.515-.4 3.305-1.202.79-.801 1.186-1.858 1.186-3.164s-.395-2.384-1.186-3.164c-.79-.781-1.893-1.171-3.305-1.171H61.475v18.993h-3.987V17h16.163c1.33 0 2.515.195 3.56.585 1.043.39 1.924.94 2.642 1.648.718.707 1.266 1.566 1.646 2.578.38 1.013.57 2.152.57 3.42 0 1.267-.19 2.378-.57 3.403a7.48 7.48 0 01-1.646 2.644c-.718.74-1.596 1.314-2.642 1.726-1.043.41-2.23.616-3.56.616h-9.236zM95.15 40.014v-8.738L82.94 17h5.409l8.953 10.604L106.284 17h5.125L99.167 31.276v8.738H95.15zM125.266 40.014V21.02h-10.578V17h25.189v4.02h-10.593v18.994h-4.018zM165.002 17h4.002v23.014h-4.002V17zM147.741 40.014v-9.961h14.888V26.49h-14.888V17h-4.002v23.014h4.002zM28.744 23.023a5.752 5.752 0 01-5.75 5.753v5.753c6.35 0 11.499-5.152 11.499-11.506 0-6.355-5.149-11.507-11.499-11.507a11.498 11.498 0 00-11.498 11.507V51.79l5.17 5.173.58.58v-34.52a5.752 5.752 0 015.748-5.754 5.752 5.752 0 015.75 5.754z"
      ></path>
      <path
        fill="#E6DAFE"
        d="M22.997 0a22.866 22.866 0 00-11.499 3.081A22.997 22.997 0 005.75 7.794 22.935 22.935 0 000 23.014v17.26l5.75 5.754V23.014c0-5.11 2.22-9.704 5.748-12.865a17.214 17.214 0 015.75-3.41 17.104 17.104 0 015.749-.986c9.524 0 17.247 7.729 17.247 17.26 0 9.533-7.723 17.261-17.247 17.261v5.754c12.702 0 22.996-10.305 22.996-23.014C45.993 10.304 35.7 0 22.997 0z"
      ></path>
    </svg>
  );
};

export default PythIcon;
