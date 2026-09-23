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
        obsidian: {
          950: '#06070a',
          900: '#0a0d14',
          850: '#0f1420',
          800: '#141b2d',
          700: '#1e2942',
        },
        cyber: {
          cyan: '#00f0ff',
          neon: '#00ffaa',
          purple: '#9d4edd',
          pink: '#ff4d8d',
          sakura: '#ff77aa',
          amber: '#f59e0b',
        },
        anime: {
          pink: '#ff3385',
          rose: '#ff4d8d',
          dark: '#07090e',
          card: '#0d111a',
        },
        asuka: {
          red: '#ff1f44',
          crimson: '#d90429',
          flame: '#ff5400',
          orange: '#ff7b00',
          amber: '#ffb703',
          dark: '#07080d',
          panel: '#0e111a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
