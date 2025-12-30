/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9156',
          50: '#FFF4EE',
          100: '#FFE9DD',
          200: '#FFD3BB',
          300: '#FFBD99',
          400: '#FFA777',
          500: '#FF9156',
          600: '#FF6A1F',
          700: '#E74D00',
          800: '#AF3A00',
          900: '#772700',
        },
        dark: {
          DEFAULT: '#22282B',
          50: '#5C6A71',
          100: '#556269',
          200: '#475359',
          300: '#3A4449',
          400: '#2E363A',
          500: '#22282B',
          600: '#0E1112',
          700: '#000000',
        },
        surface: {
          white: '#FFFFFF',
          light: '#FAFAFA',
          muted: '#F5F5F5',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(34, 40, 43, 0.08)',
        'soft-lg': '0 10px 40px -10px rgba(34, 40, 43, 0.12)',
        'soft-xl': '0 20px 60px -15px rgba(34, 40, 43, 0.15)',
        'glow': '0 0 40px -10px rgba(255, 145, 86, 0.3)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-up-delayed': 'slide-up 0.6s ease-out 0.2s both',
        'fade-in': 'fade-in 0.8s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
