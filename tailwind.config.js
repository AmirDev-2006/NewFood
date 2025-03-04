/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily:{
        "Sofia Bold" : "Sofia Bold",
        "Sofia Regular" : "Sofia Regular",
        "Sofia Medium" : "Sofia Medium"
      }
    },
  },
  plugins: [],
}

