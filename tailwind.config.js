/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
  ],
  darkMode: "class",
  colors: {
    primary: "#00FE9B",
    secondary: "#0090F3",
    dark: "#111111",
  },
  plugins: [],
};
