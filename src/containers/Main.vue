<template>
  <div class="main"> 
    <SideBar></SideBar>
    <router-view></router-view>
  </div>
</template>

    <script>
import SideBar from "../containers/SideBar"

export default {
  components: {
    SideBar
  }
};
</script>

<style>
.main {

}
</style>