import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@svgs": path.resolve(__dirname, "./src/assets/svgs"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@components": path.resolve(__dirname, "./src/Components"),
      "@screens": path.resolve(__dirname, "./src/Screens"),
      "@contexts": path.resolve(__dirname, "./src/Contexts"),
    },
  },
});
