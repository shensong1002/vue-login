import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './api/axios'

Vue.config.productionTip = true

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.axios = axios

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state获取当前的token是否存在
      next()
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路
      })
    }
  }
  else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
