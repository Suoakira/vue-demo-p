
<template>
<div>
    <Categories></Categories>
    <Collections></Collections>

    
</div>

</template>

<script>
import Categories from "../../applications/containers/Categories.vue"
import Collections from "../../applications/containers/Collections.vue"
export default {
    components: {
        Categories,
        Collections
    },
    created() {
        console.log(this.$router.currentRoute)
    }
    
}
</script>

<style>
    .dashboard-lg {
        color: white;
        margin: .5em;
        font-weight: bold;
        color: white;
    }
</style>


