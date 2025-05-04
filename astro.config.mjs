// astro.config.mjs
import { defineConfig } from 'astro/config';
import { astroImageTools } from 'astro-imagetools';  // named export 그대로
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    mdx(),                  // MDX 지원
    astroImageTools,        // ⚠️ () 없이 등록
  ],
  vite: {
    plugins: [
      tailwindcss(),        // Tailwind v4+ Vite 플러그인
    ],
  },
});
