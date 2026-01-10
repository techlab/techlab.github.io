// tailwind.config.js
module.exports = {
  content: [
    './docs/.vitepress/theme/**/*.{vue,js,ts}',
    './docs/.vitepress/components/**/*.{vue,js,ts}',
    './docs/**/*.md',
  ],
  darkMode: ['class', 'media'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f4fb',
          100: '#cce9f7',
          200: '#99d3ef',
          300: '#7ec4f0',
          400: '#5ea8de',
          500: '#4a9dd1',
          600: '#3d8bc9',
          700: '#2f79b1',
          800: '#246099',
          900: '#1a4881',
        },
      },
    },
  },
  plugins: [],
};