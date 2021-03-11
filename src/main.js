import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'  //关键代码

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
