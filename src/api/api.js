import {get,post} from './https'
import qs from 'qs'

// 用户登录
export const login = (params) => post('/v1/login',params);

export const getData = (params) => post('/v1/data',params);

// const api = {
//   login (params) {
//     return axios.post({
//       params: params
//     })
//   },
//   login1 (params) {
//     return axios.post(qs.stringify(params))
//   }
// }

// export default api
