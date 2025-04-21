/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hacker-green': '#00FF41',
        'hacker-red': '#FF3E3E',
        'hacker-purple': '#B14EFF',
        'terminal-black': '#0D0D0D',
        'dark-bg': '#121212',
        'medium-dark': '#1E1E1E',
        'light-dark': '#2D2D2D',
        'terminal-text': '#E0E0E0',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 2s infinite linear alternate-reverse',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'matrix-fade': 'matrix-fade 20s linear infinite',
      },
      keyframes: {
        'cursor-blink': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00FF41' },
        },
        'matrix-fade': {
          '0%': { opacity: 0.1 },
          '5%': { opacity: 0.3 },
          '10%': { opacity: 0.1 },
          '15%': { opacity: 0.3 },
          '20%': { opacity: 0.1 },
          '25%': { opacity: 0.3 },
        }
      },
    },
  },
  plugins: [],
};