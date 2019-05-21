<template>
  <modal name="app-settings" :width="1150" :height="700" :adaptive="true" :scrollable="true">
    <div class="app-modal-main">
      <b-container>
        <b-row>
          <div class="modal-header">
            <Header title="Applications Hub"/>
          </div>
        </b-row>
        <!-- <b-row> -->

        <!-- </b-row> -->
      </b-container>
      <div class="main-modal-cards">
        <div class="container">
          <div class="row">
            <!-- inner modal  -->
            <AppInstallModal :app="appSelected"/>
            <!-- --- -->
            <div v-for="(app, key) in mainData.apps" :key="key" class="col-6">
              <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img :src="app.image_url" class="card-img" alt="...">
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h1 class="card-title"></h1>
                      <i :class="app.icon"></i>
                      <p class="card-text">{{ app.name }}</p>
                      <p class="card-text">
                        <button
                          @click="showInstallModal(app)"
                          v-if="app.installed"
                          type="button"
                          class="btn btn-danger"
                        >Uninstall</button>

                        <button
                          @click="showInstallModal(app)"
                          v-else
                          type="button"
                          class="btn btn-primary"
                        >Install</button>
                      </p>
                      <div>
                        <p class="card-text">
                          <small
                            class="text-muted"
                          >Last updated {{ Math.floor(Math.random() * 60) + 1 }} mins ago</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
 
<script scoped>
import { mapGetters, mapMutations } from "vuex";
import AppInstallModal from "./InstallingModal.vue";

import Header from "../Header";
export default {
  data() {
    return {
      appSelected: undefined
    };
  },
  methods: {
    ...mapMutations([""]),
    // has a bug wont work the first time
    showInstallModal(app) {
      this.$modal.show("app-install")
      this.appSelected = app;
      console.log(app);
      setTimeout(() => {
        this.$store.commit("appInstallation", app);
        this.$modal.hide("app-install");
      }, 3000);

      
    }
  },
  computed: {
    ...mapGetters(["mainData"])
  },
  components: {
    Header,
    AppInstallModal
  }
};
</script>

<style>
.app-modal-main {
  height: 100%;
  width: 100%;
  background-color: #494949;
}

.app-modal-header {
  color: white;
  margin: 2%;
}

.main-modal-cards {
  margin: 2%;
  height: 90%;
  overflow-y: scroll;
  background-color: #2f2f2f;
  padding: 2%;
  border-radius: 1%;
}

.modal-header {
  padding: 2%;
}
</style>
