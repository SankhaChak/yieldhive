import { useEffect } from "react";

const useBlockBodyScroll = (shouldBlockScroll: boolean) => {
  useEffect(() => {
    if (shouldBlockScroll) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [shouldBlockScroll]);
};

export default useBlockBodyScroll;
