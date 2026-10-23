/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#050B18',
        'premium-black': '#03060D',
        'electric-blue': '#087BFF',
        cyan: '#22D3FF',
        'circuit-orange': '#FF6A00',
        'golden-orange': '#FFB000',
        silver: '#C7D0DD',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':       'fadeIn 0.7s ease-out forwards',
        'fade-in-slow':  'fadeIn 1.2s ease-out forwards',
        'slide-up':      'slideUp 0.7s ease-out forwards',
        'slide-up-slow': 'slideUp 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right':'slideInRight 0.7s ease-out forwards',
        'scale-in':      'scaleIn 0.5s ease-out forwards',
        'glow-pulse':    'glowPulse 2.5s ease-in-out infinite',
        'float':         'float 5s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 1.5s infinite',
        'spin-slow':     'rotateSlow 20s linear infinite',
        'spin-reverse':  'rotateReverse 25s linear infinite',
        'shimmer':       'shimmer 2s linear infinite',
        'pulse-dot':     'pulseDot 2s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.85)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(8,123,255,0.25)' },
          '50%':       { boxShadow: '0 0 45px rgba(8,123,255,0.55)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-14px)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        rotateReverse: {
          from: { transform: 'rotate(360deg)' },
          to:   { transform: 'rotate(0deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':       { opacity: '0.4', transform: 'scale(1.4)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
