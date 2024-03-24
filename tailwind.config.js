/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    screens: {
      mobile: { max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    daisyui: {
      themes: ["light"],
    },
    extend: {},
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}