<template>
  <div>
    <h3>Hello from {{ this.$route.params.item }}</h3>
    <b-row>
      <div v-for="item in renderItems" v-bind:key="item.id">
        <!-- inline styleing for now if card is selected -->
        <div v-bind:style="{ backgroundColor: item.selected ? `yellow` : `blue`}" class="test-card" @click.meta="selectCard(item)">
          <h3>{{ item.title }}</h3>
          <img :src="item.image_url">
        </div>
      </div>
      <button @click="renderItems">Test Log items</button>
    </b-row>
  </div>
</template>

<script>
import Card from "../../Card.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      filteredItems: undefined
    };
  },
  props: ["type"],
  methods: {
    ...mapMutations(["selectCard"]),
    selectCard(item) {
      console.log("hello i clicked you")
      console.log("item", item)
      this.$store.commit("selectCard", item)
    }
  },
  computed: {
    ...mapGetters(["items"]),
    renderItems() {
      let deepItemsCopy = JSON.parse(JSON.stringify(this.items)).items;

      let filteredItems = [];
      deepItemsCopy.forEach(item => {
        item.belongsTo.forEach(type => {
          if (type == this.$route.params.item) {
            filteredItems.push(item);
          }
        });
      });
      console.log(filteredItems);
      this.filteredItems = filteredItems;
      return filteredItems;
    },
  },
  created() {
    console.log("route", this.$route.params.item);
  }
};
</script>

<style scoped>
h3 {
  background-color: white;
}
img {
  width: 100%;
}

.test-card {
  width: 170px;
  padding: 4px;
}
</style>

