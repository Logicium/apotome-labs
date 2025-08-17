<script setup lang="ts">
const props = defineProps({
  selectedPackage: {
    type: Object,
    default: null
  }
});
</script>

<template>
  <div class="maintenanceCardLarge">
    <div class="med">What's Included:</div>
    <transition name="fade" mode="out-in" :key="selectedPackage.name">
      <div v-if="selectedPackage" class="packageDetails">
        <div class="packageName">{{ selectedPackage.name }}</div>
        <div class="packageDesc">{{ selectedPackage.desc }}</div>
        <div class="features">
          <div class="feature small flex" v-for="feature in selectedPackage.features" :key="feature">
            <div class="check"></div>{{ feature }}
          </div>
        </div>
      </div>
      <div v-else class="noSelection">
        Select a maintenance package to see what's included
      </div>
    </transition>
  </div>
</template>

<style scoped>
.maintenanceCardLarge {
  border: 1px solid black;
  padding: 2rem;
  grid-row: 1 / 4;
  grid-column: 2;
  display: flex;
  flex-direction: column;
}

.packageName {
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.packageDesc {
  margin-bottom: 2rem;
  font-size: 0.9rem;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.check {
  width: 1rem;
  height: 1rem;
  background-color: black;
  margin-right: 1rem;
}

.noSelection {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #888;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .maintenanceCardLarge {
    grid-column: span 1;
    grid-row: 4;
  }
}
</style>
