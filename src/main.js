import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ViewUI)


import sign from './components/sign_in'

const routes = [
  {
    path: '/',
    // redirect 用来做重定向, 也就是访问 / 的时候会重定向到 /home
    // 并且访问 /home 会跳转到 home 组件
    // 所以现在访问根路由 / 就会跳转到 home 组件
    redirect: '/sign',
  },
  {
    path: '/sign',
    component: sign,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

new Vue({
  render: h => h(App),
  // 通过 router 参数指定路由, 这样整个 App 都可以使用路由功能
  router: router,
}).$mount('#app')

