<template>

  <div class="bootstrap-card-lg">
    <h5>{{ title }}</h5>
    <!-- //placeholder bootstrap card -->
    <!-- <b-card
      text-variant="secondary"
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
>
</template>

<script>
export default {
  props: ["title"]
}
</script>

<style >
  .bootstrap-card-lg {
    font-size: .3em;
    background-color:blue;
    height: 170px;
    width: 120px;
    margin: .4em;
    color: white;
  }

  .card-title {
    font-size: .3em;
  }
</style>

