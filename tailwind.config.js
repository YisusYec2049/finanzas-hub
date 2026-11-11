/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Geist (cargada en index.html desde Google Fonts), con la pila de
      // sistema como respaldo si la fuente no llega.
      fontFamily: {
        sans: [
          'Geist',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      // Misma escala que financial-platform (app/globals.css) y
      // support-tickets (tailwind.config.js) — no inventar una nueva.
      // El hub usa SOLO esta escala y blanco: nada de grises.
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#172554',
        },
      },
    },
  },
  plugins: [],
}
