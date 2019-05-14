import Vue from "vue";
import Vuex from "vuex";

// data
import main from "../data/main.js";
import applicationData from "../data/app-one-transitions.js";
import items from "../data/items";

Vue.use(Vuex);

export default new Vuex.Store({
  // refers to applications one
  state: {
    //split into modules later

    selectedItems: [],

    mainData: main,
    applicationData: applicationData,
    items: items,

    //main app
    categoryCardsState: false
  },
  getters: {
    mainData: state => state.mainData,
    applicationData: state => state.applicationData,
    items: state => state.items
    // method to get selected item
  },
  mutations: {
    selectCard(state, item) {
      item.selected = !item.selected;
      state.selectedItems.push(item)
      console.log("selectedItems", state.selectedItems)
      state.selectedItems = state.selectedItems.filter(item => item.selected)
      console.log(state.selectedItems)
        // let deepCopyItems = JSON.parse(JSON.stringify(state.items.items))

    }
  }
});
