// 框架组件
let cnapUI = require('cnap-ui/lib/cnap-ui.common');
let cnapZh = cnapUI.default.cnapLang.zh;
// console.log(cnapZh);
// 万不得已修改插件内部语言包
// cnapZh.cnapHeader.title = "标题";

// 侧边菜单
let aside = require('../viewsLang/aside/zh');
// 应用组件
let home = require('../viewsLang/home/zh');
let commodity = require('../viewsLang/commodity/zh');
let order = require('../viewsLang/order/zh');
module.exports = {
  index: {
    title: '云原生应用平台11'
  },
  // 框架内部
  ...cnapZh,
  // 侧边导航栏
  aside: aside,
  // 首页
  home: home,
  // 通用请求-增删改查页面
  commodity: commodity,
  // 缓存请求-增删改查页面
  order: order
};
