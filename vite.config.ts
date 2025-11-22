import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // 在 GitHub Actions 中，环境变量可能直接通过 process.env 传递
    const apiKey = process.env.DEEPSEEK_API_KEY || env.DEEPSEEK_API_KEY || '';
    return {
      base: '/my-life-script/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(apiKey),
        'process.env.DEEPSEEK_API_KEY': JSON.stringify(apiKey),
        'import.meta.env.VITE_DEEPSEEK_API_KEY': JSON.stringify(apiKey)
      },
      envPrefix: 'VITE_',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
