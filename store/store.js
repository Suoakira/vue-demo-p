import Vue from "vue";
import Vuex from "vuex";

// data
import main from "../data/main.js"
import applicationData from "../data/app-one-transitions.js"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        mainData: main,
        applicationData: applicationData,
        selectedCategoryItems: []
    },
    getters: {
        mainData: state => state.mainData,
        applicationData: state => state.applicationData
    },
    mutations: {
        
    }
})
