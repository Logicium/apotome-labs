<script setup lang="ts">

import {ref, watch} from "vue";

const props = defineProps({
  number: String,
  name: String,
  desc: String,
  tags: Array<String>,
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
  emit('toggle', props.number);
};

</script>

<template>
  <div class="service">
    <div class="small num">{{ number }}</div>
    <div>
      <div class="med name">{{ name }}</div>
      <div class="infoWrap" :class="{hidden:!showFull}">
        <div class="tags flex">
          <div class="tag" v-for="tag in tags">&nbsp;{{tag.toUpperCase()}}&nbsp;</div>
        </div>
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

.service{
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid black;
}

.control{
  margin-top: 0.2rem;
  margin-left: auto;
  line-height: 1.5rem;
  font-weight: 200;
  cursor: pointer;
  display: flex;
}

.infoWrap{
  transition: 1s;
  opacity: 1;
  height: auto;
  visibility: visible;
  interpolate-size: allow-keywords;
}

.hidden{
  opacity: 0;
  height: 0;
  visibility: hidden;
  overflow: hidden;
  interpolate-size: allow-keywords;
}

.tags{
  gap: 1rem;
  margin-bottom: 1rem;
}

.name{
  line-height: 1.5rem;
}

.tag{
  white-space: break-spaces;
}

.plus-icon {
  position: relative;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.line {
  background-color: black;
  position: absolute;
  transition: transform 0.3s ease;
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
