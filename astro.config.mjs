// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jhaxce.github.io/portfolio',
  // base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
