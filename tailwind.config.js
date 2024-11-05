/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DINNextLTArabic', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#8A1538',
        'primary-hover': '#6A102B',
      },
      animation: {
        'modal-show': 'modalShow 0.3s ease-out',
      },
    },
  },
  plugins: [],
};