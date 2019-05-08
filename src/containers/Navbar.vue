<template>
    <div class="navbar-lg">
        <NavBarButtonOp buttonText="placehold">></NavBarButtonOp>
        <NavBarButtonOp></NavBarButtonOp>
        <NavBarButtonOp></NavBarButtonOp>
        <NavBarButton :buttonText="dashboard"></NavBarButton>
        <NavBarButton :buttonText="collections"></NavBarButton>
        <NavBarButton :buttonText="Categories"></NavBarButton>
        <NavBarButton :buttonText="myCollections"></NavBarButton>
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
            Categories: "Categories",
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


