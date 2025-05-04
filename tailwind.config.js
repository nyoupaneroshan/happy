/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6b6b',
          500: '#FF0000', // primary red
          600: '#e60000',
          700: '#cc0000',
          800: '#990000',
          900: '#660000',
        },
        secondary: {
          50: '#f0f6ff',
          100: '#e0ecff',
          200: '#c7dcff',
          300: '#a0c3ff',
          400: '#6b9eff',
          500: '#0047BB', // secondary blue
          600: '#0041a8',
          700: '#003a96',
          800: '#002c72',
          900: '#001d4d',
        },
        dark: '#1A2A3A',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};