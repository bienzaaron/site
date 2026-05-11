import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import { Mode, plugin as mdPlugin } from "vite-plugin-markdown";

const markdownUtils = new MarkdownIt().utils;
const markdownIt: MarkdownIt = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
  highlight(code: string, lang: string): string {
    const grammar = lang ? Prism.languages[lang] : undefined;

    if (!grammar || !lang) {
      return markdownUtils.escapeHtml(code);
    }

    return Prism.highlight(code, grammar, lang);
  },
});

export default defineConfig({
  plugins: [
    mdPlugin({
      mode: [Mode.HTML],
      markdownIt,
    }),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
});
