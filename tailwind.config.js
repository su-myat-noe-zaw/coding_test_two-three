/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#E22A7F",
        },
        gray: {
          bg: "#F5F5F5",
          default: "#D6D6D6",
          darker: "#404040",
          dark: "#878787",
          light: "#D6D8D8",
          text: "#DDDEDE",
        },

      }
    },
  },
  plugins: [],
}

