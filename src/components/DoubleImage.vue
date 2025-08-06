<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  },
  aspectRatio: {
    type: String,
    default: '16/9'
  },
  isMobile: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="double-image-container">
    <div class="blurred-background" :style="{ backgroundImage: `url(${image})` }"></div>
    <div class="clear-image-container" :class="{ 'mobile': isMobile }">
      <img class="clear-image" :src="image" :style="{ aspectRatio: aspectRatio }" />
    </div>
  </div>
</template>

<style scoped>
.double-image-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.blurred-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  filter: blur(20px);
  transform: scale(1.1); /* Prevent blur edges from showing */
}

.clear-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
}

.clear-image {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
}

/* For standard projects (16:9 aspect ratio) */
.clear-image-container:not(.mobile) .clear-image {
  width: 100%; /* Make image flush with left and right sides */
  height: auto;
}

/* For mobile projects (9:16 aspect ratio) */
.clear-image-container.mobile .clear-image {
  height: 100%; /* Make image flush with top and bottom sides */
  width: auto;
}
</style>
