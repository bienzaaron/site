import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      highlight: {
        alias: { yavascript: "javascript" },
      },
    }),
  ],
  kit: {
    adapter: adapter({
      pages: "public",
      assets: "public",
      fallback: false,
      precompress: false,
    }),
    alias: {
      $lib: "./src/lib",
    },
  },
};

export default config;
