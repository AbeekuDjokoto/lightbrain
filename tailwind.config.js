/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        90: "90%",
      },
      maxWidth: {
        custom: "var(--max-width)",
      },
      boxShadow: {
        custom: "0 .5rem 1.0625rem #00000012",
      },
    },
  },
  plugins: [],
};
