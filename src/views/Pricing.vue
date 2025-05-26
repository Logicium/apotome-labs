<script setup lang="ts">

import data from "@/data/data.ts";
import Tier from "@/components/Tier.vue";
</script>

<template>
  <div class="wrap">

    <div class="titleWrap">
      <div class="title">PRICING</div>
      <div class="subtitle">{{data.pricing.intro}}</div>
    </div>

    <div class="priceWrap">
<!--      <Tier title=" TIER 00 / " price=" $49 / MO " :data="data.pricing.tiers.tier0" style="height: 80%"/>-->
      <Tier title=" TIER 01 / " price=" $99 / MO " :data="data.pricing.tiers.tier1" style="height: 100%"/>
      <Tier title=" TIER 02 / " price=" $149 / MO " :data="data.pricing.tiers.tier2" style="height: 100%"/>
      <Tier title=" TIER 03 / " price=" $199 / MO " :data="data.pricing.tiers.tier3" style="height: 80%"/>
    </div>

  </div>
</template>

<style scoped>

.priceWrap{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100%;
  grid-gap: 2rem;
  padding-top: 2rem;
  height: 100%;
}

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
