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
                   Latest categories added
               </div>
           </b-col>
        </b-row>
        <b-row>
            <div v-for="cat in categories" :key="cat.id" class="card-container" >
                <div @click.meta="selectCard(cat, categories)" @click.shift="multiSelect(cat)" class="card-back" v-bind:style="{ backgroundColor: cat.selected ? `yellow` : 'blue'}"  >
                    <Card />

                </div>
            </div>
        </b-row>
    </b-container>
</template>

<script>
import Card from "../../../components/Card.vue"
export default {
    data() {
        return {
            selectedCats: [],
            arrayOfShiftClicks: [],
            categories: [
                { 
                id: "1", 
                image_url: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
                title: "Demo1", 
                content: "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont",
                selected: false
                },
                { 
                id: "2", 
                image_url: "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                title: "Demo2", 
                content: "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont",
                selected: false
                },
                { id: "3", 
                image_url: "https://images.pexels.com/photos/1134166/pexels-photo-1134166.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
                title: "Demo3", 
                content: "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont",
                selected: false
                },
                { 
                id: "4", 
                image_url: "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
                title: "Demo4", 
                content:  "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont",
                selected: false
                },
                { 
                id: "5", 
                image_url: "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
                title: "Demo4", 
                content:  "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont",
                selected: false
                },
                { 
                id: "6", 
                image_url: "https://images.pexels.com/photos/301614/pexels-photo-301614.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
                title: "Demo4", 
                content:  "remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets cont",
                selected: false
                }
            ]
        }
    },
    methods: {
        selectCard(cat, categories) {
            cat.selected = !cat.selected
            const filteredCats = this.categories.filter(cat => cat.selected)
            this.selectedCats = filteredCats
            this.$bus.$emit("selectedCats", this.selectedCats)
            console.log("cardSelected", this.selectedCats)
        },
        multiSelect(cat) {
            console.log(cat)
            cat.selected = true
            this.arrayOfShiftClicks.push(cat)
            if (this.arrayOfShiftClicks.length > 2) {
                const selectedCats = this.arrayOfShiftClicks.filter(cat => cat.selected)
                let firstCatIndex = this.categories.indexOf(selectedCats[selectedCats.length -2])
                let lastCatIndex = this.categories.indexOf(selectedCats[selectedCats.length -1])
                    console.log(firstCatIndex, lastCatIndex)
                    let sortedLength = [firstCatIndex, lastCatIndex]
                    let sortedArray = sortedLength.sort((a, b) => a - b)
                    console.log(sortedArray)
                    const copyOfSelected = this.categories.slice(sortedArray[0], sortedArray[1])
                    this.selectedCats = copyOfSelected.map(cat => cat.selected = true)
            }
        }
    },

    components: {
        Card
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
        color: #4C4C4C;
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


