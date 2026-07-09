/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Pila tipográfica de sistema de macOS (San Francisco), con
      // fallbacks razonables en otros SO.
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      // Igual que support-tickets/tailwind.config.js — misma sensación
      // de entrada de página en toda la familia de apps.
      keyframes: {
        'page-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Cada bocho de polvo se desplaza en su propio recorrido
        // pequeño (dos variantes) para que la nube entera se sienta
        // en movimiento constante, no como un bloque estático.
        'dust-drift-a': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(3px, -3px) scale(1.06)' },
        },
        'dust-drift-b': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-4px, 2px) scale(0.95)' },
        },
        // Motas sueltas que aparecen, flotan un poco y se desvanecen.
        'dust-mote': {
          '0%, 100%': { transform: 'translate(0px, 0px)', opacity: '0' },
          '50%': { transform: 'translate(-5px, -7px)', opacity: '0.85' },
        },
        // Una herramienta se desvanece hacia adentro/afuera de la nube
        // con un leve flotar, en vez de "asomarse" desde un borde fijo.
        'tool-float': {
          '0%, 100%': { opacity: '0', transform: 'translateY(3px)' },
          '35%, 65%': { opacity: '1', transform: 'translateY(-3px)' },
        },
      },
      animation: {
        'page-in': 'page-in 0.25s ease-out',
        'dust-drift-a': 'dust-drift-a 5s ease-in-out infinite',
        'dust-drift-b': 'dust-drift-b 6s ease-in-out infinite',
        'dust-mote': 'dust-mote 4s ease-in-out infinite',
        'tool-float': 'tool-float 4.5s ease-in-out infinite',
      },
      // Misma escala que financial-platform (app/globals.css) y
      // support-tickets (tailwind.config.js) — no inventar una nueva.
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
