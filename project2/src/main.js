import Vue from 'vue'
import App from './App.vue'
import create from './utils/util';

Vue.config.productionTip = false

//给vue注册实例方法， 方法名...
Vue.prototype.$create = create;

new Vue({
  render: h => h(App),
}).$mount('#app')
