/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azul_claro: '#004C97',
        gris_claro: '#3C372F',
        blanco: '#FFFFFFFF',
        rojo_claro: '#E1251B',
        rojo_claro_thin: '#FE4C4C',
        negro: '#000000',
        azul_verde: '#96DAEA',
        azul_agua: '#029094'
      },
      
    }
  },
  plugins: [addDynamicIconSelectors()]
}
