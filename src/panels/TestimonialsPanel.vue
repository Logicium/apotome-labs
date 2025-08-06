<script setup lang="ts">

</script>

<template>

  <div class="panel">
    <div>
      <div class="big title">Hear From Our Clients</div>
      <div class="small subtitle">We are happy to share the reviews from our clients.</div>
    </div>
    <div class="grid">
      <div class="image imgSmall"></div>
      <div class="image imgBig"></div>
      <div class="image imgSmall"></div>
      <div class="image imgSmall"></div>
      <div class="image imgSmall1"></div>
      <div class="image imgSmall2"></div>
    </div>
  </div>

</template>

<style scoped>

.panel{
  padding-top: 100px;
  display: grid;
  grid-template-rows: auto 1fr;
}

.grid{
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;
}

.image{

}

.imgSmall1{
  background-image: url('/public/projects/stormant-mobile.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.imgSmall2{
  background-image: url('/public/projects/stormant2.png');
}

.imgBig{
  grid-row: span 2;
  grid-column: span 2;
  background-image: url('/public/projects/stormant.png');
}

</style>
