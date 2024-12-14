import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
import fluid, { extract, fontSize, screens } from "fluid-tailwind";

const config: Config = {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    extend: {
      screens: {
        xs: "290px",
        ...defaultTheme.screens,
        screens,
        fontSize,
      },
      colors: {
        primary: {
          100: "#E0E9FF",
          200: "#A6C2FF",
          300: "#6B9CFF",
          400: "#3186FF",
          500: "#25A2FFFF",
          600: "#1A8CBF",
          700: "#126698",
          800: "#0B4672",
        },
        secondary: {
          100: "#E4E2FF",
          200: "#B4B0FF",
          300: "#837DFF",
          400: "#554EFF",
          500: "#130E2AFF",
          600: "#0F0C24",
          700: "#0A071A",
          800: "#060512",
        },
        tertiary: {
          100: "#f0b0d9",
          200: "#e67bc2",
          300: "#d846ab",
          400: "#cd0d9b",
          500: "#b21589",
          600: "#af0a87",
          700: "#9b0982",
          800: "#8a087c",
          900: "#6c0772",
        },
        dark: "#16151C",
        gray: "#a2a1a8",
        light: "#d9e1e1",
        "app-primary": "#4f98ca",
        "app-green": "#50d890",

        colorOption: {
          1: "#30be82",
          2: "#30beb6",
          3: "#5d30be",
          4: "#304fbe",
        },
      },
    },
  },
  plugins: [fluid],
};
export default config;
