import { readFileSync } from 'fs';
import path from 'path';
import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import JSON5 from 'json5';
import { defineConfig } from 'vite';

const tsConfig = JSON5.parse(
  readFileSync(resolve(__dirname, 'tsconfig.json'), 'utf8'),
);
const { compilerOptions } = tsConfig;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      ...(compilerOptions?.paths
        ? Object.fromEntries(
            Object.entries(compilerOptions?.paths).map(
              ([from, to]: [string, Array<string>]) => [
                from,
                path.resolve(__dirname, to[0]),
              ],
            ),
          )
        : {}),
    },
  },
  base: process.env.PUBLIC_URL,
});
