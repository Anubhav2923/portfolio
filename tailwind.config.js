/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-down': 'fadeInDown 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-right': 'fadeInRight 1s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 4s',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'text-shimmer': 'textShimmer 3s ease-in-out infinite',
        'progress-bar': 'progressBar 1.5s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
        'scroll-left-to-right': 'scrollLeftToRight 30s linear infinite',
        'scroll-right-to-left': 'scrollRightToLeft 30s linear infinite',
        'wave-1': 'wave1 15s ease-in-out infinite',
        'wave-2': 'wave2 20s ease-in-out infinite reverse',
        'geometric-float': 'geometricFloat 20s linear infinite',
        'particle-float': 'particleFloat 25s linear infinite',
        'grid-move': 'gridMove 30s linear infinite',
        'dots-move': 'dotsMove 25s linear infinite',
        'orbit-slow': 'orbitSlow 20s linear infinite',
        'orbit-medium': 'orbitMedium 15s linear infinite',
        'orbit-fast': 'orbitFast 10s linear infinite',
        'orbit-reverse': 'orbitReverse 25s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        bounceGentle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
        pulseSlow: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
        },
        textShimmer: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        progressBar: {
          '0%': {
            width: '0%',
          },
          '100%': {
            width: '100%',
          },
        },
        countUp: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        scrollLeftToRight: {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
        scrollRightToLeft: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        wave1: {
          '0%, 100%': {
            d: 'path("M0,400 C300,200 600,600 1200,300 L1200,800 L0,800 Z")',
          },
          '50%': {
            d: 'path("M0,300 C300,500 600,100 1200,400 L1200,800 L0,800 Z")',
          },
        },
        wave2: {
          '0%, 100%': {
            d: 'path("M0,500 C400,300 800,700 1200,400 L1200,800 L0,800 Z")',
          },
          '50%': {
            d: 'path("M0,600 C400,200 800,600 1200,300 L1200,800 L0,800 Z")',
          },
        },
        geometricFloat: {
          '0%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-20px) rotate(90deg)',
          },
          '50%': {
            transform: 'translateY(0px) rotate(180deg)',
          },
          '75%': {
            transform: 'translateY(20px) rotate(270deg)',
          },
          '100%': {
            transform: 'translateY(0px) rotate(360deg)',
          },
        },
        particleFloat: {
          '0%': {
            transform: 'translateY(100vh) translateX(0px)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100px) translateX(100px)',
            opacity: '0',
          },
        },
        gridMove: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(30px, 30px)',
          },
        },
        dotsMove: {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '100%': {
            transform: 'translate(20px, 20px)',
          },
        },
        orbitSlow: {
          '0%': {
            transform: 'rotate(0deg) translateX(200px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(200px) rotate(-360deg)',
          },
        },
        orbitMedium: {
          '0%': {
            transform: 'rotate(0deg) translateX(200px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(200px) rotate(-360deg)',
          },
        },
        orbitFast: {
          '0%': {
            transform: 'rotate(0deg) translateX(200px) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateX(200px) rotate(-360deg)',
          },
        },
        orbitReverse: {
          '0%': {
            transform: 'rotate(360deg) translateX(200px) rotate(-360deg)',
          },
          '100%': {
            transform: 'rotate(0deg) translateX(200px) rotate(0deg)',
          },
        },
      },
    },
  },
  plugins: [],
};