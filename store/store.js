import Vue from "vue";
import Vuex from "vuex";

// data
import main from "../data/main.js"
import applicationData from "../data/app-one-transitions"

Vue.use(Vuex)

export default new Vuex.store({
    state: {
        mainData: main,
        applicationData: applicationData
    },
})
