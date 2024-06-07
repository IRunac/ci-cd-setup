import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://0.0.0.0:80',
        changeOrigin: true,
        rewrite: path => path.replace('/api', '')
      }
    }
  },
  plugins: [vue()],
  build: {
    outDir: 'dist',
  }
});
