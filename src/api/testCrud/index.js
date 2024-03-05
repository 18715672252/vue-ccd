// 用于【请求-增删改查】页面的所有请求--采用cnap-ui的请求
import cnapi from '../cnapi'

// 1.3.1报文的添加
export const create = (data) => {
  return cnapi.post('/create', data)
}
// 1.3.0报文的添加
export const addOrders = (data) => {
  return cnapi.post('/addOrders', data)
}
export const deleteOne = (data) => {
  return cnapi.post('/delete', data)
}
export const modifyOne = (data) => {
  return cnapi.post('/modify', data)
}
// 给某个请求添加配置
export const queryByPage = (data) => {
  return cnapi.post('/queryByPage', data, { timeout: 5000 })
}