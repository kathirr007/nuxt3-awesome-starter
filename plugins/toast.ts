import { defineNuxtPlugin } from '#app'
import Toast from 'vue-toastification/dist/index.mjs'
import type { PluginOptions } from 'vue-toastification/dist/types/index'
// Import the CSS or use your own!
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin(({ vueApp }) => {
  const options: PluginOptions = {
    // You can set your default options here
  }
  vueApp.use(Toast, options)
})
