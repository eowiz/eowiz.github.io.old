import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import emoji from "remark-emoji";
import { markdownImagesPlugin } from "./plugins/markdown-images";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  markdown: {
    smartypants: true,
    gfm: true,
    remarkRehype: {
      allowDangerousHtml: true
    },
    rehypePlugins: [[rehypeExternalLinks, {
      target: "_blank"
    }]],
    remarkPlugins: [emoji]
  },
  integrations: [tailwind(), partytown()],
  vite: {
    plugins: [markdownImagesPlugin()]
  }
});