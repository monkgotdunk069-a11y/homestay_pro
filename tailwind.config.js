/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#d9ede5',
          200: '#b4dbcc',
          300: '#83c0a9',
          400: '#52a085',
          500: '#31836a',
          600: '#226855',
          700: '#1b5344',
          800: '#164337',
          900: '#12382e',
          950: '#0a1f1a',
        },
        clay: {
          50: '#fdf6f0',
          100: '#fae9d8',
          200: '#f5d0af',
          300: '#eeaf7c',
          400: '#e5874a',
          500: '#dc6829',
          600: '#ce521e',
          700: '#ab3e1b',
          800: '#88331d',
          900: '#6e2c1a',
        },
        cream: '#faf8f4',
        stone: '#4a4540',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
