/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryColor: "#000721",
        secondColor: "#717171",
        activeColor: "#3b51a4",
        whiteColor: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins", "sans"],
        lexed: ["Lexend", "sans"],
      },
    },
  },
  plugins: [],
};
