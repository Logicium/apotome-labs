<script setup lang="ts">
import { ref } from 'vue';
import data from "../data/data.ts";
import PricingCard from "@/components/cards/PricingCard.vue";
import PricingCardVertical from "@/components/cards/PricingCardVertical.vue";
import PriceDetailView from "@/components/cards/PriceDetailView.vue";

// State for selected package and detail panel visibility
const showDetailPanel = ref(false);
const selectedPackage = ref(null);

// Package data
const packages = [
  data.pricing.tiers.tier1,
  data.pricing.tiers.tier2,
  data.pricing.tiers.tier3
];

// Handle learn more click
const handleLearnMore = (pkg) => {
  selectedPackage.value = pkg;
  showDetailPanel.value = true;
};

// Close detail panel
const closeDetailPanel = () => {
  showDetailPanel.value = false;
};
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">Choose a Plan that Fits Your Business Best</div>
      <div class="small subtitle">From websites starting at $800 to maintenance plans starting at $20, we strive for both quality and affordability.</div>
    </div>
    <div class="pricingGrid">

      <div class="priceCardSmall">
        <div class="med">01 Startup Package</div>
        <div class="flex">
          <div class="big gray">$800</div>
          <div class="small unit">/project</div>
        </div>
        <div class="row">
          <div class="tag button" @click="handleLearnMore(packages[0])"> LEARN MORE </div>
        </div>
        <div class="xl num lightgray">01</div>
      </div>
      <div class="priceCardSmall">
        <div class="med">02 Growth Package</div>
        <div class="flex">
          <div class="big gray">$1500+</div>
          <div class="small unit">/project</div>
        </div>
        <div class="row">
          <div class="tag button" @click="handleLearnMore(packages[1])"> LEARN MORE </div>
        </div>
        <div class="xl num lightgray">02</div>
      </div>
      <div class="priceCardLarge">
        <div class="med">03 Enterprise Package</div>
        <div class="flex">
          <div class="big gray">$3400+</div>
          <div class="small unit">/project</div>
        </div>

        <div class="row">
          <div class="tag button" @click="handleLearnMore(packages[2])"> LEARN MORE </div>
        </div>
        <div class="xl num lightgray">03</div>
      </div>

      <transition name="fade">
        <PriceDetailView
          v-if="showDetailPanel"
          :selectedPackage="selectedPackage"
          @close="closeDetailPanel"
        />
      </transition>

    </div>


  </div>
</template>

<style scoped>
.panel {
  padding-top: 100px;
  display: grid;
  grid-template-rows: auto 1fr;
  position: relative; /* For absolute positioning of detail panel */
}

.title {
  width: 70%;
}

.tag.button{
  margin-top: auto;
}

.pricingGrid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
}

.unit{
  margin-top: auto;
}

.priceCardSmall {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2rem;
  overflow: hidden;
}

.priceCardLarge {
  position: relative;
  border: 1px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  grid-column: span 2;
  overflow: hidden;
}

.num {
  position: absolute;
  right: 0;
  bottom: -33%;
}

.row {
  align-items: end;
  display: flex;
  margin-top: auto;
  justify-content: space-between;
}

/* Styles moved to PriceDetailView.vue */

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
