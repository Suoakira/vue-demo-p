<template>
  <sidebar-menu :menu="menu" width="105.5px" widthCollapsed="53.5px" theme="white"/>
</template>


<script>
// settings props https://yaminncco.github.io/vue-sidebar-menu/#/props

export default {
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Integnity",
          // component: componentName
          visibleOnCollapse: false
          // class:''
          // attributes: {}
        },
        {
          // item
          href: "/appone",
          title: "APP-1",
          icon: "fa fa-user"
          // disabled: true
          // class:''
          // attributes: {}
          /*
                        badge: {
                            text: 'new',
                            // class:''
                            // attributes: {}
                        }
                        */
        },
        {
          // item with child
          href: "/apptwo",
          title: "APP-2",
          icon: "fa fa-chart-area"
        },
        { href: "/appthree", title: "APP-3", icon: "fa fa-user" },
        { href: "/appfour", title: "APP-4", icon: "fa fa-user" }
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
