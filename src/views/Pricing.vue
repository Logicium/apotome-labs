<script setup lang="ts">

import data from "@/data/data.ts";
</script>

<template>
  <div class="wrap">
    <div class="titleWrap">
      <div class="title">PRICING</div>
      <div class="subtitle">{{data.pricing.intro}}</div>
    </div>
  </div>
</template>

<style scoped>

.wrap{
  padding: 2rem;
  padding-top: 10vh;
  height: calc(90vh - 2rem);
}

.titleWrap{
  display: flex;
  border-bottom: solid black 1px;
}

.title{
  font-size: 7rem;
  line-height: 7rem;
}

.subtitle{
  margin-top: auto;
  margin-left: auto;
  font-size: 1.2rem;
  width: 33%;
  text-align: right;
}

</style>
