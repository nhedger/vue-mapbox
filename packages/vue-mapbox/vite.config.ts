import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            name: 'vue-mapbox',
            entry: path.resolve(__dirname, 'src/main.ts'),
            fileName: (format) => `vue-mapbox.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },

            },
        },
    },
    plugins: [vue()],
});
