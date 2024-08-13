import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fit, minmax(250px, 1fr));",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
