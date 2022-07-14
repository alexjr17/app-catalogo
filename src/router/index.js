import { createRouter, createWebHistory } from 'vue-router'

import Auth from './auth.js';
import PanelAdmin from './admin';

const routes = [].concat(
    Auth, PanelAdmin
  );

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
