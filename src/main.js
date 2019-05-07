import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueRouter from "vue-router"
import AppOne from "./components/applications/appOne.vue"




import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.config.productionTip = false


const router = new VueRouter({
  routes:
    [
      { path: "/app1", component: AppOne, name: "app1" },
      { path: "/app2", component: AppOne, name: "app2" },
      { path: "/app2", component: AppOne, name: "app3" },
      { path: "/app2", component: AppOne, name: "app4" },
      // if they enter any other page redirect to the home page
      { path: "*", redirect: { name: "app1" } }
    ]
})

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
