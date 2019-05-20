<template>
  <div>
    <div class="side-bar-lg">
      <SideBar></SideBar>
    </div>
    <router-view>
      <div v-show="$route.fullPath.includes('/app-one/categories') || $route.fullPath.includes('/app-one/collections') || $route.fullPath.includes('/app-one/myCollections')">
            <Collector></Collector>
      </div>

    </router-view>
    <!-- modal to show application settings -->
    <!-- modal from https://github.com/euvl/vue-js-modal/blob/master/README.md -->
    <AddAppModal></AddAppModal>
    <AppInstall></AppInstall>
  </div>
</template>

    <script>
import SideBar from "../containers/SideBar";
import Collector from "../containers/Collector.vue";
import AddAppModal from "../components/modals/AddAppModal.vue";
import AppInstall from "../components/modals/InstallingModal.vue"

export default {
  components: {
    SideBar,
    Collector,
    AddAppModal,
    AppInstall
  }
};
</script>

<style>
.side-bar-lg {
  float: left;
}
</style>