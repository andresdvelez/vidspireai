import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui(), addDynamicIconSelectors()],
} satisfies Config;
