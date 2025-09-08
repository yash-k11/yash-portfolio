/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",   // green-600
        secondary: "#16a34a"  // optional: blue-700 (you can add more if you want)
      },
    },
  },
  plugins: [],
}
