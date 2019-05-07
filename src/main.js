import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueRouter from "vue-router"
import CardContainer from "./components/CardContiner.vue"


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
      { path: "/app1", component: CardContainer, name: "app1" },
      { path: "/app2", component: CardContainer, name: "app2" },
      { path: "/app2", component: CardContainer, name: "app3" },
      { path: "/app2", component: CardContainer, name: "app4" },
      // if they enter any other page redirect to the home page
      { path: "*", redirect: { name: "app1" } }
    ]
})

new Vue({
  router,
  data: { color: '#673AB7' },
  render: h => h(App),

}).$mount('#app')
