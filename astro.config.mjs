import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import emoji from "remark-emoji";

// https://astro.build/config
import image from "@astrojs/image";

import { markdownImagesPlugin } from "./plugins/markdown-images";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
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
