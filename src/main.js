import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Router from './shared/routers.js';


Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router:Router,
  render: h => h(App),
}).$mount('#app')
