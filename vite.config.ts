import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build files (default is 'dist')
    sourcemap: true, // Generate source maps for easier debugging in production
  },
  server: {
    port: 3000, // Dev server port (default is 3000)
    open: true, // Automatically open the browser when the server starts
  },
  resolve: {
    alias: {
      '@': '/src', // Simplify imports by using '@' as an alias for '/src'
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // Ensure these dependencies are pre-bundled
  },
});
