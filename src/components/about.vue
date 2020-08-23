<template>
  <div>
    <div>我是第二个组件，about.vue</div>

  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      data: {
        msg: 'ss'
      }
    }
  },
  created () {
    /*
      $router是VueRouter实例，想要导航到不同的URL，使用$router.push方法。
      $route是当前router的跳转对象，可以获取name、path等等
    */
    ///获取路由传参
    console.log(this.$route)
  }
}
</script>
