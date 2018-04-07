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
        <strong><a :href=house.url target="_blank">{{house.name}}</a></strong> <i class="fa fa-home sm"></i><strong>{{house.size}}</strong> <small>{{house.location}}</small> <i class="fa fa-euro-sign fa-sm"></i> <small><strong>{{house.price}}</strong></small> <span v-html="showIcon"></span>
        <br/>
        <small>{{house.description}}</small>
        <br/>
        <small><b><i class="fa fa-comments blueIcon"></i> {{house.review}}</b></small>
      </p>
    </div>
  </div>
  <div class="media-right">
    <router-link v-bind:to="{ name: 'EditHouse', params: { id: house.id } }"><button class="button"><i class="fa fa-edit"></i></button></router-link>
    <!--<button class="button"><i class="fa fa-trash"></i></button>-->
  </div>
</article>
<hr>
</div>
</template>


<script>
import HouseService from '@/services/HouseService'
export default {
    name: 'HouseItem',
    props: ['house'],
    computed: {
      showIcon(){
        if(this.house.visited){
          return `<i class="fas fa-eye" style="color:green;"></i>`
        }
        else {
          return `<i class="fa fa-question-circle" style="color:red;"></i>`
        }
      }
    },
    methods: {
      async deleteHouse(id){
        await HouseService.deleteHouse(id);
        this.$router.push({name: 'HousesList'});
      }
    }
}

</script>

<style scoped>
.greenIcon {
  color: green;
}
.redIcon {
  color: red;
}
.blueIcon {
  color: blue;
}
</style>