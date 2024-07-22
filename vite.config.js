import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Face-Detection/",
  plugins: [react()],
  optimizeDeps: {
    include: ["@tensorflow-models/face-landmarks-detection"],
  },
  server: {
    port: 3000,
  },
});
