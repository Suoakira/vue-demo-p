<template>
  <div>
    <div class="side-bar-lg">
      <SideBar></SideBar>
    </div>
    <router-view>
      <div
        v-show="$route.fullPath.includes('/app-one/categories') || $route.fullPath.includes('/app-one/collections') || $route.fullPath.includes('/app-one/myCollections')"
      >
        <Collector></Collector>
      </div>
    </router-view>
    <!-- modal to show application settings -->
    <!-- modal from https://github.com/euvl/vue-js-modal/blob/master/README.md -->
    <AddAppModal></AddAppModal>
    <!-- Modal for global settings -->
    <SettingsModal></SettingsModal>
  </div>
</template>

    <script>
import SideBar from "../containers/SideBar";
import Collector from "../containers/Collector.vue";
import AddAppModal from "../components/modals/AddAppModal.vue";
import SettingsModal from "../components/modals/GlobalSettingsModal.vue"
export default {
  components: {
    SideBar,
    Collector,
    AddAppModal,
    SettingsModal
  }
};
</script>

<style>
.side-bar-lg {
  float: left;
}
</style>