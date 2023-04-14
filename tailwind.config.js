/** @type {import('tailwindcss').Config} */
export default {
  content: ["node_modules/preline/dist/*.js"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
