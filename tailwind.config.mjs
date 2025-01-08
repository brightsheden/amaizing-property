/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import daisyui from "daisyui";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  
  theme: {
    extend: {
      

      fontFamily:{
        heading: ['Poppins', 'cursive'],
        Popins:["Archivo", 'sans-serif']

      }

    },
  },
  plugins: [daisyui],
})