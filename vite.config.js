import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const projectRootDir = path.resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@utils',
        replacement: path.resolve(projectRootDir, 'src/utils/'),
      },
      {
        find: '@components',
        replacement: path.resolve(projectRootDir, 'src/components/'),
      },
      {
        find: '@interfaces',
        replacement: path.resolve(projectRootDir, 'src/interfaces/'),
      },
      {
        find: '@apis',
        replacement: path.resolve(projectRootDir, 'src/apis/'),
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
