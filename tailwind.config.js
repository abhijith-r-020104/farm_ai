module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./*.html",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Growth Green
        primary: {
          DEFAULT: "#2F9E44", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#22C55E", // green-500
          600: "#2F9E44", // green-600
          700: "#15803D", // green-700
          800: "#166534", // green-800
          900: "#14532D", // green-900
        },
        
        // Secondary Colors - Success Highlights
        secondary: {
          DEFAULT: "#7ED485", // green-300
          100: "#BBF7D0", // green-200
          200: "#86EFAC", // green-300
          300: "#7ED485", // green-300
        },
        
        // Accent Colors - Urgency Elements
        accent: {
          DEFAULT: "#F59E0B", // amber-500
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          DEFAULT: "#F6F8F7", // gray-50
          100: "#F1F5F9", // slate-100
        },
        
        // Text Colors
        text: {
          primary: "#0F172A", // slate-900
          secondary: "#64748B", // slate-500
          muted: "#94A3B8", // slate-400
        },
        
        // Status Colors
        success: {
          DEFAULT: "#10B981", // emerald-500
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        
        warning: {
          DEFAULT: "#F59E0B", // amber-500
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
        },
        
        error: {
          DEFAULT: "#EF4444", // red-500
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.33', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.56', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.43', fontWeight: '400' }],
        'cta': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      
      boxShadow: {
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'testimonial': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      
      borderRadius: {
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      
      animation: {
        'counter': 'counter 300ms ease-in-out',
        'fade-in': 'fadeIn 250ms ease-in-out',
        'slide-up': 'slideUp 300ms ease-in-out',
      },
      
      keyframes: {
        counter: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}