import Vue from 'vue'
//加载 VUE-router 插件
import VueRouter from 'vue-router'

//加载 home.vue 、about.vue
import Home from '../components/home'
import About from '../components/about'
import DatePicker from '../components/datePicker'
import CodeRouter from '../components/codeRouter'

//注入插件
Vue.use(VueRouter)

// 定义路由
const MyRoutes = [{ //注意 定义变量的名字只能是routes，或者下面 创建router 实例时 采用 路由名字：routes
    path: '/about/:id',
    component: About,
    meta: {
      title: 'about'
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: 'home'
    }
  },
  {
    path: '/datePicker',
    component: DatePicker,
    meta: {
      title: 'datePicker'
    },
    children: [{
      path: 'child',
      component: () => import('../components/child'),
      meta: {
        title: 'child'
      }
    }]
  },
  {
    path: '/codeRouter/:param',
    component: CodeRouter,
    meta: {
      title: 'CodeRouter'
    }
  }

]

//创建 router 实例
const router = new VueRouter({
  routes: MyRoutes,
  mode: 'history' //不要带#号的默认 hash模式
})

/**
vue-router提供了beforeEach和afterEach这两个钩子函数，它们会在路由即将改变前和改变后触发。
在创建路由实例之后，就可以使用路由守卫。beforeEach中有三个参数：
To：即将要进入的目标路由对象
From：即将要离开的路由对象
Next：调用该方法之后才会进入下一个路由。
 */
// 创建完路由实例之后，可以使用路由守卫
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})


//导出 router 实例
export default router