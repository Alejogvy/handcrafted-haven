/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          background: 'var(--background)',
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          accent: 'var(--accent)'
        },
        fontFamily: {
          text: ['var(--font-text)'],
          title: ['var(--font-title)']
        }
      }
    }
  }