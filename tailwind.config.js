//  @type {import('tailwindcss').Config}
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundColor: {
        'custom-bg': '#F6F7F8'
      }
    },
  },
  plugins: [],
}
