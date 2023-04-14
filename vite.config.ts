import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["./src/components"],
      dts: true,
    }),
    AutoImport({
      dts: true,
      dirs: ["./src/composables", "./src/store"],
      imports: ["vue", "pinia"],
    }),
  ],
});
