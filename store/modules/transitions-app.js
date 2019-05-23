import applicationData from "../../data/app-one-transitions.js";
import items from "../../data/items.js";

import _ from "lodash";

// transitions-app state
const state = {
  // json describes the app
  applicationData: applicationData,
  // json of all the items in the app
  items: items,
  collectorItems: []

  // placeholder: lets the installation modal, know which app its installing/uninstalling
};

const getters = {
  // application data - for transitions -x (app-one)
  applicationData: state => state.applicationData,
  // all items
  items: state => state.items,
  // collector items
  collectorItems: state => state.collectorItems
};

const actions = {
  // install/uninstall application from side bar
  sendItemsToStore({ commit }, items) {
    commit("sendItemsToStore", items);
  }
};

const mutations = {
  sendItemsToStore(state, items) {
    const deepCopyLocalItems = JSON.parse(JSON.stringify(items));
    this.deepCopyStateCollector = deepCopyLocalItems.forEach(item =>
      state.collectorItems.push(item)
    );
    const deepCopyStateCollector = JSON.parse(
      JSON.stringify(state.collectorItems)
    );
    // later this will filter based on item presets
    state.collectorItems = _.uniqBy(deepCopyStateCollector, "id");
  },
  deleteCollectorItem(state, localCollector) {
    state.collectorItems = localCollector;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
