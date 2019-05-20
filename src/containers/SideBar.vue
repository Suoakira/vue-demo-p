
<!-- you can pass icons as props from font awesome -->
<template>
  <div class="side-bar">
    <router-link to="/app-one/dashboard">
      <SideBarButton
        icon="fab fa-airbnb fa-2x"
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-one') ? `yellow` : `blue`}"
      ></SideBarButton>
    </router-link>

    <router-link to="/app-two">
      <SideBarButton
        icon="fab fa-asymmetrik fa-2x"
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-two') ? `yellow` : `blue`}"
      ></SideBarButton>
    </router-link>

    <router-link to="/app-three">
      <SideBarButton
        icon="fab fa-adobe fa-2x"
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/app-three') ? `yellow` : `blue`}"
      ></SideBarButton>
    </router-link>
    <div @click="() => showAppModal()">
      <!-- <router-link to="/add-application"> -->
      <SideBarButton
        icon="fas fa-plus fa-2x"
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/add-application') ? `yellow` : `blue`}"
      ></SideBarButton>
      <!-- </router-link> -->
    </div>

    <router-link to="/main-settings" v-b-modal.modal-lg>
      <div class="main-settings-button">
        <MainSettingsButton></MainSettingsButton>
      </div>
    </router-link>
  </div>
</template>


<script>
import SideBarButton from "../components/Buttons/SidebarButton.vue";
import MainSettingsButton from "../components/Buttons/MainSettings.vue";
import AddAppModal from "../components/modals/AddAppModal.vue"

export default {
  methods: {
    // shows modal for app-settings
    showAppModal() {
      this.$modal.show(
        'app-settings'
      )
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
  width: 66px;
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
