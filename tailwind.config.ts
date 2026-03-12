import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        primary: '#6366f1',
        secondary: '#22c55e'
      },
      boxShadow: {
        glow: '0 0 40px rgba(99, 102, 241, 0.4)',
        card: '0 12px 48px rgba(15, 23, 42, 0.35)'
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 25% 20%, rgba(99,102,241,0.25), transparent 35%), radial-gradient(circle at 80% 20%, rgba(34,197,94,0.18), transparent 40%), linear-gradient(140deg, #020617 0%, #0f172a 45%, #111827 100%)'
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(8px)' }
        }
      },
      animation: {
        shimmer: 'shimmer 6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
