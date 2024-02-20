/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Syne: ['Syne'],
        WorkSans: ['Work Sans'],
        aleway:['Raleway'],
        Figtree:['Figtree'],
        RedHatDisplay:['Red Hat Display'],
        Oxanium:['Oxanium'],
        Audiowide:['Audiowide'],
        Orbitron:['Orbitron'],
        DECTM: ['DEC Terminal Modern']
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
}

