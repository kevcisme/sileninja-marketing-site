import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://sileninja.com",
  integrations: [
    tailwind(),
    mdx(),
    // Keep unlisted pages (e.g. the App Review overview) out of the sitemap.
    sitemap({ filter: (page) => !page.includes("/app-review/") }),
    icon(),
  ],
});
