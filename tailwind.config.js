/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'hiragino': ['Hiragino Kaku Gothic Std', 'sans-serif'],
        'convergence': ['Convergence', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
