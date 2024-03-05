// 初始化项目默认依赖包
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入安装好的第三方依赖包
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueI18n from 'vue-i18n'

// 引入框架的依赖包(组件、组件样式、主题样式)
import cnapUI from 'cnap-ui'
import 'cnap-ui/lib/cnap-ui.css'

// 引入应用组件自定义样式
import '@/assets/css/viewsCss/views-index.less'

// 引入封装好的请求
import api from '@/api'

Vue.config.productionTip = false

Vue.use(cnapUI)
Vue.use(VueI18n)
// 内部把引入我们框架依赖包的语言包,包含element语言包
const messages = {
  en: require('@/common/lang/en'),
  zh: require('@/common/lang/zh')
}
// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'zh', // 设置地区
  messages, // 设置地区信息
})

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.$api = api

// 全局配置消息提醒时间
Vue.prototype.$message = function (msg) {
  ElementUI.Message({ ...msg, duration: 2000 })
}


new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
