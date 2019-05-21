<template>
  <div class="collected-item">
    <button v-show="!showDelete" @click="deleteItem" class="delete-item">x</button>
    <img :src="img_url">
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["img_url", "title", "showDelete", "item"],
  methods: {
    deleteItem() {
      const deepCopyCollectorItems = JSON.parse(
        JSON.stringify(this.collectorItems)
      );
      // deleats items based on id, which is passed as a prop
      const filterDeleatedItems = deepCopyCollectorItems.filter(
        item => item.id !== this.item.id
      );

      this.$store.commit("deleteCollectorItem", filterDeleatedItems);
      this.filterMaxItems()
    },
    // when item is deleated, calls a method from Items, that checks if 'send to collector button' should be disabled.
    filterMaxItems() {
     this.$root.$emit('Items') //like this
    },
  },
  computed: {
    ...mapGetters(["collectorItems"])
  }
};
</script>

<style>
.collected-item {
  border-style: dashed;

  position: relative;
  height: 76px;
  width: 76px;
  background-color: white;
  border-radius: 1em;
  margin: 0.2em;
}

.delete-item {
  position: absolute;
  left: 65%;
  border-radius: 4px;
}

img {
  width: 100%;
  height: 100%;
}
</style>


