/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      borderColor : {
        'primary' : 'rgb(17, 3, 45)',
        'secondary' : 'rgb(32, 24, 57)',
      }
    },
    fontfamily :{
      'profile-font' : 'lora'
    }
  },
  plugins: [],
}

