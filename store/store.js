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
  // refers to applications one
  state: {
    //split into modules later
    selectedItems: [],
    collectorItems: [],

    // main application data/ items
    mainData: main,
    applicationData: applicationData,
    items: items,

    // main app
    categoryCardsState: false,
  },
  getters: {

    // getters for main
    mainData: state => state.mainData,
    applicationData: state => state.applicationData,
    items: state => state.items,

    // getters for collector
    collectorItems: state => state.collectorItems,

    // settings
    showSettings: state => state.showSettings
  },
  mutations: {
    //belongs to items
    selectCard(state, item) {
      item.selected = !item.selected;
      state.selectedItems.push(item)
      state.selectedItems = state.selectedItems.filter(item => item.selected)
    },
    // belongs to collector
    sendItemsToStore(state, localSelectedItems) {
      const deepCopyLocalItems = JSON.parse(JSON.stringify(localSelectedItems))
      this.deepCopyStateCollector = deepCopyLocalItems.forEach(item => state.collectorItems.push(item))
      const deepCopyStateCollector = JSON.parse(JSON.stringify(state.collectorItems))
      state.collectorItems = _.uniqBy(deepCopyStateCollector, 'id')
    },
    deleteCollectorItem(state, localCollector) {
      state.collectorItems = localCollector
    }
  }
});
