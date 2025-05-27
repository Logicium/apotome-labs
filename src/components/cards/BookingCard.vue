<script setup lang="ts">
defineProps({
  time: {
    type: String,
    required: true
  },
  value: {
    type: Number,
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
    class="bookingCard"
    :class="{ 'selected': isSelected }"
    @click="$emit('select')"
  >
    {{ time }}
  </div>
</template>

<style scoped>
.bookingCard {
  border: 1px solid #a8a8a8;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.bookingCard:hover {
  border-color: black;
}

.bookingCard.selected {
  background-color: black;
  color: white;
  border-color: black;
}
</style>
