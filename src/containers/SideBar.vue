<template>
<div class="side-bar">
    <router-link to="/app-one">
      <SideBarButton></SideBarButton>
    </router-link>

    <router-link to="/app-two">
      <SideBarButton></SideBarButton>
    </router-link>

    <router-link to="/app-three">
      <SideBarButton></SideBarButton>
    </router-link>
  
    <router-link to="/app-four">
      <SideBarButton></SideBarButton>
    </router-link>

  <div class="main-settings-button"> <MainSettingsButton></MainSettingsButton></div>

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
