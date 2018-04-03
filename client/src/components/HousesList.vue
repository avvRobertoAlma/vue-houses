<template>
<div>
<nav class="level">
    <div class="level-left"></div>
    <div class="level-right">
        <p class="level-item" @click="sortBySize">Grandezza</p>
        <p class="level-item" @click="sortByPrice">Prezzo</p>
        <p class="level-item"><a class="button is-success"><router-link v-bind:to="{ name: 'NewHouse'}">Nuovo Immobile</router-link></a></p>
    </div>
    
</nav>
<div class="content">

    <!-- Direttiva V-FOR, :house è la props -->
    <HouseItem v-for="(house, index) in houses" :key="index" :house="house"/>

</div>
</div>

</template>

<script>
import HouseItem from './HouseItem.vue'
import HouseService from '@/services/HouseService'

export default {
    name: 'HousesList',
    data () {
        return {
            houses: [],
            priceOrder: '',
            sizeOrder: '',
        }
    },
    mounted() {
        this.getHouses();
    },
    methods: {
        async getHouses() {
            const response = await HouseService.getHouses();
            this.houses = response.data;
        },
        sortByPrice() {
            if(!this.priceOrder || this.priceOrder == 'ascending'){
                this.houses.sort((a,b) =>{
                return b.price - a.price;
            })
            this.priceOrder = 'descending';
            } else {
                 this.houses.sort((a,b) =>{
                return a.price - b.price;
            })
            this.priceOrder = 'ascending';
            
        }
        },
        sortBySize() {
            if(!this.sizeOrder || this.sizeOrder == 'ascending'){
                this.houses.sort((a,b) =>{
                return b.size - a.size;
            })
            this.sizeOrder = 'descending';
            } else {
                 this.houses.sort((a,b) =>{
                return a.size - b.size;
            })
            this.sizeOrder = 'ascending';
            
        }
        }
    },
    components: {
        HouseItem
    }
}


</script>

<style></style>