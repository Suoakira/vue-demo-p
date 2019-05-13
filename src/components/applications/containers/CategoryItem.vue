<template>

    <div>
        <h3>Hello from {{ cat.name }} </h3>
        <b-row>
            <div v-for="item in cat.items">
                <div class="test-card">
            <h3>{{ item.title }}</h3>
            <img :src="item.image_url" />
                </div>
            </div>
        </b-row>


    </div>

</template>

<script>
import Card from "../../Card.vue"

export default {
    props: ["cat"],
    method: {
        // pulled from another component  so wont end working of the bat
        //     selectCard(cat, categories) {
        // cat.selected = !cat.selected
        // const filteredCats = this.categories.filter(cat => cat.selected)
        // this.selectedCats = filteredCats
        // console.log("cardSelected", this.selectedCats)
        },
    created() {
        console.log(this.cat.items)
    }
}
</script>

<style scoped>

h3 {
    background-color: white;
}
img {
    width: 100%;
}

    .test-card {
        width: 170px;
        padding: 4px;
}
</style>

