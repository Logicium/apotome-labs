<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  title: String,
  desc: String,
  isActive: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle']);

const showFull = ref(props.isActive);

// Watch for changes in the isActive prop to update the local showFull state
watch(() => props.isActive, (newValue) => {
  showFull.value = newValue;
});

// Function to handle toggling the card
const toggleCard = () => {
  emit('toggle', props.title);
};
</script>

<template>
  <div class="testimonial">
    <div>
      <div class="med">{{ title }}</div>
      <div class="infoWrap" :class="{hidden:!showFull}">
        <div class="small">{{ desc }}</div>
      </div>
    </div>

    <div class="control big" @click="toggleCard">
      <div class="plus-icon" :class="{ 'minus-icon': showFull }">
        <div class="line horizontal"></div>
        <div class="line vertical"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonial {
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid black;
}

.control {
  margin-top: 0.2rem;
  margin-left: auto;
  line-height: 1.5rem;
  font-weight: 200;
  width: 30px;
  cursor: pointer;
  display: flex;
}

.infoWrap {
  transition: 1s;
  opacity: 1;
  height: auto;
  visibility: visible;
  interpolate-size: allow-keywords;
}

.hidden {
  opacity: 0;
  height: 0;
  visibility: hidden;
  overflow: hidden;
  interpolate-size: allow-keywords;
}

.title {
  line-height: 1.5rem;
}

.plus-icon {
  position: relative;
  width: 25px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  background-color: black;
  position: absolute;
  transition: transform 0.5s ease;
}

.horizontal {
  width: 30px;
  height: 1px;
}

.vertical {
  width: 1px;
  height: 30px;
  transform: rotate(0deg);
}

.minus-icon .vertical {
  transform: rotate(90deg);
}
</style>
