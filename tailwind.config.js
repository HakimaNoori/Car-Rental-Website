/** @type {import('tailwindcss').Config} */
  export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#ffc727",
          dark: "#111111",
        },
        container: {
          center: true,
          padding: {
            DEFAULT: "1rem",
            sm: "3rem",
          },
        },
      },
    },
    plugins: [],
  };

