<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from "./containers/Main.vue";

export default {
  data() {
    return {};
  },
  components: {
    Main
  },
  created() {
    console.log(this.$router.currentRoute);
  }
};
</script>

<style>
 /* height edited in style temp */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 1200px;
  background-color: #232323;
}

::-webkit-scrollbar {
display: none;
}
</style>
