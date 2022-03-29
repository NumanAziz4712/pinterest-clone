module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        slidein: 'slidein .5s ease-out',
      },
      keyframes: {
        slidein: {
          '0%': { opacity: '0' },

          '100%': { opacity: '100%' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
