import Vue from "vue";
import Vuex from "vuex";

// data
import main from "../data/main.js"
import applicationData from "../data/app-one-transitions.js"
import items from "../data/items"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //split into modules later
        mainData: main,
        applicationData: applicationData,
        items: items,
        selectedCategoryItems: [],

        //main app
        categoryCardsState: false
    },
    getters: {
        mainData: state => state.mainData,
        applicationData: state => state.applicationData,
        items: state => state.items
    },
    mutations: {
        
    }
})
