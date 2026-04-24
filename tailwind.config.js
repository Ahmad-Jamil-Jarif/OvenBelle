/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#795465',
          container: '#f8c8dc',
        },
        secondary: {
          container: '#e6dfcf',
        },
        tertiary: {
          DEFAULT: '#834e68',
          container: '#ffc5de',
        },
        background: 'var(--background)',
        surface: 'var(--surface)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        ambient: '0 10px 40px -10px rgba(121, 84, 101, 0.08), 0 4px 12px -4px rgba(121, 84, 101, 0.05)',
      },
    },
  },
  plugins: [],
};
