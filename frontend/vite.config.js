import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    allowedHosts: ["blogging-website-h0v6.onrender.com"], // Allow Render domain
  },
  build: {
    outDir: "dist",
  },
});
