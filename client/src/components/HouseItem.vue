<template>
<div>
<article class="media">
  <figure class="media-left">
    <p class="image is-128x128">
      <img :src=house.image>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong><a :href=house.url target="_blank">{{house.name}}</a></strong> <small>{{house.location}}</small> <i class="fa fa-euro-sign fa-sm"></i> <small><strong>{{house.price}}</strong></small>
        <br/>
        {{house.description}}
        <br/>
        <small>{{house.review}}</small>
      </p>
    </div>
  </div>
  <div class="media-right">
    <router-link v-bind:to="{ name: 'EditHouse', params: { id: house.id } }"><button class="button"><i class="fa fa-edit"></i></button></router-link>
    <button class="button"><i class="fa fa-trash"></i></button>
  </div>
</article>
</div>
</template>


<script>
import HouseService from '@/services/HouseService'
export default {
    name: 'HouseItem',
    props: ['house'],
    methods: {
      async deleteHouse(id){
        await HouseService.deleteHouse(id);
        this.$router.push({name: 'HousesList'});
      }
    }
}

</script>