import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './router'

Vue.config.productionTip = false
Vue.use(ViewUI)


new Vue({
  render: h => h(App),
  // 通过 router 参数指定路由, 这样整个 App 都可以使用路由功能
  router: router,
}).$mount('#app')

