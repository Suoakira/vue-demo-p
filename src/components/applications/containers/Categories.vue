<template>
    <b-container fluid>
        <b-row>
            <b-col cols="2">
                <div class="categories-lg">Categories</div>
            </b-col>
            <b-col cols="10">
                <div class="cat-description-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim aLorem ipsum dolor sit amet.labore et dolore magna aliqua. 
                    Ut enim aLorem ipsum dolor sit amet.
                </div>
            </b-col>
        </b-row>
        <b-row>
           <b-col>
               <div class="cat-description-lg lower-cards">
                <h5>{{ this.$router.currentRoute.fullPath }}</h5>
               </div>
           </b-col>
        </b-row>
        <b-row>
            <div v-for="cat in applicationData.categories" :key="cat.name" class="card-container" >
                <!-- <div @click.meta="selectCard(cat, categories)" @click.shift="multiSelect(cat)" class="card-back" v-bind:style="{ backgroundColor: cat.selected ? `yellow` : 'blue'}"  > -->
                    <div v-show="showCards" v-on:click="isCurrentPath(cat)">
                        <router-link to="/app-one/categories/items">
                            <Card :title="cat.name"/>
                        </router-link>
                    </div>
                        
                <!-- </div> -->
            </div>
            <router-view :cat="selectedCat"></router-view>
        </b-row>
    </b-container>
</template>

<script>
import Card from "../../../components/Card.vue"
import { mapGetters } from "vuex"

export default {
    data() {
        return {
            selectedCat: undefined,
            selectedCats: [],
            // arrayOfShiftClicks: [],
            showCards: true,
            clickedCat: undefined
        }
    },
    components: {
        Card
    },
    methods: {
        selectCard(cat, categories) {
            cat.selected = !cat.selected
            const filteredCats = this.categories.filter(cat => cat.selected)
            this.selectedCats = filteredCats
            console.log("cardSelected", this.selectedCats)
        },
        // redundent code not needed functionality
        // multiSelect(cat) {
        //     console.log(cat)
        //     cat.selected = true
        //     this.arrayOfShiftClicks.push(cat)
        //     if (this.arrayOfShiftClicks.length > 2) {
        //         const selectedCats = this.arrayOfShiftClicks.filter(cat => cat.selected)
        //         let firstCatIndex = this.categories.indexOf(selectedCats[selectedCats.length -2])
        //         let lastCatIndex = this.categories.indexOf(selectedCats[selectedCats.length -1])
        //             console.log(firstCatIndex, lastCatIndex)
        //             let sortedLength = [firstCatIndex, lastCatIndex]
        //             let sortedArray = sortedLength.sort((a, b) => a - b)
        //             console.log(sortedArray)
        //             const copyOfSelected = this.categories.slice(sortedArray[0], sortedArray[1])
        //             this.selectedCats = copyOfSelected.map(cat => cat.selected = true)
        //     }
    isCurrentPath(cat) {
        this.selectedCat = cat
        if (this.$router.currentRoute == "/app-one/categories") {
            this.showCards = true 
        } else {
            this.showCards = false
        }
    },      
    },
    computed: {
    ...mapGetters([
      'mainData',
      'applicationData',
    ])

    
    }
}
</script>

<style>
    .categories-lg {
        float: left;
        color: white;
        margin: .4em;
        font-weight: bold;
        color: white;
    }

    .cat-description-lg {
        font-size: .8em;
        margin-top: .4em;
        float: left;
        color: white;
        text-align: left;
    }

    .lower-cards {
        margin-top: 1.6em;
        font-size: .7em;
        font-weight: bold;
    }

    .card-back {
        padding: 2px;
    }
  
    
</style>


