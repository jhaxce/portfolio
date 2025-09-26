// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://jhaxce.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  // adapter: vercel(),
});
