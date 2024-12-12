import type { App } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

export function setupTanstackVueQuery(app: App) {
  app.use(VueQueryPlugin, {
    enableDevtoolsV6Plugin: true,
  })
}
