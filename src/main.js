import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueRouter from "vue-router"

// routes
import { routes } from "../routes/routes.js"

// styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.config.productionTip = false


const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
