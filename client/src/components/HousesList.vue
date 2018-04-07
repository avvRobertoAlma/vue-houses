<template>
<div>
<nav class="level">
    <div class="level-left"></div>
    <div class="level-right">
        <div class="select level-item">
            <select selected='all' v-model="filterHousesByVisit">
                <option value="visited">Solo Visitati</option>
                <option value="toBeVisited">Solo da visitare</option>
                <option value="all">Tutti</option>
            </select>
        </div>
        <p class="level-item" @click="sortBySize">Grandezza</p>
        <p class="level-item" @click="sortByPrice">Prezzo</p>
        <p class="level-item"><a class="button is-primary"><router-link v-bind:to="{ name: 'NewHouse'}">Nuovo Immobile</router-link></a></p>
    </div>
    
</nav>
<div class="content">

    <!-- Direttiva V-FOR, :house è la props -->
    <HouseItem v-for="(house, index) in filteredHouses" :key="index" :house="house"/>

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
            filterHousesByVisit: 'all',
        }
    },
    computed:{
        filteredHouses(){
            if(this.filterHousesByVisit == 'all'){
                return this.houses;
            } else if (this.filterHousesByVisit == 'visited'){
                    return this.houses.filter((item)=>{
                        return item.visited == true;
                    })
                } else if (this.filterHousesByVisit == 'toBeVisited'){
                    return this.houses.filter((item)=>{
                        return item.visited == false;
                    })
                }
            },
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
                this.filteredHouses.sort((a,b) =>{
                return b.price - a.price;
            })
            this.priceOrder = 'descending';
            this.$forceUpdate();
            } else {
                this.filteredHouses.sort((a,b) =>{
                return a.price - b.price;
            })
            this.priceOrder = 'ascending';
            this.$forceUpdate();

            
        }
        },
        sortBySize() {
            if(!this.sizeOrder || this.sizeOrder == 'ascending'){
                this.filteredHouses.sort((a,b) =>{
                return b.size - a.size;
            })
            this.sizeOrder = 'descending';
            this.$forceUpdate();
            } else {
                 this.filteredHouses.sort((a,b) =>{
                return a.size - b.size;
            })
            this.sizeOrder = 'ascending';
            this.$forceUpdate();
        }
        },
    },
    components: {
        HouseItem
    }
}


</script>

<style scoped>
a{
    color: white!important;
}
nav{
    background-color: #F8F8FF;
}
</style>