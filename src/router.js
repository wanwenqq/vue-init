import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)
export const ROUTES = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./pages/Login.vue')
  }
]
const router = new Router({
  routes: ROUTES
})

// router.beforeEach((to, from, next) => {
//   // var isLogin = Boolean(store.state.token)
//   var token = sessionStorage.getItem('token')
//   console.log('token=======' + token)
//   if (!token && (to.path !== '/Login')) {
//     return next({ path: '/Login' })
//   }
//   next()
// })

export default router
