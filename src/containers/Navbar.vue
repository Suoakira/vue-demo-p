<template>
    <div class="navbar-lg">
        <!-- three buttons below are just place holders for now -->
        <NavBarButtonOp buttonText="placehold">></NavBarButtonOp>
        <NavBarButtonOp></NavBarButtonOp>
        <NavBarButtonOp></NavBarButtonOp>
        <!-- router links to the components in src/components/applications/containers -->
        <router-link to="/app-one/dashboard">
                <NavBarButton :buttonText="dashboard"></NavBarButton>
        </router-link>
        <router-link to="/app-one/collections">
                <NavBarButton :buttonText="collections"></NavBarButton>
        </router-link>
        <router-link to="/app-one/categories">
                <NavBarButton :buttonText="categories"></NavBarButton>
        </router-link>
        <router-link to="/app-one/myCollections">
                <NavBarButton :buttonText="myCollections"></NavBarButton>
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
            myCollections: "My Collections"
        }
    },
    components: {
        NavBarButton,
        NavBarButtonOp
    }
}
</script>

<style>
.navbar-lg {
    margin-top: 10px;
}

</style>


