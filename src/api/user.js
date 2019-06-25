// user.js
import axios from './http'
import qs from 'qs'
const api = {
  login (params) {
    return axios.post({
      params: params
    })
  },
  login1 (params) {
    return axios.post(qs.stringify(params))
  }
}

export default api
