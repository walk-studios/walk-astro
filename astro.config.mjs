import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

export default defineConfig({
  site: "https://walkstudios.com",
  integrations: [tailwind()],
  output: "static",
  adapter: netlify(),
});
