/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        'calc-vh': 'calc(100vh - 72px)',
      },
    },
  },
  plugins: [],
}