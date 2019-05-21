<template>
  <modal name="global-settings" :width="720" :height="480" :adaptive="true" :scrollable="true">
    <div class="main-global-settings">
      <b-container>
        <b-row>
          <b-col md="1" offset-md="1">
            <Header title="Global Settings"/>
          </b-col>

          <b-col md="1" offset-md="11">
            <b-button @click="$modal.hide('global-settings')" variant="danger">X</b-button>
          </b-col>
        </b-row>
      </b-container>
     
        <div class="settings-pad">
          <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab title="Settings" active>
                <b-card-text>Tab Contents 1</b-card-text>
              </b-tab>
              <b-tab title="Your Apps">
                <b-card-text>Tab Contents 2</b-card-text>
              </b-tab>
              <b-tab title="Your Account">
                <b-card-text>Tab Contents 3</b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>

      </div>
    </div>
  </modal>
</template>

<script>
import Header from "../Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
.main-global-settings {
  height: 100%;
  width: 100%;
  background-color: #494949;
}

.settings-pad {
    margin:2%;
}


</style>


