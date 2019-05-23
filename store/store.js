import Vue from "vue";
import Vuex from "vuex";

import createPersistedState from 'vuex-persistedstate'

// modules
import mainIntegnity from "../store/modules/main-integnity.js" 
import transitionsApp from "../store/modules/transitions-app.js"

Vue.use(Vuex);
// This will need to be broken out into modules collector, sidebar etc
export default new Vuex.Store({
    modules: {
      mainIntegnity,
      transitionsApp
    },

    plugins: [

      // local storage
      createPersistedState({
        key:'integnity.store.mainIntegnity',
        paths: [
          'transitionsApp.collectorItems',
          'mainIntegnity.mainData'
        ]
      })
    ]
});
