import sharedConfig from "@yieldhive/ui/tailwind.config.ts";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/app/**/*.tsx",
    "./src/components/*.tsx",
    "./src/components/**/*.tsx",
    "./src/components/**/**/*.tsx",
  ],
  presets: [sharedConfig],
};

export default config;
