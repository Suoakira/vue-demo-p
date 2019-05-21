<template>
  <div class="main-collector">
    <b-row>
      <div v-for="item in renderItems" :key="item.id">
        <CollectorItem
          :item="item"
          :showDelete="item.isPlaceholder ? true : false"
          :img_url="item.image_url"
          :title="item.title"
        ></CollectorItem>
      </div>

      <div class="settings-panel">
        <b-button class="btn btn-light">-)</b-button>
        <b-button @click="toggleCollector = !toggleCollector" class="btn btn-light">+</b-button>
      </div>
    </b-row>
  </div>
</template>

<script>
import CollectorItem from "../components/CollectorItem.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      toggleCollector: false,
      dummyItem: {
        id: "placeholder",
        isPlaceholder: true,
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Equilateral_Triangle_Lattice.svg/2000px-Equilateral_Triangle_Lattice.svg.png"
      },
      localItems: []
    };
  },
  components: {
    CollectorItem
  },
  computed: {
    ...mapGetters(["collectorItems"]),
    //renders items, adds placeholders depending on array length
    renderItems() {
      let deepItemsCopy = JSON.parse(JSON.stringify(this.collectorItems));
      this.localItems = deepItemsCopy;
      //need to refactor this ugly code
      if (deepItemsCopy.length === 0) {
        this.localItems.unshift(
          this.dummyItem,
          this.dummyItem,
          this.dummyItem,
          this.dummyItem
        );
      } else if (deepItemsCopy.length === 1) {
        this.localItems.unshift(this.dummyItem, this.dummyItem, this.dummyItem);
      } else if (deepItemsCopy.length === 2) {
        this.localItems.unshift(this.dummyItem, this.dummyItem);
      } else if (deepItemsCopy.length < 8) {
        this.localItems.unshift(this.dummyItem);
      }
      return this.localItems;
    }
  }
};
</script>

<style>
.main-collector {
  position: Absolute;
  background-color: blue;
  bottom: 0;
  height: 78;
  width: auto;
  right: 0;
  padding-left: 20px;
  padding-right: 30px;
  border-radius: 1em;
  margin: 0.3em;
}

.settings-panel {
  padding: 3px;
  padding-right: 30px;
  height: 50%;
  width: 10px;
}

.mini-collector {
  margin-left: 20px;
}
</style>

