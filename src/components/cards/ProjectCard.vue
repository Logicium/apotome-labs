<script setup lang="ts">
const props = defineProps(['name', 'type', 'description', 'image', 'featured']);
</script>

<template>
  <div class="projectCard">
    <div class="projectImage image" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="projectInfo">
      <div>
        <div class="med">{{ name }}</div>
        <div class="tag">&nbsp;{{ type }}&nbsp;</div>
      </div>

      <div>
        <div class="small">{{ description }}</div>
        <div class="button">VIEW PROJECT</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projectCard {
  width: 40vw;
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: relative;
}

.projectInfo {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
}

.image {
  background-position: 50% 0%;
  transition: 0.5s;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
}

.button {
  margin-top: 1rem;
  width: fit-content;
}
</style>
