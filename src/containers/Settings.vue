<template>
  <div>
    <sweet-modal ref="nestedChild">This is the child modal.</sweet-modal>
    <button @click="openModal">OPEN MODALLLL</button>
  </div>
</template>

<script>
import { SweetModal, SweetModalTab } from "sweet-modal-vue";
export default {
  data() {
    return {};
  },
  method: {
    openModal() {
      this.$refs.modal.open()
    }
  },
  components: {
    SweetModal,
    SweetModalTab
  },
  computed: {}
};
</script>

<style>
</style>

