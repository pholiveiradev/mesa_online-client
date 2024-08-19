/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"], // Use o tema "light" padrão do DaisyUI
  },
  plugins: [require("daisyui")],
};
