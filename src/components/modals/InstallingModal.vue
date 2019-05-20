<template>
  <div>
    <modal name="app-install" :width="480" :height="300" :adaptive="true" :scrollable="true">
      <Header title="Installing"></Header>
    </modal>
  </div>
</template>
 
<script scoped>
import { mapGetters } from "vuex";
import Header from "../Header";
export default {
  components: {
    Header
  }
};
</script>

<style>


</style>
