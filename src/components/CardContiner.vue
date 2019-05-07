<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm" v-for="card in dummyCardData">
          <Card></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  data() {
    return {
      dummyCardData: [
        { id: "1", image_url: "", title: "", content: "" },
        { id: "2", image_url: "", title: "", content: "" },
        { id: "3", image_url: "", title: "", content: "" }
      ]
    };
  },
  components: {
    Card
  }
};
</script>
<style>
</style>
