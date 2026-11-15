/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#14191F',
        'off-white': '#F7F7F5',
        'accent-lime': '#C4F000',
        'near-white': '#FAFAF8',
        'pure-white': '#FFFFFF',
        'pure-black': '#000000',
      },
      fontFamily: {
        archivo: ['"Archivo Black"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
      },
      spacing: {
        '1150': '1150px',
        '1512': '1512px',
        '1582': '1582px',
        '1528': '1528px',
        '750': '750px',
        '88': '88px',
        '1384': '1384px',
      },
      borderRadius: {
        '200': '200px',
        '30': '30px',
        '24': '24px',
        '4': '4px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'expand': 'expand 0.4s ease-out forwards',
        'collapse': 'collapse 0.4s ease-in forwards',
        'bar-fill': 'barFill 1.5s ease-out forwards',
        'curtain-reveal': 'curtainReveal 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        expand: {
          '0%': { width: '88px' },
          '100%': { width: '750px' },
        },
        collapse: {
          '0%': { width: '750px' },
          '100%': { width: '88px' },
        },
        barFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        curtainReveal: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
