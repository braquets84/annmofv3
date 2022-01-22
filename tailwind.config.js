module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,njk}"],
  theme: {
    extend: {
      colors:{
        'bg1-light': '#ffffff',
        'bg1-dark': '#1F2937',
        'bg2-light': '#F9FAFB', /* gray-50 */
        'bg2-dark': '#374151', /* gray-800 */
        'neutral-light': '#000000',
        'neutral-dark': '#ffffff',
        'color': '#86EFAC' /* green-300 */
      }
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
}
