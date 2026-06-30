/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{ts,tsx,js,jsx}',
];
export const theme = {
  extend: {
    colors: {
      brand: {
        DEFAULT: '#0a3a68',
        2: '#1fa7b8',
        3: '#12355b',
      },
      surface: {
        DEFAULT: '#ffffff',
        2: '#f5f8fc',
      },
      'site-text': '#0d1b2a',
      muted: '#5d6b7d',
      'site-border': 'rgba(13, 27, 42, 0.1)',
    },
    borderRadius: {
      xl: '28px',
      lg: '20px',
      md: '16px',
      sm: '12px',
    },
    boxShadow: {
      site: '0 18px 40px rgba(10, 27, 50, 0.08)',
      card: '0 14px 30px rgba(10, 27, 50, 0.06)',
      'card-hover': '0 24px 44px rgba(8, 20, 40, 0.12)',
      'promo': '0 24px 45px rgba(8, 20, 40, 0.16)',
      'promo-hover': '0 30px 55px rgba(8, 20, 40, 0.22)',
      'detail': '0 18px 42px rgba(8, 20, 40, 0.08)',
      'gallery-arrow': '0 12px 28px rgba(8, 20, 40, 0.16)',
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
    },
    spacing: {
      'page-gutter': 'clamp(16px, 2vw, 24px)',
      'page-gutter-header': 'clamp(28px, 4vw, 56px)',
    },
    gridTemplateColumns: {
      'hero': '1fr 0.95fr',
      'two-col': '0.78fr 1.22fr',
      'split': '0.32fr 1.48fr',
      'footer': '1.2fr 0.9fr 0.9fr 1fr',
      'about-intro': '1fr 0.86fr',
      'detail-layout': 'minmax(0, 790px) minmax(340px, 385px)',
      'cars-list-card': 'minmax(230px, 290px) minmax(0, 1fr)',
    },
  },
};
export const plugins = [];
