/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          950: '#090B12',
          900: '#0d111b',
          850: '#121723',
          800: '#181F30',
          700: '#232c44',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        sky: {
          purple: '#8B8FF8',
          cyan: '#72D8FF',
          pink: '#F0A7D8',
          emerald: '#6FE59C',
          amber: '#FCD34D',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.95)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
