import './assets/index.less'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/https'
import './assets/normalize.css'

Vue.prototype.$api = api
Vue.use(ElementUI)


// 使用钩子函数对路由进行权限判断
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  const token = localStorage.getItem('token')
  if(!token && to.path !== '/login'){
    next('/login')
  }else{
    next()
  }
})




new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')