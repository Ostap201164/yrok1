import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
    outDir: "../dist",
  },
  plugins: [injectHTML(), FullReload(["./src//.html"])],
});