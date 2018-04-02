<template>
<div>
<nav class="level">
    <div class="level-left"></div>
    <div class="level-right">
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
            houses: []
        }
    },
    mounted() {
        this.getHouses();
    },
    methods: {
        async getHouses() {
            const response = await HouseService.getHouses();
            this.houses = response.data;
        }
    },
    components: {
        HouseItem
    }
}


</script>

<style></style>