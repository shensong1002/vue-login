import axios from 'axios'
import router from '@/router'
import store from '@/store'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.github.com'

// 添加请求拦截器
axios.interceptors.request.use(config => {
  if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
    config.headers.Authorization = `token ${store.state.token}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        // 401 清除token信息并跳转到登录页面
        store.dispatch('loginOut')
        router.replace({
          path: 'login',
          query: { redirect: router.currentRoute.fullPath }
        })
    }
  }
  return Promise.reject(error.response.data) // 返回接口返回的错误信息
})

export default axios