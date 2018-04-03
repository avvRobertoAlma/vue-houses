<template>
<div>
    <nav class="level">
    <div class="level-left"></div>
    <div class="level-right">
        <p class="level-item"><a class="button is-success"><router-link v-bind:to="{ name: 'HousesList'}">Immobili</router-link></a></p>
    </div>
    
</nav>
    <div class="content">
        <h1 class="title is-centered">Modifica Immobile</h1>
        <div class="form">
            <div class="field">
                <label class="label">Titolo</label>
                <div class="control">
                    <input type="text" class="input" v-model="name">
                </div>
            </div>
            <div class="field">
                <label class="label">Indirizzo</label>
                <div class="control">
                    <input type="text" class="input" v-model="location">
                </div>
            </div>
            <div class="field">
                <label class="label">Descrizione</label>
                <div class="control">
                    <input type="text" class="input" v-model="description">
                </div>
            </div>
            <div class="field">
                <label class="label">Dimensioni</label>
                <div class="control">
                    <input type="number" class="input" v-model="size">
                </div>
            </div>
            <div class="field">
                <label class="label">Immagine</label>
                <div class="control">
                    <input type="text" class="input" v-model="image">
                </div>
            </div>
            <div class="field">
                <label class="label">Url</label>
                <div class="control">
                    <input type="text" class="input" v-model="url">
                </div>
            </div>
            <div class="field">
                <label class="label">Prezzo</label>
                <div class="control">
                    <input type="number" class="input" v-model="price">
                </div>
            </div>
            <div class="field">
                <label class="label">Commenti</label>
                <div class="control">
                    <textarea class="textarea" v-model="review" />
                </div>
            </div>
            <div class="field">
                <button class="button" @click="updateHouse">Aggiorna</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import HouseService from '@/services/HouseService'

export default {
    name: 'EditHouse',
    data(){
        return {
            name:'',
            location:'',
            description:'',
            size:'',
            image:'',
            url:'',
            price:'',
            review:''
        }
    },
    mounted() {
        this.getHouse();
    },
    methods: {
        async getHouse() {
            const response = await HouseService.getHouse({
                id: this.$route.params.id
            });
            const house = response.data[0];
            this.name = house.name;
            this.location = house.location;
            this.description = house.description;
            this.size = house.size;
            this.image = house.image;
            this.url = house.url;
            this.price = house.price;
            this.review = house.review;
        },
        async updateHouse(){
            await HouseService.updateHouse({
                id: this.$route.params.id,
                name: this.name,
                location: this.location,
                description: this.description,
                size: this.size,
                image: this.image,
                url: this.url,
                price: this.price,
                review: this.review
            });
            this.$router.push({ name: 'HousesList'});
        }
    }
}
</script>

