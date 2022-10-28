import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://lenyeg.com.br',
  // ...
  integrations: [tailwind(), sitemap(), vue()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
