import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // plugins: [
    //     vue({
    //         template: {
    //             compilerOptions: {
    //                 isCustomElement: (tag) => ["FontAwesomeIcon"].includes(tag),
    //             },
    //         },
    //     }),
    // ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        proxy: {
            "/api": "http://127.0.0.1:8000",
        },
    },
});
