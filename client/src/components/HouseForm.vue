<template>
<div>
    <nav class="level">
    <div class="level-left"></div>
    <div class="level-right">
        <p class="level-item"><a class="button is-success"><router-link v-bind:to="{ name: 'HousesList'}">Immobili</router-link></a></p>
    </div>
    
</nav>
    <div class="content">
        <h1 class="title is-centered">Aggiungi nuovo Immobile</h1>
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
                <button class="button" @click="addHouse">Aggiungi</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import HouseService from '@/services/HouseService'

export default {
    name: 'HouseForm',
    data(){
        return {
            name:'',
            location:'',
            description:'',
            image:'',
            url:'',
            price:'',
            review:''
        }
    },
    methods: {
        async addHouse(){
            await HouseService.addHouse({
                name: this.name,
                location: this.location,
                description: this.description,
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

