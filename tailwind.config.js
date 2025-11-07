/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#f9f4f6',
          pink: '#f8c3d4',
          green: '#6c9b7d',
          dark: '#2c2a29',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -25px rgba(248,195,212,0.45)',
      },
    },
  },
  plugins: [],
};

