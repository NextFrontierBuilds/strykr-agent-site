/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#10b981',
        dark: '#0f172a',
        light: '#f8fafc',
      },
    },
  },
  plugins: [],
}
