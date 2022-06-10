import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

//使用懒加载插件
Vue.use(VueLazyLoad)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
