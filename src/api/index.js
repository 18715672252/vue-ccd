// 用于将各页面请求收集起来，挂载到Vue原型上
import * as testCrud from './testCrud'
import * as aside from "./aside"

export default { ...testCrud, ...aside }
