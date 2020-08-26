import Vue from 'vue'
import App from './App.vue'
//引入 index.js
import router from './router/index.js' //经测试：router 定义为大写 开头的 Router 会报错
import store from './store' //可以如果是index.js 可以省略
Vue.config.productionTip = false


//引入 element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//注入 element ui插件
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router, //挂载路由
  store //挂载 vuex
}).$mount('#app')