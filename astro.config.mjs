import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://walkstudios.com",
  integrations: [tailwind(), sitemap()],
  output: "static",
  adapter: netlify(),
});
