import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  isActive: boolean;
  setIsActive: (value: boolean | ((prevState: boolean) => boolean)) => void;
};

export const useSandboxStore = create<State>()(
  devtools(
    immer((set) => ({
      isActive: false,
      setIsActive: (value) =>
        set((state) => {
          state.isActive =
            typeof value === "function" ? value(state.isActive) : value;
        }),
    }))
  )
);
