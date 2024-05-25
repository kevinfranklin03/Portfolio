
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-background": "url('/public/images/bg.png')" ,
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        colors: {
          logoBlue: '#4B6D85',
          logoYellow: '#DFE9AA',
  
        }, 
        fontFamily: {
          Space_Grotesk: ['var(--font-Space_Grotesk-sans)'],
        },
      }
  },
  plugins: [],
};
