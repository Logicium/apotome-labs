<script setup lang="ts">

import data from "../data/data.ts";
</script>

<template>
  <div class="panel">
    <div class="big title">{{data.about.intro}}</div>
    <div class="small story">{{data.about.story}}</div>
    <div class="aboutImg image"></div>
  </div>
</template>

<style scoped>

.panel{
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 50%;
  grid-template-rows: auto 50%;
  grid-gap: 8rem;
}

.title{
  width: 70%;
  grid-column: span 2;
}

.story{
  margin-top: auto;
}

.aboutImg{
  background-image: url("/agency/agency5.jpg");
}

</style>
