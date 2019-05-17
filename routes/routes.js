// side bar applications
import AppOne from "../src/components/applications/appOne.vue"
import AppTwo from "../src/components/applications/appTwo.vue"
import Appthree from "../src/components/applications/appThree.vue"
import AppFour from "../src/components/applications/appFour.vue"

// settings side bar
import Settings from "../src/containers/Settings.vue"

// main panel views aka dashboard, collections etc
import Categories from "./../src/components/applications/containers/Categories.vue"
import Items from "./../src/components/applications/containers/Items.vue"

import Collections from "./../src/components/applications/containers/Collections.vue"
import Dashboard from "./../src/components/applications/containers/Dashboard.vue"
import MyCollections from "./../src/components/applications/containers/MyCollections.vue"

export const routes =
    [
        { path: "/app-one", component: AppOne, name: "app1",
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
                children: [
                    {
                        path: "items/:item",
                        component: Items
                    }
                ]
            },
            {
                path: 'categories',
                component: Categories,
                children: [
                    {
                        path: "items/:item",
                        component: Items
                    }
                ]
            },
            {
                path: 'collections',
                component: Collections,
                children: [
                    {
                        path: "items/:item",
                        component: Items
                    }
                ]
            },
            {
                path: 'myCollections',
                component: MyCollections
            },
        ]},
        // other side bar applications
        { path: "/app-two", component: AppTwo, name: "app2" },
        { path: "/app-three", component: Appthree, name: "app3" },
        { path: "/app-four", component: AppFour, name: "app4" },

        // settings route
        { path: "/main-settings", component: Settings, name: "main-settings" },

        // if they enter any other page redirect to the home page
        { path: "*", redirect: "/app-one/dashboard" }
      ]



