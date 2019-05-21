
<!-- you can pass icons as props from font awesome -->
<template>
  <div class="side-bar">
    <draggable v-model="mainApps"  @start="drag=true" @end="drag=false">
      <div v-for="(app, index) in mainData.apps" :key="index" v-show="app.status.installed">
        <!-- placeholder link, if app-one route to app-one/dashboard -->
        <router-link
          :to="app.identifier === `app-one` ? `/${app.identifier}/dashboard` : `/${app.identifier}`"
        >
          <SideBarButton
            :icon="app.icon"
            v-bind:style="{ backgroundColor: $route.fullPath.includes(`/${app.identifier}`) ? `yellow` : `blue`}"
          ></SideBarButton>
        </router-link>
      </div>
    </draggable>
    
    <!-- // add to vue router -->
    <div @click="() => showAppModal()">
      <SideBarButton
        icon="fas fa-plus fa-2x"
        v-bind:style="{ backgroundColor: $route.fullPath.includes('/add-application') ? `yellow` : `blue`}"
      ></SideBarButton>
    </div>


      <div @click="openSettingsModal" class="main-settings-button">
        <MainSettingsButton></MainSettingsButton>
      </div>

  </div>
</template>


<script>
import SideBarButton from "../components/Buttons/SidebarButton.vue";
import MainSettingsButton from "../components/Buttons/MainSettings.vue";
import AddAppModal from "../components/modals/AddAppModal.vue";
import { mapGetters } from "vuex";
// vue dragable from https://github.com/SortableJS/Vue.Draggable
import draggable from "vuedraggable";

export default {

  components: {
    SideBarButton,
    MainSettingsButton,
    draggable
  },
  methods: {
    // shows modal for app-settings
    showAppModal() {
      this.$modal.show("app-settings");
    },
    // shows global settings modal
    openSettingsModal() {
      this.$modal.show("global-settings");
    }
  },
  computed: {
    ...mapGetters(["mainData"]),
    // vue dragable implemenation
    mainApps: {
      get() {
        return this.$store.state.mainData.apps;
      },
      set(value) {
        this.$store.commit("updateMainData", value);
      }
    }
  },
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
