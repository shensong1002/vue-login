import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Repository from '@/components/Repository'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/repository',
      component: Repository,
      meta: { requireAuth: true } // 添加该字段，表示进入这个路由是需要登录的
    }
  ]
})
