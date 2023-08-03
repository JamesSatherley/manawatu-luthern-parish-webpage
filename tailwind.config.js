/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#040A0F",
        background: "#ECEDEE",
        primary: "#284559",
        secondary: "#9DD4FB",
        accent: "#3D6581",
      },
      transitionProperty: {
        fade: "opacity",
      },
      transitionDuration: {
        slow: "1000ms",
        normal: "500ms",
        fast: "300ms",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
