<template>
  <div id="app">
    <Main></Main>
    <side-bar></side-bar>
  </div>
</template>

<script>
import Main from "./containers/Main.vue";

export default {
  data() {
    return {
      appOne: [],
      appTwo: [],
      appThree: [],
      appFour: []
    };
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
  color: #2c3e50;
  border-radius: 1%;
  background-color: #252525;
}
</style>
