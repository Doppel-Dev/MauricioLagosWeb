/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffce6',
          100: '#fff9bf',
          200: '#fff280',
          300: '#ffea40',
          400: '#ffe000', // Bandai-style Yellow
          500: '#e6ca00',
          600: '#b39d00',
          700: '#807000',
          800: '#4d4300',
          900: '#1a1700',
        },
        accent: '#ff003c', // Sharp Red for highlights
        dark: {
          base: '#050505',
          surface: '#121212',
          card: '#1a1a1a',
        }
      },
    },
  },
  plugins: [],
}
