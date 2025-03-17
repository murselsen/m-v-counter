import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  server: {
    open: true,
    port: 3000,
    hmr: { overlay: false },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
