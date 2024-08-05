"use client";

import { AppProgressBar } from "next-nprogress-bar";

const NprogressProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <AppProgressBar
        height="4px"
        color="#8B81E3"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default NprogressProvider;
