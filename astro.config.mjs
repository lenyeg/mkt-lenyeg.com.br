import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://lenyeg.com.br',
  // ...
  integrations: [tailwind(), sitemap(), vue(), robotsTxt()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
