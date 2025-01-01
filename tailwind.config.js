const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Default Breakpoints (You can adjust these if needed)
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',

        // Custom Breakpoints (Optional)
        tablet: '900px',    // Custom breakpoint for tablets
        laptop: '1440px',   // Custom breakpoint for large laptops
        ultrawide: '1920px' // Custom breakpoint for ultrawide screens
      },
    },
  },
  plugins: [],
})

