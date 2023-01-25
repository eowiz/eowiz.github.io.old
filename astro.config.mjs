import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import emoji from "remark-emoji";

import { markdownImagesPlugin } from "./plugins/markdown-images";

// https://astro.build/config
export default defineConfig({
  markdown: {
    smartypants: true,
    gfm: true,
    remarkRehype: {
      allowDangerousHtml: true,
    },
    remarkPlugins: [emoji],
  },
  integrations: [tailwind()],
  vite: {
    plugins: [markdownImagesPlugin()],
  },
});
