import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import emoji from "remark-emoji";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [emoji],
    extendDefaultPlugins: true,
  },
  integrations: [tailwind()],
});
