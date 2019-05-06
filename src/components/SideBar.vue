<template>
  <sidebar-menu :menu="menu" width="105.5px" widthCollapsed="53.5px"/>
</template>


<script>
// settings props https://yaminncco.github.io/vue-sidebar-menu/#/props
import CardContainer from "./CardContiner.vue";

export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Integnity",
          visibleOnCollapse: false
          // class:''
          // attributes: {}
        },
        {
          // item
          href: "/appone",
          title: "APP1",
          icon: "fa fa-user",
          // disabled: true
          // class:''
          // attributes: {}

          badge: {
            text: "APP1"
            // class:''
            // attributes: {}
          }
        },
        {
          // item with child
          href: "/apptwo",
          title: "APP2",
          icon: "fa fa-chart-area",
          badge: {
            text: "APP2"
            // class:''
            // attributes: {}
          }
        },
        {
          href: "/appthree",
          title: "APP3",
          icon: "fa fa-user",
          badge: {
            text: "APP3"
            // class:''
            // attributes: {}
          }
        },
        {
          href: "/appfour",
          title: "APP4",
          icon: "fa fa-user",
          badge: {
            text: "APP4"
            // class:''
            // attributes: {}
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
.side {
  height: 700px;
  width: 75px;
  border-radius: 2%;
  margin: 1em;

  background-color: #494444;
  color: white;
}
</style>
