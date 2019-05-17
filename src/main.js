import Vue from 'vue'
import App from './App.vue'

//vue packages from various libs
import BootstrapVue from 'bootstrap-vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import VueRouter from "vue-router"
import ToggleButton from 'vue-js-toggle-button'


// lodash sorting




// routes
import { routes } from "../routes/routes.js"

// store
import store from "../store/store.js"

// styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Object.defineProperty(Vue.prototype, '$_', { value: _ });

Vue.use(VueRouter)
Vue.use(VueSidebarMenu)
Vue.use(BootstrapVue)
Vue.use(ToggleButton)

Vue.config.productionTip = false

const router = new VueRouter({
  routes
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
