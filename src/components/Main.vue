<template>
  <div class="main">
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>

    <script>
import SideBar from "./SideBar.vue";

export default {
  components: {
    SideBar
  }
};
</script>

<style>
.main {
  margin: 5%;
}
</style>