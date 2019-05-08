
<template>
<div>
    <Categories></Categories>
    <Categories></Categories>

    
</div>

</template>

<script>
import Categories from "../../applications/containers/Categories.vue"
import Collections from "../../applications/containers/Collections.vue"
export default {
    components: {
        Categories,
        Collections
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


