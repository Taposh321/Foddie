/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Example custom breakpoint
        'slider': '1200px', // Another custom breakpoint
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}