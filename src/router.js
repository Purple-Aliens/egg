import { createRouter, createWebHistory } from 'vue-router'

import routerModules from './modules/routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [...routerModules()]
})

export default router
