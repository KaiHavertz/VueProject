import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//定义 store 
const store = new Vuex.Store({
  state: {
    count: 0 //state全局变量
  },
  getters: { //获取变量用 getter,修改用  mutations 异步操作用 action
    getCount(state) {
      return state.count
    }
  },
  mutations: { //类似于 组件的methods，可以对全局变量进行操作，类似于 java bean 的setter
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    decrement(context) {
      return new Promise(resolve => {
        context.commit('decrement') //调用 mutations 方法
        resolve('数据减少完毕')
      })
    }

  }
})
//导出模块
export default store