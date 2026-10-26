/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#050608',
          900: '#0a0c10',
          800: '#111318',
          700: '#1a1d24',
          600: '#262a33',
        },
        cyan: {
          glow: '#4ff2ff',
          DEFAULT: '#22d3ee',
        },
        violet: {
          glow: '#a78bfa',
          DEFAULT: '#8b5cf6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.35)',
        'glow-violet': '0 0 40px -10px rgba(139, 92, 246, 0.35)',
      },
      animation: {
        blob: 'blob 18s infinite ease-in-out',
        'blob-slow': 'blob 26s infinite ease-in-out',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.95)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
