/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#0f0f0f',
        'bg-tertiary': '#1a1a1a',
        'accent-red': '#ff1a1a',
        'accent-crimson': '#8b0000',
        'accent-glow': '#ff3333',
        'text-primary': '#ffffff',
        'text-secondary': '#b0b0b0',
        'text-muted': '#666666',
        'border-primary': '#1f1f1f',
        'dim': '#444444',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.7rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
        'sm': ['0.8rem', { lineHeight: '1.5', letterSpacing: '0.03em' }],
        'base': ['0.9rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'lg': ['1.1rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'xl': ['1.3rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        '2xl': ['1.6rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        '3xl': ['2.2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '4xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '5xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        '6xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.05em' }],
      },
      animation: {
        'scanlines': 'scanlines 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'reveal-up': 'revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-right': 'revealRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scanner': 'scanner 4s linear infinite',
        'marquee': 'marquee 20s linear infinite',
        'live-pulse': 'livePulse 2s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'organic-1': 'organic1 15s ease-in-out infinite',
        'organic-2': 'organic2 18s ease-in-out infinite',
      },
      keyframes: {
        scanlines: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(4px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        revealUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0', filter: 'blur(8px)' },
          '100%': { transform: 'translateY(0)', opacity: '1', filter: 'blur(0)' },
        },
        revealRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scanner: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        livePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.5)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        organic1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        organic2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-40px, 30px) scale(0.95)' },
          '66%': { transform: 'translate(25px, -35px) scale(1.05)' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        'grid': "linear-gradient(rgba(255,26,26,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,26,26,0.03) 1px, transparent 1px)",
        'radial-glow': "radial-gradient(ellipse at center, rgba(255,26,26,0.08) 0%, transparent 70%)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
    },
  },
  plugins: [],
}
