<script setup lang="ts">
import data from "../data/data.ts";
import PricingCard from "@/components/cards/PricingCard.vue";
import PricingCardVertical from "@/components/cards/PricingCardVertical.vue";
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">Choose a Plan that Fits Your Business Best</div>
      <div class="small subtitle">From websites starting at $800 to maintenance plans starting at $20, we strive for both quality and affordability.</div>
    </div>
    <div class="pricingGrid">
      <div class="priceCardSmall">
        <div class="med">Startup Package</div>
        <div class="">$800/Project</div>
        <div class="row">
          <div class="tag button"> LEARN MORE </div>
          <div class="big num gray">01</div>
        </div>
      </div>
      <div class="priceCardSmall">
        <div class="med">Growth Package</div>
        <div class="">$1500/Project</div>
        <div class="row">
          <div class="tag button"> LEARN MORE </div>
          <div class="big num gray">02</div>
        </div>
      </div>
      <div class="priceCardLarge">
        <div class="med">Enterprise Package</div>
        <div class="">$3400+/Project</div>
        <div class="row">
          <div class="tag button"> LEARN MORE </div>
          <div class="big num gray">03</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel {
  padding-top: 100px;
  display: grid;
  grid-template-rows: auto 1fr;
}

.title {
  width: 70%;
}

.pricingGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
}

.priceCardSmall {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2rem;
}

.priceCardLarge {
  border: 1px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  grid-column: span 2;
}

.num {
  margin-top: auto;
  margin-left: auto;
}

.row {
  align-items: end;
  display: flex;
  margin-top: auto;
  justify-content: space-between;
}
</style>
