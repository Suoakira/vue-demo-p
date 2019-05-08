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
            <div v-for="n in 6" class="card-container">
                <Card />
            </div>
        </b-row>
    </b-container>
</template>

<script>
import Card from "../../../components/Card"
export default {
    data() {
        return {
        }
    },
    components: {
        Card
    },
    created() {

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
  
    
</style>


