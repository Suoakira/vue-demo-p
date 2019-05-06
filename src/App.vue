<template>
  <div id="app">
    <Main></Main>
    <side-bar></side-bar>
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  data() {
    return {
      appOne: [
        { id: "1", image_url: "", title: "", content: "" },
        { id: "2", image_url: "", title: "", content: "" },
        { id: "3", image_url: "", title: "", content: "" }
      ],
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
