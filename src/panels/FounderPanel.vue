<script setup lang="ts">

import data from "../data/data.ts";
</script>

<template>
  <div class="panel">
    <div class="big title">We build beautiful, functional websites that help local businesses succeed.</div>
    <div class="tag"> MEET OUR COMPANY </div>
    <div class="small story">
      <div>{{data.founder.story}}</div>
      <div>{{data.founder.outro}}</div>
    </div>
    <div class="med substory">{{data.founder.intro}}</div>
    <div class="aboutImg image"></div>
  </div>
</template>

<style scoped>

.panel{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto 50%;
  grid-gap: 2rem;
}

.title{
  margin-bottom: 0;
  width: 70%;
  grid-column: span 3;
}

.tag{
  margin-top: 0;
}

.story{
  grid-column: span 2;
  display: flex;
  gap: 1rem;
  flex-direction: column;
}

.substory{
  margin-top: auto;
}

.aboutImg{
  grid-column: span 2;
  background-image: url("/agency/agency9.jpg");
  filter: grayscale(100%);
}

</style>
