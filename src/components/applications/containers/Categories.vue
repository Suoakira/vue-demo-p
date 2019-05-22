<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2">
        <div class="categories-lg">Categories</div>
      </b-col>
      <b-col cols="10">
        <div class="cat-description-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim aLorem ipsum dolor sit amet.labore et dolore magna aliqua.
          Ut enim aLorem ipsum dolor sit amet.
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div class="cat-description-lg lower-cards">
          <h5>{{ $router.currentRoute.fullPath }}</h5>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <div v-for="cat in applicationData.categories" :key="cat.name" class="card-container">
        <div
          v-show="$router.currentRoute.fullPath == '/app-one/categories' || $router.currentRoute.fullPath == '/app-one/dashboard'"
          
        >
          <router-link :to="`/app-one/categories/items/${cat.name}`">
            <Card :title="cat.name"/>
          </router-link>
        </div>

        <!-- </div> -->
      </div>
      <router-view></router-view>
    </b-row>
  </b-container>
</template>

<script>
import Card from "../../../components/Card.vue";
import Items from "../../../components/applications/containers/Items.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedType: undefined
    };
  },
  components: {
    Card,
    Items
  },
  computed: {
    ...mapGetters(["mainData", "applicationData"])
  }
};
</script>

<style>
.categories-lg {
  float: left;
  color: white;
  margin: 0.4em;
  font-weight: bold;
  color: white;
}

.cat-description-lg {
  font-size: 0.8em;
  margin-top: 0.4em;
  float: left;
  color: white;
  text-align: left;
}

.lower-cards {
  margin-top: 1.6em;
  font-size: 0.7em;
  font-weight: bold;
}

.card-back {
  padding: 2px;
}
</style>


