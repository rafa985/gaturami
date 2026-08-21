import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://gaturami.com/",
  vite: {
    plugins: [tailwindcss()]
  }
});
