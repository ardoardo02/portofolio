/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy-slate backgrounds — softer than pure black, easier on the eyes
        night: {
          950: '#0B1120',
          900: '#0F172A',
          800: '#16203A',
          700: '#1E2A47',
        },
        // Cyan accent scale
        neon: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        // Secondary accent for variety (violet)
        pulse: {
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        // Subtle glows — intentionally soft so they don't strain the eyes
        'glow-sm': '0 0 12px rgba(34, 211, 238, 0.15)',
        'glow-md': '0 0 24px rgba(34, 211, 238, 0.20)',
        'glow-violet': '0 0 24px rgba(139, 92, 246, 0.18)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
