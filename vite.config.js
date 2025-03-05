import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    Pages({
      dirs: "src/pages",
      extensions: ["js", "jsx"],
    }),
  ],
});
