/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#2DD4BF",
        dark: "#1E293B",
        mid: "#E2E8F0",
        light: "#F8FAFC"
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: { themes: false },
}