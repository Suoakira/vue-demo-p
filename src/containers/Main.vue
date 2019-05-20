<template>
  <div>
    <div class="side-bar-lg">
      <SideBar></SideBar>
    </div>
    <router-view>
      <Collector></Collector>
    </router-view>
    <!-- modal to show application settings -->
    <!-- modal from https://github.com/euvl/vue-js-modal/blob/master/README.md -->
    <AddAppModal></AddAppModal>
  </div>
</template>

    <script>
import SideBar from "../containers/SideBar";
import Collector from "../containers/Collector.vue";
import AddAppModal from "../components/modals/AddAppModal.vue";

export default {
  components: {
    SideBar,
    Collector,
    AddAppModal
  }
};
</script>

<style>
.side-bar-lg {
  float: left;
}
</style>