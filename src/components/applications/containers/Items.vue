<template>
  <div class="main-items">
    <b-row>
      <div class="row align-items-center">
        >
        <toggle-button @change="toggleCol = $event.value"/>
        <div class="toggle-values"></div>
        <b-button
          variant="primary"
          :disabled="disabledCollector || collectorFull"
          @click="sendItemsToCollector"
        >Send to {{ toggleCol ? "After Effects" : "Collector" }}</b-button>
      </div>
    </b-row>
    <b-row class="render-Items">
      <div v-for="item in renderItems" v-bind:key="item.id">
        <!-- inline styleing for now if card is selected -->
        <!-- need to refector click handlers below into switch statement (make dry) -->
        <div
          v-bind:style="{ backgroundColor: item.selected ? `yellow` : `blue`}"
          class="test-card"
          @click.meta="selectCards(item)"
          @click.exact="singleSelect(item)"
          v-on:dblclick="doubleClickSelect(item)"
        >
          <h3>{{ item.title }}</h3>
          <img :src="item.image_url">
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
import Card from "../../Card.vue";
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";
import uuid from "uuid";

export default {
  data() {
    return {
      filteredItems: undefined,
      toggleCol: false,
      localSelected: [],
      disabledCollector: false
    };
  },
  props: ["type"],
  methods: {
    ...mapActions(["sendItemsToStore"]),
    singleSelect(item) {

      this.localSelected = this.filteredItems.forEach(
        localItem => (localItem.selected = false)
      );
      item.selected = !item.selected;
      this.localSelected = this.filteredItems.filter(
        localItem => localItem.selected
      );
      this.filterMaxItems();
    },
    doubleClickSelect(item) {
      this.singleSelect(item);
      this.sendItemsToCollector();
      this.filterMaxItems();
    },
    // cmd + multiSelect
    selectCards(item, $event) {
      item.selected = !item.selected;

      this.localSelected = this.filteredItems.filter(
        localItem => localItem.selected
      );
      this.filterMaxItems();
    },
    toggleCollector() {
      this.toggleCol = !this.toggleCol;
    },
    sendItemsToCollector() {
      if (this.collectorItems.length < 8) {
        // added uuid to distinguish items, in the future this will be replaced with preset id's
        this.localSelected.map(localItem => (localItem.id = uuid()));
        this.$store.dispatch("sendItemsToStore", this.localSelected);
        // after items are sent to collector, they lose there selected status
        this.filteredItems.forEach(item => (item.selected = false));
        // emptys localSelected when they are sent to the collector
        this.localSelected = [];
      }
    },
    // disabled send to collector, if there are more than eight items selected/in collector.
    filterMaxItems() {
      const selectedCollectedItems = [
        ...this.collectorItems,
        ...this.localSelected
      ];
      selectedCollectedItems.length > 8
        ? (this.disabledCollector = true)
        : (this.disabledCollector = false);
    }
  },
  computed: {
    ...mapGetters(["items", "collectorItems"]),
    // gets items from the store, filters them based on route params, then creates and renders a deep copy.
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
      this.filteredItems = filteredItems;
      return filteredItems;
    },
    // checks if collector is full
    collectorFull() {
      return this.collectorItems.length === 8;
    }
  },
  // mounting filterMaxItems method, to be called in 'CollectorItem' (component) when a component is deleated.
  mounted() {
    this.$root.$on("Items", () => {
      this.filterMaxItems();
    });
  },
};
</script>

<style scoped>
h3 {
  background-color: white;
}
img {
  width: 100%;
}
.main-items {
  padding-left: 2em;
}

.render-Items {
  padding-top: 0.8em;
}

.test-card {
  width: 170px;
  padding: 4px;
}

.toggle-values {
  color: white;
  padding: 0.2em;
  font-weight: bold;
}
</style>

