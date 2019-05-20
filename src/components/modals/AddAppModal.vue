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
            <div v-for="(app, key) in mainData.apps" :key="key" class="col-6">
              <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                  <div class="col-md-6">
                    <img :src="app.image_url" class="card-img" alt="...">
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h1 class="card-title"></h1>
                      <p class="card-text">{{ app.name }}</p>
                      <p class="card-text">
                        <button type="button" class="btn btn-danger">Uninstall</button>
                      </p>
                      <div>
                        <p class="card-text">
                          <small class="text-muted">Last updated 3 mins ago</small>
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

<script>
import { mapGetters } from "vuex";
import Header from "../Header";
export default {
  data() {
    return {};
  },
  props: ["text"],
  computed: {
    ...mapGetters(["mainData"])
  },
  components: {
    Header
  },
  created() {
    console.log(this.mainData);
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
  overflow: hidden;
  overflow-y: scroll;
}

.modal-header {
  padding: 2%;
}
</style>
