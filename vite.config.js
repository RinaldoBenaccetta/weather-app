
import { defineConfig } from "vite"
import { resolve } from 'path'
import glob from "glob"

export default defineConfig({
    build: {
        rollupOptions: {
            input: glob.sync(resolve(__dirname, "src", "**/*.html")),
        },
        outDir: '../dist',// output directory
    },
    root: './src',// source folder
    base: './',// base public path : add ./ before url, otherwise vite make this : /url
})
