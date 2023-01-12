import { defineNuxtPlugin } from '#app'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

export default defineNuxtPlugin(({ vueApp }) => {
  /* const options: PluginOptions = {
    // You can set your default options here
  } */
  vueApp.use(VueViewer)
})
