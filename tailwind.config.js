/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'app-background': '#1E1E1E',
        'app-boxes': '#333333',
        'app-gray': '#272626',
        'app-text': '#E4E3DA',
        'app-button': '#FF005D',
      },
    },
  },
  plugins: [],
}