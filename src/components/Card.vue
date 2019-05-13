<template>

  <div class="bootstrap-card-lg">
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
  props: ["title", "img_url"],
  created() {
    console.log("title", this.title) 
    console.log("image_url", this.img_url)
  }
  
}
</script>

<style >
  .bootstrap-card-lg {
    font-size: .3em;
    background-color: #272727;
    height: 170px;
    width: 120px;
    margin: .4em;
  }

  .card-title {
    font-size: .3em;
  }
</style>

