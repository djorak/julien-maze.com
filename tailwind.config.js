/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E7E0FB',
          100: '#D0C0F6',
          200: '#9D7DED',
          300: '#6E3FE4',
          400: '#4A1BC0',
          500: '#31127F',
          600: '#280F67',
          700: '#1D0B4C',
          800: '#130731',
          900: '#0A041B',
          950: '#05020D',
        },
        secondary: {
          50: '#EFFFD6',
          100: '#E0FFAD',
          200: '#C0FF5C',
          300: '#9FFF05',
          400: '#6EB300',
          500: '#3B6000',
          600: '#2F4D00',
          700: '#233800',
          800: '#192900',
          900: '#0D1400',
          950: '#060A00',
        },
      },
    },
  },
  plugins: [],
};
