import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/js/src/theme/sass/main.scss",
                "resources/js/src/theme/sass/codebase/themes/corporate.scss",
                "resources/js/src/theme/sass/codebase/themes/earth.scss",
                "resources/js/src/theme/sass/codebase/themes/elegance.scss",
                "resources/js/src/theme/sass/codebase/themes/flat.scss",
                "resources/js/src/theme/sass/codebase/themes/pulse.scss",
                "resources/js/src/theme/codebase/app.js",
                "resources/js/src/theme/pages/datatables.js",
                "resources/js/app.js",
            ],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm-bundler.js",
            "@": path.resolve(__dirname, "resources/js/src/"),
            "@theme": path.resolve(__dirname, "resources/js/src/theme/"),
            "@components": path.resolve(__dirname, "resources/js/src/components/"),
            "@pages": path.resolve(__dirname, "resources/js/src/pages/"),
        },
    },
});
