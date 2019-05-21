<template>
  <div>
    <modal name="app-install" :width="480" :height="300" :adaptive="true" :scrollable="true">
      <div>
              <b-container class="bv-example-row bv-example-row-flex-cols" id="uninstall-top-modal">
        <b-row align-v="center">
          <b-col>
            <div class="d-flex justify-content-center">
              <i :class="app.icon">{{app.name}}</i>
            </div>
          </b-col>
        </b-row>
        <b-row align-v="center">
          <b-col>
            <div class="d-flex justify-content-center" id="uninstall-modal">
              <div class="spinner-grow" style="width: 6rem; height: 6rem;" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="d-flex justify-content-center" id="uninstall-modal">
              <h5>{{ app.installed ? "Uninstalling..." : "Installing..." }}</h5>
            </div>
          </b-col>
        </b-row>
      </b-container>
      </div>
    </modal>
  </div>
</template>
 
<script scoped>
import { mapGetters } from "vuex";
import Header from "../Header";
export default {
  data() {
    return {
      success: false
    }
  },
  props: ["app"],
  components: {
    Header
  }
};
</script>

<style>
#uninstall-top-modal {
  padding-top: 10%;
}

#uninstall-modal {
  padding: 2%;
}
</style>
