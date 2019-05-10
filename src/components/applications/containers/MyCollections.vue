<template>
    <div class="my-collections-lg">Collections</div>
</template>

<script>
export default {

    data() {
        return {
            selectedCats: []
        }
    },

    created() {
        console.log(this.$bus)
        this.$bus.$on("selectedCats", cats => this.selectedCats = cats )
        console.log(this.selectedCats)
    }
}
</script>

<style>
    .my-collections-lg {
        color: white;
        margin: .5em;
        font-weight: bold;
        color: white;
    }
</style>


