import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 
    plugins: [react()],
    base: './',
    build:{
        // ssr: 'src/server/entry-server.jsx',
        // rollupOptions: {
        //     input: 'src/server/entry-server.jsx'
        // },
        sourcemap: false,
        minify: 'esbuild',
    },
    esbuild: {
        // drop: ['console', 'debugger'],
    },
})