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
    <button class="button"><i class="fa fa-edit"></i></button>
    <button class="button"><i class="fa fa-trash"></i></button>
  </div>
</article>
</div>
</template>


<script>
export default {
    name: 'HouseItem',
    props: ['house']
}

</script>