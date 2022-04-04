module.exports = {
    content: ["./index.html"],
    theme: {
      extend: {},
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
    },
    plugins: [
      // ...
      require('./node_modules/@tailwindcss/line-clamp'),
    ],
  }