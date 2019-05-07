<template>
  <div id="app">
    <Main></Main>
    <SideBar></SideBar>
  </div>
</template>

<script>
import Main from "./containers/Main.vue";


export default {
  data() {
    return {
    }
  },
  components: {
    Main

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  background-color: #232323;
}
</style>
