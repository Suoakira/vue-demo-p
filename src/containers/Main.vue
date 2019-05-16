<template>
  <div>
    <div class="side-bar-lg">
      <SideBar></SideBar>
    </div>
    <router-view>
          <Collector></Collector>
    </router-view>

  </div>
</template>

    <script>
import SideBar from "../containers/SideBar";
import Collector from "../containers/Collector.vue";

export default {
  components: {
    SideBar,
    Collector
  }
};
</script>

<style>
.side-bar-lg {
  float: left;
}
</style>