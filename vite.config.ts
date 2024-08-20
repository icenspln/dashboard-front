import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',  // Ensure this matches where Electron is looking for files
  },
  base: './',
  plugins: [react()],
});
