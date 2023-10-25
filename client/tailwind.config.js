/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        laptop: { max: "1500px" },
        tablet: { max: "1024px" },
        phone: { max: "768px" },
        mini_phone: { max: "650px" },
      },
    },
  },
  plugins: [],
};
