import Vue from "vue";
import Vuex from "vuex";
// should put this as a property on the vue intance to be used everywhere $.ie
import _ from "lodash"
// data
import main from "../data/main.js";
import applicationData from "../data/app-one-transitions.js";
import items from "../data/items";


Vue.use(Vuex);
// This will need to be broken out into modules collector, sidebar etc
export default new Vuex.Store({

  state: {
    //split into modules later
    selectedItems: [],
    collectorItems: [],

    // main application data/items
    mainData: main,
    applicationData: applicationData,
    items: items,

    // 
    
  },
  getters: {

    // main - applications installed
    mainData: state => state.mainData,
    // application data - for transitions -x (app-one)
    applicationData: state => state.applicationData,
    // items
    items: state => state.items,

    // collector
    collectorItems: state => state.collectorItems,

    // settings
    showSettings: state => state.showSettings
  },
  actions: {
    // install/uninstall application from side bar
    sendItemsToStore ({ commit }, items ) {
      commit('sendItemsToStore', items )
    }
  },
  mutations: {
    // install/uninstall application from side bar
    appInstallation(state, app) {
      app.status.installed = !app.status.installed
    },

    // Dragable side bar main data mutation
    updateMainData(state, apps) {
      state.mainData.apps = apps
    },

    //belongs to items
    selectCard(state, item) {
      item.selected = !item.selected;
      state.selectedItems.push(item)
      state.selectedItems = state.selectedItems.filter(item => item.selected)
    },
    // belongs to collector
    sendItemsToStore(state, items) {
      const deepCopyLocalItems = JSON.parse(JSON.stringify(items))
      this.deepCopyStateCollector = deepCopyLocalItems.forEach(item => state.collectorItems.push(item))
      const deepCopyStateCollector = JSON.parse(JSON.stringify(state.collectorItems))
      // later this will filter based on presets
      state.collectorItems = _.uniqBy(deepCopyStateCollector, 'id')
    },
    deleteCollectorItem(state, localCollector) {
      state.collectorItems = localCollector
    }
  }
});
