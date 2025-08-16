<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['id', 'name', 'price', 'duration', 'isActive']);
const emit = defineEmits(['select']);

const handleSelect = () => {
  emit('select');
};
</script>

<template>
  <div class="maintenanceCard" :class="{ active: isActive }">
    <div class="flex">
      <div class="med">{{ name }}</div>
      <div class="small mobileNum">{{ id }}</div>
    </div>
    <div class="rate">{{ price }}{{ duration }}</div>
    <div class="row">
      <div class="tag button" @click="handleSelect"> LEARN MORE </div>
      <div class="big num gray">{{ id }}</div>
    </div>
  </div>
</template>

<style scoped>
.maintenanceCard {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 2rem;
  transition: all 0.5s ease;
  grid-column: 1;
}

.tag.button{
  transition: 0.5s;
  opacity: 1;
}

.maintenanceCard.active {
  background-color: black;
  color: white;
}

.maintenanceCard.active .button {
  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}

.maintenanceCard.active .gray {
  color: white;
}

.row {
  align-items: end;
  display: flex;
  margin-top: auto;
  justify-content: space-between;
}

.rate{
  margin-top: 1rem;
}

.num {
  margin-top: auto;
  margin-left: auto;
}

.mobileNum{
  visibility: hidden;
}

@media (max-width: 768px) {
  .maintenanceCard {
    padding: 1rem;
    grid-column: auto;
    grid-row: auto;
  }

  .num{
    display: none;
  }

  .mobileNum{
    margin-left:auto;
    visibility: visible;
  }
}
</style>
