import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: "@root",
                replacement: __dirname
            },
            {
                find: "@components",
                replacement: path.resolve(__dirname, "./src/components")
            },
            {
                find: "@assets",
                replacement: path.resolve(__dirname, "./src/assets")
            }
        ]
    }
});
