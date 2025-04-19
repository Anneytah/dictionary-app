// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",  // <== This tells Tailwind to scan all your components
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

  