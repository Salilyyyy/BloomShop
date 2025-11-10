/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blush: '#f9eef4',
          mist: '#f4f9f7',
          petal: '#f3c8d8',
          meadow: '#8db8a5',
          moss: '#4f7462',
          mossLight: '#6b8f7c',
          mossDark: '#3a5a47',
          charcoal: '#1f1d1e',
          rose: '#e91e63',
          roseLight: '#fce4ec',
          roseDark: '#c2185b',
          gold: '#ffd700',
          goldLight: '#fff9c4',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -20px rgba(143, 179, 164, 0.28)',
        glass: '0 20px 45px -15px rgba(31, 29, 30, 0.18)',
        'glass-strong': '0 25px 50px -12px rgba(31, 29, 30, 0.25)',
        'glow-rose': '0 0 20px rgba(233, 30, 99, 0.3)',
        'glow-moss': '0 0 20px rgba(79, 116, 98, 0.3)',
        'inner-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        'card-hover': '0 35px 80px -20px rgba(31, 29, 30, 0.3)',
      },
      backdropBlur: {
        xs: '6px',
      },
    },
  },
  plugins: [],
};
