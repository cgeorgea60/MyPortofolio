/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/img/george1.png')",
        // 'footer-texture': "url('/img/george1.png')"
      }
    },
  },
  plugins: [],
};
