import { defineConfig } from 'vite';
import { resolve } from 'path';

import { createHtmlPlugin } from 'vite-plugin-html';
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'pages/a.html'),
        secondary: resolve(__dirname, 'pages/b.html')
      },
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      },
      plugins: [
        createHtmlPlugin({
          inject: {
            injectData: {
              // 这里可以设置公共的注入数据
            },
          },
          minify: true,
        }),
      ],
    },
  },
});
