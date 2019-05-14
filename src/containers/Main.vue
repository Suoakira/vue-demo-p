<template>
<div>
    <div class="side-bar-lg"> 
      <SideBar></SideBar>
    </div>
      <router-view></router-view>
</div>


 
</template>

    <script>
import SideBar from "../containers/SideBar"
import Collector from "../containers/Collector"

export default {
  components: {
    SideBar
  }
};
</script>

<style>
  .side-bar-lg {
    float: left;
  }
</style>