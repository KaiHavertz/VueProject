<template>
  <div id="app">
    <hr>
    <span>使用vuex count</span>
    <span>{{$store.state.count}}</span>
    <button @click="add">add</button>
    <button @click="del">del</button>
    <h1>我是App.vue</h1>
    <!-- 类似于超链接 -->
    <router-link to="/home">首页</router-link>
    <hr>
    <hr>
    <router-link :to="{
                 path:'/about/123',
                 query:{
                   param1:'hello',
                   param2:23
                 }
                 }">关于</router-link>
    <hr>

    <router-link to="/datePicker">时间选择器</router-link>
    <hr>
    <el-button @click="codeBtn"
               id="codeBtn"
               type="button">代码的形式跳转路由</el-button>
    <hr>
    <router-link :to="{
                 path:'/datePicker/child'
                 }">进入 子 路 由</router-link>
    <hr>
    <el-button @click="useAxiosPro"
               id="useAxiosPro"
               type="button">使用 axios 封装</el-button>
    <hr>
    <el-button @click="useAxios"
               id="useAxios"
               type="button">使用 axios</el-button>
    <hr>
    <!-- router-view是一个坑，用于显示当前路由的内容 -->
    <router-view></router-view>

  </div>
</template>

<script>
import axios from 'axios'
import department from "@/api/department";
import student from "@/wardemo/student";
export default {
  name: 'App',
  methods: {
    useAxiosPro () {
      student.queryAllStudent().then(res => {
        console.log('返回数据：', res);
      }).catch(err => {
        console.log(err)
      })
    },
    useAxios () {
      axios.get('http://101.37.32.181:8080/wardemo/student/queryAllStudent').then(data => {
        console.log('useAxios data', data);
      }).catch(err => {
        console.log('useAxios err', err);
      })
    },
    add () {
      this.$store.commit('increment') //执行 store mutations 中的方法
    },
    del () {
      this.$store.dispatch('decrement').then(data => {
        console.log(data)
      }).catch(err => {
        console.log(err)
      })
    },
    codeBtn () {
      //代码的形式跳转路由
      new Promise((resolve, reason) => {
        resolve('resolve')
        reason('reason')
        this.$router.push({
          path: '/CodeRouter/id是',
          params: {
            param1: "ssss"
          },
          query: {
            param1: 'a'
          }

        }).then((data) => {
          console.log('成功', data)
        }).catch((data) => {
          console.log('失败', data)
        })
      })
    }
  }
}
</script>
