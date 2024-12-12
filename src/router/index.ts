import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router'
// import { autoLoadModuleRoutes } from './utils/autoLoad'
import generatedRoutes from '~pages'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0, behavior: 'smooth' }
  },
})

export default router
