import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.cubeyond.net/",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});
