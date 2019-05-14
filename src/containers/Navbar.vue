<template>
  <div class="navbar-lg">
    <!-- three buttons below are just place holders for now -->
    <span @click="goBack">
      <NavBarButtonOp buttonText="<">></NavBarButtonOp>
    </span>

    <NavBarButtonOp></NavBarButtonOp>
    <NavBarButtonOp></NavBarButtonOp>
    <!-- router links to the components in src/components/applications/containers -->

    <router-link to="/app-one/dashboard">
      <NavBarButton
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-one/dashboard') ? `yellow` : `blue`}"
        buttonText="Dashboard"
      ></NavBarButton>
    </router-link>
    <router-link to="/app-one/collections">
      <NavBarButton
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-one/collections') ? `yellow` : `blue`}"
        buttonText="Collections"
      ></NavBarButton>
    </router-link>
    <router-link to="/app-one/categories">
      <NavBarButton
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-one/categories') ? `yellow` : `blue`}"
        buttonText="Categories"
      ></NavBarButton>
    </router-link>
    <router-link to="/app-one/myCollections">
      <NavBarButton
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-one/myCollections') ? `yellow` : `blue`}"
        buttonText="MyCollections"
      ></NavBarButton>
    </router-link>
  </div>
</template>

<script>
import NavBarButton from "../components/Buttons/NavBarButton";
import NavBarButtonOp from "../components/Buttons/NavBarButtonOpaque";

export default {
  components: {
    NavBarButton,
    NavBarButtonOp
  },
  methods: {
    goBack() {
      this.$router.go(-1);
      console.log(this.$router);
    }
  }
};
</script>

<style>
.navbar-lg {
  margin-top: 10px;
}
</style>


