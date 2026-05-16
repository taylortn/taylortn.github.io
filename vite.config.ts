import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: process.cwd(),
  base: "/",
  build: {
    outDir: path.resolve(process.cwd()),
    assetsDir: "assets",
    emptyOutDir: false,
    rollupOptions: {},
  },
});
