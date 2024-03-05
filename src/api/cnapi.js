// 用于【请求-增删改查】页面的所有请求--采用cnap-ui的请求
import cnapUI from 'cnap-ui'
// console.log(cnapUI);
let cnapi = cnapUI.cnapi
// 测试【0.1.0插件】使用
// let baseURL = '/api/demoProvider';
// if (process.env.NODE_ENV === 'production') {
//     baseURL = '/gateway/demoProvider';//生产环境服务器地址
// }
// 测试【0.2.0插件】使用
let baseURL = '/api/demoProviderNew';
if (process.env.NODE_ENV === 'production') {
    baseURL = '/gateway/demoProviderNew';//生产环境服务器地址
}
// 给全部请求添加配置
cnapi.config = { baseURL: baseURL, timeout: 6000 }
// 更多配置修改参考如下
// cnapi.config = { baseURL: baseURL, timeout: 6000, headers: { 'Content-Type': 'application/cnap-message;charset=UTF-8' } }

export default cnapi