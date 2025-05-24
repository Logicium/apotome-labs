<script setup lang="ts">

const props = defineProps(['name','price','duration','desc','features']);

</script>

<template>
  <div class="card">

    <div class="infoWrap flex">
      <div class="planInfo">
        <div class="med name">{{name.toUpperCase()}}</div>
        <div class="flex">
          <div class="big gray">{{price}}</div>
          <div class="small duration">{{duration}}</div>
        </div>
      </div>
      <div class="desc small">
        {{desc}}
      </div>
    </div>

    <div class="features">
      <div class="top">What's Included:</div>
      <div class="feature small flex top" v-for="feature in features"><div class="check"/>{{feature}}</div>
    </div>


  </div>

</template>

<style scoped>


.infoWrap{
  border: 1px solid black;
  padding: 1rem;
  flex-direction: column;
}

.top{
  margin-bottom: 1rem;
}
.planInfo{
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.features{
  padding: 1rem;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

.name{
  margin-bottom: 1rem;
}

.duration,.desc{
  margin-top: auto;
}

.card{
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-bottom: 1rem;
}

.check{
  width: 1rem;
  height: 1rem;
  background-color: black;
  margin-right: 1rem;
}

</style>
