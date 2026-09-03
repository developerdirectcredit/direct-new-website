import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// `npm run build`        -> normal dist/ (assets in separate files)
// `SINGLE=1 npm run build` -> one self-contained dist/index.html (images inlined)
const single = process.env.SINGLE === "1";

export default defineConfig({
  plugins: [react(), ...(single ? [viteSingleFile()] : [])],
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
    allowedHosts: true,
  },
  build: {
    assetsInlineLimit: single ? 100 * 1024 * 1024 : 4096,
  },
});
