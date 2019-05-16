<template>
  <div class="main-items">
    <b-row>
      <div class="row align-items-center">
        <div class="toggle-values">Collector</div>

        <toggle-button @change="toggleCol = $event.value"/>
         <div class="toggle-values">After Effects</div>
        <div class="toggle-values"></div>
        <b-button
          variant="light"
          :disabled="toggleCol || disabledCollector"
          @click="sendItemsToCollector"
        >Send to Collector</b-button>
      </div>
     
    </b-row>
    <b-row class="render-Items">
      <div v-for="item in renderItems" v-bind:key="item.id">
        <!-- inline styleing for now if card is selected -->
        <!-- need to refector click handlers below into switch statement (make dry) -->
        <div
          v-bind:style="{ backgroundColor: item.selected ? `yellow` : `blue`}"
          class="test-card"
          @click.meta="selectCard(item)"
          @click.exact="selectCard(item)"
        >
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
import _ from "lodash";

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
    ...mapMutations(["selectCard"]),
    //sends the selected item to the store
    selectCard(item) {
   
      item.selected = !item.selected;
         
      this.localSelected = this.filteredItems.filter(
        localItem => localItem.selected
      );
      this.filterMaxItems()
    },
    toggleCollector() {
      this.toggleCol = !this.toggleCol;
    },
    // show toggle if a user has selected an item
    areItemsSelected() {
      this.showToggle = !!this.filteredItems.find(item => item.selected);
    },
    sendItemsToCollector() {
      if (this.collectorItems.length <= 8) {
        this.$store.commit("sendItemsToStore", this.localSelected);
        // after items are sent to collector, they lose there selected status
        this.filteredItems.forEach(item => item.selected = false)
      } else {
        // placeholder
        alert("PLACEHOLDER: YourCollector is full");
      }
    },
    // disabled send to collector, if there are more than eight items selected/in collector combinded (bit buggy at the moment)
    filterMaxItems() {
      const selectedCollectedItems = [...this.collectorItems, ...this.localSelected]
      const uniqueselectedCollectedItems = _.uniqBy(selectedCollectedItems, 'id')
      if (uniqueselectedCollectedItems.length >= 9) {
        this.disabledCollector = true
      } else {
        this.disabledCollector = false
      }
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
    }
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

