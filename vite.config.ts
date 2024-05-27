import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    legacy(),
  ],
});
