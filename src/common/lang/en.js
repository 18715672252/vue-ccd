
// 框架组件
let cnapUI = require('cnap-ui/lib/cnap-ui.common')
let cnapEn = cnapUI.default.cnapLang.en

// 侧边栏菜单
let aside = require('../viewsLang/aside/en')
// 应用组件
let home = require('../viewsLang/home/en')
let commodity = require('../viewsLang/commodity/en')
let order = require('../viewsLang/order/en')
module.exports = {
  index:{
    title:'CNAP'
  },
  // 框架内部
  ...cnapEn,
  // 头部
  // 侧边导航栏
  aside: aside,
  // 首页
  home: home,
  // 通用请求-增删改查页面
  commodity: commodity,
  // 缓存请求-增删改查页面
  order: order,
}