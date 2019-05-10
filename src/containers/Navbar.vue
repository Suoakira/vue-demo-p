<template>
    <div class="navbar-lg" v-on:click="selectedPath">
        <!-- three buttons below are just place holders for now -->
        <NavBarButtonOp buttonText="placehold">></NavBarButtonOp>
        <NavBarButtonOp></NavBarButtonOp>
        <NavBarButtonOp></NavBarButtonOp>
        <!-- router links to the components in src/components/applications/containers -->
            
            <router-link to="/app-one/dashboard">
                    <NavBarButton   v-bind:style="{ backgroundColor: selectedNav.dashboard ? `yellow` : `blue`}" buttonText="dashboard"></NavBarButton>
            </router-link>
            <router-link to="/app-one/collections">
                    <NavBarButton v-bind:style="{ backgroundColor: selectedNav.collections ? `yellow` : `blue`}" :buttonText="collections" ></NavBarButton>
            </router-link>
            <router-link to="/app-one/categories">
                    <NavBarButton v-bind:style="{ backgroundColor: selectedNav.categories ? `yellow` : `blue`}" :buttonText="categories"></NavBarButton>
            </router-link>
            <router-link to="/app-one/myCollections">
                    <NavBarButton v-bind:style="{ backgroundColor: selectedNav.myCollections ? `yellow` : `blue`}" :buttonText="myCollections" ></NavBarButton>
            </router-link>

    </div>
</template>

<script>
import NavBarButton from  "../components/Buttons/NavBarButton"
import NavBarButtonOp from "../components/Buttons/NavBarButtonOpaque"


export default {
    data() {
        return {
            dashboard: "Dashboard",
            collections: "Collections",
            categories: "Categories",
            myCollections: "My Collections",
            // selected navs
            selectedNav: {
                dashboard: false,
                collections: false,
                categories: false,
                myCollections: false
            }

        }
    },
    components: {
        NavBarButton,
        NavBarButtonOp
    },        
    methods: {
        // testing needs major refactor
    setPaths() {
        this.selectedNav.dashboard = false
        this.selectedNav.collections = false
        this.selectedNav.categories = false
        this.selectedNav.myCollections = false
    },
    selectedPath() {
        let path = this.$router.currentRoute.fullPath
        if (path === "/app-one/dashboard") {
            this.setPaths()
            this.selectedNav.dashboard = true
            } else if (path === "/app-one/collections") {
            this.setPaths()
            this.selectedNav.collections = true
            } else if (path === "/app-one/categories") {
            this.setPaths()
            this.selectedNav.categories = true
            } else if (path === "/app-one/myCollections") {
            this.setPaths()
            this.selectedNav.myCollections = true
            } 
        }
    }

}
</script>

<style>
.navbar-lg {
    margin-top: 10px;
}

</style>


