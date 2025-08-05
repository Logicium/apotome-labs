<script setup lang="ts">
import { ref } from 'vue';
import data from "@/data/data.ts";
import MaintenanceCard from "@/components/cards/MaintenanceCard.vue";
import MaintenanceCardLarge from "@/components/cards/MaintenanceCardLarge.vue";

// Get maintenance packages from data
const maintenancePackages = [
  data.pricing.maintenance.packages.standard,
  data.pricing.maintenance.packages.full,
  data.pricing.maintenance.packages.enterprise
];

// Selected package state
const selectedPackage = ref(maintenancePackages[0]);

// Handle package selection
const selectPackage = (pkg) => {
  selectedPackage.value = pkg;
};
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">Maintenance Packages</div>
      <div class="small subtitle">{{ data.pricing.maintenance.intro }}</div>
    </div>
    <div class="maintenanceGrid">
      <MaintenanceCard
        v-for="pkg in maintenancePackages"
        :key="pkg.id"
        :id="pkg.id"
        :name="pkg.name"
        :price="pkg.price"
        :duration="pkg.duration"
        :isActive="selectedPackage.name === pkg.name"
        @select="selectPackage(pkg)"
      />
      <MaintenanceCardLarge :selectedPackage="selectedPackage" />
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

.maintenanceGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
}
</style>
