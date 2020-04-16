import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'

//安装路由到vue
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    //页面守卫
    beforeEnter: (to, from, next) => {
      console.log(to, from);
      next();
    }
  },
  {
    path: '/about/:id',
    props: true,
    name: 'About',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'), //异步组件 懒加载
    children: [
      {
        path: 'test',
        component: Test
      }
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
