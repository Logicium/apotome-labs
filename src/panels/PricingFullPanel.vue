<script setup lang="ts">
import { ref } from 'vue';
import data from "../data/data.ts";
import PricingCard from "@/components/cards/PricingCard.vue";
import PricingCardVertical from "@/components/cards/PricingCardVertical.vue";

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
        <div class="med">Startup Package</div>
        <div class="">$800/Project</div>
        <div class="row">
          <div class="tag button" @click="handleLearnMore(packages[0])"> LEARN MORE </div>
          <div class="big num gray">01</div>
        </div>
      </div>
      <div class="priceCardSmall">
        <div class="med">Growth Package</div>
        <div class="">$1500/Project</div>
        <div class="row">
          <div class="tag button" @click="handleLearnMore(packages[1])"> LEARN MORE </div>
          <div class="big num gray">02</div>
        </div>
      </div>
      <div class="priceCardLarge">
        <div class="med">Enterprise Package</div>
        <div class="">$3400+/Project</div>
        <div class="row">
          <div class="tag button" @click="handleLearnMore(packages[2])"> LEARN MORE </div>
          <div class="big num gray">03</div>
        </div>
      </div>

      <transition name="fade">
        <div v-if="showDetailPanel" class="detailPanelOverlay">
          <div class="detailPanel">

            <div class="detailContent" v-if="selectedPackage">
              <div class="detailHeader">
                <div class="big">{{ selectedPackage.name }}</div>
                <div class="priceInfo">
                  <span class="big">{{ selectedPackage.price }}</span>
                  <span class="small">{{ selectedPackage.duration }}</span>
                </div>
              </div>
              <div class="detailDescription">
                {{ selectedPackage.desc }}
              </div>
              <div class="detailFeatures">
                <div class="med">What's Included:</div>
                <div class="featureList">
                  <div class="feature small flex" v-for="feature in selectedPackage.features" :key="feature">
                    <div class="check"></div>{{ feature }}
                  </div>
                </div>
              </div>
            </div>

            <div class="tag button" @click="closeDetailPanel"> CLOSE </div>

          </div>
        </div>
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

/* Detail Panel Styles */
.detailPanelOverlay {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.detailPanel {
  background-color: white;
  height: calc(100% - 4rem);
  padding: 2rem;
  position: relative;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
}

.closeButton {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  transition: all 0.3s ease;
}

.closeButton:hover {
  background-color: black;
  color: white;
}

.detailContent {
  margin-top: 1rem;
}

.detailHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.priceInfo {
  display: flex;
  align-items: baseline;
}

.priceInfo .small {
  margin-left: 0.5rem;
}

.detailDescription {
  margin-bottom: 2rem;
  line-height: 1.6;
}

.detailFeatures {
  margin-top: 1.5rem;
}

.featureList {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}

.feature {
  display: flex;
  align-items: center;
}

.check {
  width: 1rem;
  height: 1rem;
  background-color: black;
  margin-right: 1rem;
}

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
