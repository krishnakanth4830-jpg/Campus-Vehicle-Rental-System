/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        campus: {
          forest: '#0F172A',      // Primary (Deep Navy)
          secondary: '#1E293B',   // Secondary (Slate Navy)
          emerald: '#2563EB',     // Primary Accent (Electric Blue)
          mint: '#38BDF8',        // Light Accent (Sky Blue)
          gold: '#38BDF8',        // Light Accent (Sky Blue)
          amber: '#F59E0B',       // Warning
          sand: '#F1F5F9',        // Soft Slate Background
          cream: '#F8FAFC',       // Background (Soft White)
          charcoal: '#0F172A',    // Main Text (Deep Navy)
          slate: '#64748B',       // Secondary Text (Slate Gray)
          border: '#E2E8F0',      // Border
          success: '#22C55E',     // Success / Eco Green
          warning: '#F59E0B',     // Warning
          error: '#EF4444'        // Error
        },
        navy: {
          primary: '#0F172A',
          secondary: '#1E293B',
          accent: '#2563EB',
          sky: '#38BDF8',
          bg: '#F8FAFC',
          card: '#FFFFFF',
          text: '#0F172A',
          muted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
