/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkgray: "#272727",
        dblue: {
          100: "#213444",
          200: "#2134",
        },
      },
    },
  },
  plugins: [],
};
