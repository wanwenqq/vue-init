// http.js
import axios from 'axios'
import store from '../store'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:5000/v1/login'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://prod.xxx.com'
}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 10 })

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
/**
  * 请求拦截器
  * 每次请求前，如果存在token则在请求头中携带token
  */
instance.interceptors.request.use(
  config => {
    // 登录流程控制中，根据本地是否存在token判断用户的登录情况
    // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token
    // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码
    // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  })

// 响应拦截器
instance.interceptors.response.use(response => {
  // 如果请求成功
  response.status === 200 ? Promise.resolve(response) : Promise.reject(response)
}, error => {
  // 出现错误
  if (error.response.status) {
    // 处理请求失败的情况
    // 对不同返回码对相应处理
    // 丢给应用层去处理
    return Promise.resolve(error.response)
    // return Promise.reject(error.response)
  }
})

export default instance
