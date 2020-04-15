import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

//全局路由生命周期   全局守卫
router.beforeEach((to, from, next) => {
  console.log(to, from)
  // if(to.fullPath === '/personal') {
  //   next('/login')
  // }
  next();
});

router.beforeResolve((to, from, next) => {
  console.log(to, from)
  next();
});

router.afterEach((to, from) => {
  console.log(to, from);

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
