import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    redirect: "/home",
    component: Index,
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/asideChild/home/home.vue')
    },
    {
      path: 'commodity',
      name: 'Commodity',
      component: () => import('@/views/asideChild/commodityM/commodity.vue')
    },
    {
      path: 'order',
      name: 'Order',
      component: () => import('@/views/asideChild/orderM/order.vue')
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
