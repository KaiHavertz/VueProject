import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//定义 store 
const store = new Vuex.Store({
  state: {
    count: 0 //state全局变量
  },
  mutations: { //类似于 组件的methods，可以对全局变量进行操作，类似于 java bean 的setter
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
})
//导出模块
export default store