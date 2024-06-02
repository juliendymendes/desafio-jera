/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.vue",],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["dark", "emerald", "dracula"],
  },
  plugins: [require('daisyui')],
}

