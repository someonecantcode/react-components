const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'accent-bg-color': '#68348c',
        'accent-text-color': '#fff',
        'default-bg-color': '#f7f7f7',
        'default-text-color': "#333",
        'sidebar-bg': "#2d163d",
        'sidebar-accent': "#412058",
      },
      animation: {
        fadeIN: 'fadeOut 2s ease-in-out',
        fadeOUT: 'fadeOut 0.5s ease-out-in',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
  ],
}

