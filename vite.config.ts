import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterExports } from "unplugin-vue-router";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        "vue",
        {"@vue-router": VueRouterExports}
      ],
      vueTemplate: false
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [
        IconsResolver({
          prefix: "icon",
          alias: {
            "fas": "fa6-solid",
            "fab": "fa6-brands",
            "far": "fa6-regular"
          }
        })
      ]
    }),
    Icons({
      compiler: "vue3"
    }),
    VueRouter({
      routesFolder: "src/views"
    })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  }
});
