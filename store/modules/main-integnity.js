// contains all the different applications
import main from "../../data/main.js";

// main App
const state = {
  // applications
  mainData: main
};

const getters = {
  mainData: state => state.mainData
};

const actions = {
  appInstallation({ commit }, app) {
    commit("appInstallation", app);
  }
};

const mutations = {
  // install app on side bar
  appInstallation(state, app) {
    app.status.installed = !app.status.installed;
  },
  // dragable feature
  updateMainData(state, apps) {
    state.mainData.apps = apps;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
