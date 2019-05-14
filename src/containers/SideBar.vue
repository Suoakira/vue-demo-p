<template>
<div class="side-bar">
    <router-link to="/app-one/dashboard">
      <SideBarButton v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-one') ? `yellow` : `blue`}"></SideBarButton>
    </router-link>

    <router-link to="/app-two">
      <SideBarButton v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-two') ? `yellow` : `blue`}"></SideBarButton>
    </router-link>

    <router-link to="/app-three">
      <SideBarButton v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-three') ? `yellow` : `blue`}"></SideBarButton>
    </router-link>
  
    <router-link to="/app-four">
      <SideBarButton v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-four') ? `yellow` : `blue`}"></SideBarButton>
    </router-link>

  <div class="main-settings-button"> 
    <MainSettingsButton></MainSettingsButton>
  </div>

</div>
</template>


<script>
import SideBarButton from "../components/Buttons/SidebarButton.vue"
import MainSettingsButton from "../components/Buttons/MainSettings.vue"

export default {
  data() {
    return {
    }
  },
  components: {
    SideBarButton,
    MainSettingsButton
  },
  created() {
  }
};
</script>

<style scoped>
  .side-bar {
    height: 720px;
    width: 50px;
    background-color: #272727;
    float: left;
  }

  .main-settings-button {
    padding-left: 5px;
    margin: 0 auto;
    position: absolute;
    bottom: 0;

  }
</style>
