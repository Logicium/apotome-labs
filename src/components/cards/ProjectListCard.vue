<script setup lang="ts">
const props = defineProps(['name', 'type', 'description', 'image', 'featured']);
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<template>
  <div class="projectListCard">
    <div class="projectInfo">
      <div class="projectHeader">
        <div class="med">{{ name }}</div>
        <div class="tag">&nbsp;{{ type }}&nbsp;</div>
      </div>
      <div class="projectDescription">
        <div class="small">{{ description }}</div>
        <div class="button" @click="handleClick">VIEW PROJECT</div>
      </div>
    </div>
    <div class="projectImage image" :style="{ backgroundImage: `url(${image})` }"></div>
  </div>
</template>

<style scoped>
.projectListCard {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 2/3 for info, 1/3 for image */
  gap: 1rem;
  border: 1px solid black;
  margin-bottom: 1.5rem;
  transition: 0.3s;
}

.projectListCard:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.projectInfo {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.projectHeader {
  margin-bottom: 1rem;
}

.projectDescription {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.projectImage {
  background-position: center;
  background-size: cover;
  min-height: 200px;
}

.button {
  width: fit-content;
  margin-top: 0.5rem;
}
</style>
