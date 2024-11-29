import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect'
import px2re from '../../packages/plugin-px2rem/src'

// vite cannot watch specific dependencies in node_modules
// https://vite.dev/config/server-options.html#server-watch
// https://github.com/vitejs/vite/issues/8619
// if directly `import svgv from vite-plugin-svgv`, it will not trigger hmr

export default defineConfig({
  plugins: [vue(), px2re(), Inspect()],
})