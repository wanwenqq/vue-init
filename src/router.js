import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)
export const ROUTES = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: () => import('./pages/home/Home.vue'),
    meta: {
      title: '自述文件'
    },
    children: [
      {
        path: '/dashboard',
        component: () => import('./pages/index/Dashboard.vue'),
        meta: {
          title: '系统首页'
        }
      },
      {
        path: '/table',
        component: () => import('./pages/tables/BaseTable.vue'),
        meta: {
          title: '基础表格'
        }
      },
      {
        path: '/tabs',
        component: () => import('./pages/tabs/Tabs.vue'),
        meta: {
          title: 'tab选项卡'
        }
      },
      {
        path: '/chart',
        component: () => import('./pages/charts/Chart.vue'),
        meta: {
          title: '百度echart'
        }
      },
      {
        path: '/404',
        component: () => import('./pages/error/404.vue'),
        meta: {
          title: '404错误'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('./pages/login/Login.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
const router = new Router({
  routes: ROUTES
})


// 使用钩子函数对路由进行权限判断
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  // const token = localStorage.getItem('token')
  // localStorage.removeItem('phone');
  const token = localStorage.getItem('phone');
  if (!token && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})


export default router