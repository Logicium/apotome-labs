<script setup lang="ts">

import data from "../data/data.ts";
import PricingCard from "@/components/cards/PricingCard.vue";
import PricingCardVertical from "@/components/cards/PricingCardVertical.vue";
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">Transparent Pricing Plans</div>
      <div class="small subtitle">{{data.pricing.intro}}</div>
    </div>
    <div class="pricingCards">
        <PricingCardVertical
          v-for="pricing in data.pricing.tiers"
          :name="pricing.name"
          :desc="pricing.desc"
          :price="pricing.price"
          :duration="pricing.duration"
          :features="pricing.features"
        />
    </div>
  </div>
</template>

<style scoped lang="scss">

.panel{
  display: grid;
  //width: calc(100vw - 4rem);
  grid-template-rows: auto 1fr;
}

.title{
  width: 70%;
}

.pricingCards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .panel{
    height: fit-content;
  }

  .title,.subtitle{
    width: 100%;
  }

  .pricingCards{
    grid-template-columns: 1fr;
  }
}
</style>
