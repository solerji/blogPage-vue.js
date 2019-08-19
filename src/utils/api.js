// import axios from 'axios'

// // 创建axios实例
// const baseapi = axios.create({
//     timeout: 30000 // 请求超时时间
//   })
//   // 环境的切换
//   if (process.env.NODE_ENV === 'development') {
//     // 注意这里
//     baseapi.defaults.baseURL = '/api'
//   } else if (process.env.NODE_ENV === 'production') {
//     baseapi.defaults.baseURL = ''
//   }
// // 添加request拦截器
// // baseapi.interceptors.request.use(config => {
// //     return config
// //   }, error => {
// //     Promise.reject(error)
// //   })
// // baseapi.interceptors.response.use(response => {
// // let res = {}
// // res.status = response.status
// // res.data = response.data
// // return res
// // }, error => {
// //  if (error.response && error.response.status === 500) {
// //     Message.error({message: '服务器在尝试处理请求时发生内部错误'})
// // } else {
// //     Message.error({message: '未知错误'})
// // }
// // return Promise.reject(error.response)
// // })

// // 普通get方法
// export function get (url, params = {}) {
// return baseapi({
//     url: url,
//     method: 'get',
//     // headers: {},
//     params
// })
// }
// // 普通post方法
// export function post (url, data = {}) {
// let sendObject = {
//     url: url,
//     method: 'post',
//     // headers: {},
//     data: data
// }
// sendObject.data = JSON.stringify(data)
// return baseapi(sendObject)
// }
// // 普通put方法
// export function put (url, data = {}) {
// return baseapi({
//     url: url,
//     method: 'put',
//     // headers: {},
//     data: JSON.stringify(data)
// })
// }
// // 普通delete方法
// export function deletes (url) {
// return baseapi({
//     url: url,
//     method: 'delete'
//     // headers:
// })
// }
// // 不要忘记export
// export default baseapi