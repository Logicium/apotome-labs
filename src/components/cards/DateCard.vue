<script setup lang="ts">
defineProps({
  date: {
    type: Date,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
});

defineEmits(['select']);
</script>

<template>
  <div
    class="dateCard"
    :class="{ 'selected': isSelected }"
    @click="$emit('select')"
  >
    <div class="dayName">{{ date.toLocaleDateString('en-US', { weekday: 'short' }) }}</div>
    <div class="dayNumber med">{{ date.getDate() }}</div>
    <div class="monthName">{{ date.toLocaleDateString('en-US', { month: 'short' }) }}</div>
  </div>
</template>

<style scoped>
.dateCard {
  border: 1px solid #a8a8a8;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dateCard:hover {
  border-color: black;
}

.dateCard.selected {
  background-color: black;
  color: white;
  border-color: black;
}

.dayName {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.dayNumber {
  margin-bottom: 0.5rem;
}

.monthName {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .dateCard {
    padding: 0.5rem;
  }
}
</style>
