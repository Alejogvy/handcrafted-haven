import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Playfair Display"', ...fontFamily.serif],
        body: ['"Open Sans"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
