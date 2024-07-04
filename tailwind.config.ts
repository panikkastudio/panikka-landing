import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0px 2px rgba(132, 240, 24, 0.96)",
      },
      colors: {
        primary: "#EA830C",
        secondary: "#84F018",
        link: "#8F8F8F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        avenir: ["var(--font-avenir)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
