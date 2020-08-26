import axios from 'axios'
// 创建axios
const service = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
})
// 设置axios请求拦截器
// 拦截器中，可以对请求进行一些统一化的操作
service.interceptors.request.use(
  config => {
    // 统一设置请求头
    config.headers['token'] = '12345'
    console.log('config:', config)
    return config
  },
  err => {
    return Promise.reject('请求异常！', err)
  }
)
// 设置响应拦截器
service.interceptors.response.use(
  response => {
    let res = response.data
    const code = res.code
    if (code === 200) {
      return res
    } else {
      alert('请求失败！')
      return Promise.reject('请求异常！')
    }
  },
  err => {
    alert('请求失败！')
    return Promise.reject('请求异常！')
  }
)
// 把service导出
export default service