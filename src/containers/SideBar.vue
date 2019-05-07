<template>
<div class="side-bar">
  <SideBarButton></SideBarButton>
  <SideBarButton></SideBarButton>
  <SideBarButton></SideBarButton>
  <SideBarButton></SideBarButton>
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
  }

  .main-settings-button {
    padding-left: 5px;
    margin: 0 auto;
    position: fixed;
    bottom: 0;

  }
</style>
