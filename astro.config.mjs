import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';
import icon from "astro-iconset";

// https://astro.build/config
export default defineConfig({
  site: 'https://lenyeg.com.br',
  // ...
  integrations: [sitemap(), robotsTxt(), icon()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["svgo"],
    },
  },
});
