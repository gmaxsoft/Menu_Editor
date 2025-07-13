import { resolve } from "path";
import { defineConfig } from "vite";
// Usunięto import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MenuEditor",
      formats: ['umd'],
      fileName: (format) => {
        return `menu-editor.js`;
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'styles.min.css';
          }
          return `[name][hash][extname]`;
        }
      }
    }
  },
});
