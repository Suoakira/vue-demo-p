<template>
  <div class="side-button-large">
    <i :class="icon" id="font-awesome-icon"></i>
  </div>
</template>


<script>
export default {
  props: ["icon"]
};
</script>

<style scoped>

.side-button-large {
  display: table;
  margin: 0 auto;
  background-color: #2f2f2f;
  width: 56px;
  height: 56px;
  border-radius: 7px;
  margin-bottom: 5px;
  
}

.side-button-large:hover {
  background-color: #494949;
}

#font-awesome-icon {
  position: relative;
  top: 50%;
  transform: translateY(35%);
}

</style>

