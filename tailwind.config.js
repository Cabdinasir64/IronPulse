/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iron: {
          DEFAULT: '#2A2A2A',      
          pulse: '#E02828',       
          steel: '#5A5A5A',          
          energy: '#3B82F6',       
          flame: '#F97316',    
          dark: '#1A1A1A'     
        },
      },
      fontFamily: {
        sans: ['"Barlow Condensed"', 'sans-serif'], 
        title: ['"Anton"', 'sans-serif'],        
      },
    },

  },
  plugins: [],
};
