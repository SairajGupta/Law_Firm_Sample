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
          navy: '#0F2747',
        },
        dark: {
          navy: '#081B33',
        },
        luxury: {
          gold: '#C8A24A',
        },
        background: '#F8F8F7',
        light: {
          gray: '#EFEFEF',
        },
        text: {
          main: '#1E1E1E',
          muted: '#6A6A6A',
        },
        border: {
          light: '#E3E3E3',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', '"Amiri"', 'serif'],
        body: ['Inter', '"Cairo"', 'sans-serif'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'soft-lg': '0 20px 50px -10px rgba(0,0,0,0.12)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      }
    },
  },
  plugins: [],
}
