/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        prm: "#9083D5",
        // prm:"#7C65F5",
        bgprm: "#C4C4C4",
      },
    },
  },
  plugins: [],
}
