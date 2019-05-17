<template>
  <div class="bootstrap-card-lg">
    <h5>{{ title }}</h5>
    <!-- //placeholder bootstrap card -->
    <!-- <b-card
      text-variant="secondary"
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 8rem;"
      class="mb-2"
      bg-variant="dark"
    >
      <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
    </b-card>-->
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style >
.bootstrap-card-lg {
  font-size: 0.3em;
  background-color: blue;
  height: 200px;
  width: 140px;
  margin: 0.4em;
  color: white;
}

.card-title {
  font-size: 0.3em;
}
</style>

