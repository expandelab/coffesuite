// Build de un solo archivo HTML (útil para previsualizar/compartir): npm run build:single
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";
import path from "path";

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: { outDir: "dist-single", assetsInlineLimit: 100000000 },
});
