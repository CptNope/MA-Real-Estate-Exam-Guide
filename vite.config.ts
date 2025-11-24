import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MA-Real-Estate-Exam-Guide/',
  
  build: {
    // Optimize bundle splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk (React, React-DOM)
          'vendor': ['react', 'react-dom'],
          
          // Heavy data modules
          'data-guides': ['./data/modules/guides'],
          'data-reference': ['./data/modules/reference'],
          'data-practice': ['./data/modules/practice'],
          
          // Calculator components (lazy loaded)
          'calculators': [
            './components/ProrationCalculatorView',
            './components/AmortizationView',
            './components/CMACalculatorView',
            './components/TransferTaxView'
          ],
        },
      },
    },
    
    // Optimize chunk size
    chunkSizeWarningLimit: 600,
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    
    // Minify options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
  },
  
  // Development optimizations
  server: {
    host: true,
  },
})