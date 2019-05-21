
<!-- you can pass icons as props from font awesome -->
<template>
  <div class="side-bar">
    <div v-for="(app, index) in mainData.apps" :key="index" v-show="app.installed">
      <!-- placeholder link, if app-one route to app-one/dashboard -->
      <router-link :to="app.identifier === `app-one` ? `/${app.identifier}/dashboard` : `/${app.identifier}`">
        <SideBarButton
          :icon="app.icon"
          v-bind:style="{ backgroundColor: $route.fullPath.includes(`/${app.identifier}`) ? `yellow` : `blue`}"
        ></SideBarButton>
      </router-link>
    </div>

    <div @click="() => showAppModal()">
      <SideBarButton
        icon="fas fa-plus fa-2x"
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/add-application') ? `yellow` : `blue`}"
      ></SideBarButton>
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
import AddAppModal from "../components/modals/AddAppModal.vue";
import { mapGetters } from "vuex";

export default {
  methods: {
    // shows modal for app-settings
    showAppModal() {
      this.$modal.show("app-settings");
    }
  },
  computed: {
    ...mapGetters(["mainData"])
  },
  components: {
    SideBarButton,
    MainSettingsButton
  },
  created() {
    console.log("hello from side bar", this.mainData.apps);
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
