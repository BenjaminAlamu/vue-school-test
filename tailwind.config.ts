import prose from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        teachers: ["Teachers", "sans-serif"],
        briem: ["Briem Hand", "sans-serif"],
      },
      colors: ({}) => ({
        primary: "#011b33",
      }),
    },
  },
  plugins: [prose],
};
