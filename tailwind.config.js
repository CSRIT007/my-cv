/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)',
            opacity: '0.7'
          },
          '33%': { 
            transform: 'translateY(-20px) translateX(10px) scale(1.1)',
            opacity: '0.4'
          },
          '66%': { 
            transform: 'translateY(10px) translateX(-15px) scale(0.9)',
            opacity: '0.8'
          },
        },
        'float-medium': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)',
            opacity: '0.6'
          },
          '50%': { 
            transform: 'translateY(-30px) translateX(20px) scale(1.2)',
            opacity: '0.3'
          },
        },
        'float-fast': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) scale(1)',
            opacity: '0.5'
          },
          '25%': { 
            transform: 'translateY(-15px) translateX(-10px) scale(1.1)',
            opacity: '0.7'
          },
          '75%': { 
            transform: 'translateY(15px) translateX(10px) scale(0.9)',
            opacity: '0.3'
          },
        },
        'light-sweep-1': {
          '0%': { 
            transform: 'translateX(-100%) skewX(-15deg)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%) skewX(-15deg)',
            opacity: '0'
          },
        },
        'light-sweep-2': {
          '0%': { 
            transform: 'translateX(-100%) skewX(-10deg)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%) skewX(-10deg)',
            opacity: '0'
          },
        },
        'light-sweep-3': {
          '0%': { 
            transform: 'translateX(-100%) skewX(-20deg)',
            opacity: '0'
          },
          '50%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(100%) skewX(-20deg)',
            opacity: '0'
          },
        },
        'pulse-slow': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.4'
          },
          '50%': { 
            transform: 'scale(1.1)',
            opacity: '0.2'
          },
        },
        'twinkle-1': {
          '0%, 100%': { 
            opacity: '0.3',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'scale(1.5)'
          },
        },
        'twinkle-2': {
          '0%, 100%': { 
            opacity: '0.2',
            transform: 'scale(1)'
          },
          '33%': { 
            opacity: '0.8',
            transform: 'scale(1.3)'
          },
          '66%': { 
            opacity: '0.5',
            transform: 'scale(1.1)'
          },
        },
        'twinkle-3': {
          '0%, 100%': { 
            opacity: '0.4',
            transform: 'scale(1)'
          },
          '25%': { 
            opacity: '0.9',
            transform: 'scale(1.4)'
          },
          '75%': { 
            opacity: '0.6',
            transform: 'scale(1.2)'
          },
        },
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-medium': 'float-medium 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'light-sweep-1': 'light-sweep-1 10s linear infinite',
        'light-sweep-2': 'light-sweep-2 12s linear infinite 2s',
        'light-sweep-3': 'light-sweep-3 14s linear infinite 4s',
        'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
        'twinkle-1': 'twinkle-1 3s ease-in-out infinite',
        'twinkle-2': 'twinkle-2 4s ease-in-out infinite 1s',
        'twinkle-3': 'twinkle-3 5s ease-in-out infinite 2s',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'button-press': 'button-press 0.15s ease-in-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(30px) scale(0.95)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)'
          },
        },
        'slide-in-left': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-in-right': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'bounce-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-10px) scale(1.05)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)',
            transform: 'scale(1.02)'
          },
        },
        'shimmer': {
          '0%': { 
            backgroundPosition: '-200% 0'
          },
          '100%': { 
            backgroundPosition: '200% 0'
          },
        },
        'button-press': {
          '0%': { 
            transform: 'scale(1) translateY(0)'
          },
          '50%': { 
            transform: 'scale(0.98) translateY(2px)'
          },
          '100%': { 
            transform: 'scale(1) translateY(0)'
          },
        },
        // ... existing keyframes ...
      },
    },
  },
  plugins: [],
}

