// import daisyThemes from "daisyui/src/theming/themes";
import daisyui from "daisyui";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html, './src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [daisyui],
};
export default config;
