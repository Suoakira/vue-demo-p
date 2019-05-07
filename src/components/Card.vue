<template>
  <div class="example z-depth-5">
    <b-card
      :title="title"
      :img-src="img_url"
      img-alt="img_url"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      bg-variant="dark"
      text-variant="white"
    >
      <b-card-text>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</b-card-text>

    </b-card>
  </div>
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
