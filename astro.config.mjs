// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://jhaxce.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  adapter: github(),
});
