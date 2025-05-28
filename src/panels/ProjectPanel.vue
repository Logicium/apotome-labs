<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closePanel = () => {
  emit('close');
};

const isMobileProject = computed(() => {
  return props.project.type.toLowerCase().includes('mobile');
});

const aspectRatio = computed(() => {
  return isMobileProject.value ? '9/16' : '16/9';
});
</script>

<template>
  <transition name="fade" mode="out-in">
  <div class="projectPanel" v-if="show">
    <div class="panelContent">
      <div>
        <div class="big title">{{ project.name }}</div>
        <div class="small subtitle top">{{ project.description}}</div>
      </div>
      <div class="projectContainer">
        <div class="projectInfoCol">


          <div class="projectDetails">

            <div class="detailRow">
              <div class="detailKey">TYPE</div>
              <div class="gray">{{ project.type }}&nbsp;</div>
            </div>

            <div class="detailRow">
              <div class="detailKey">CLIENT</div>
              <div class="detailValue gray">{{ project.client.toUpperCase() }}</div>
            </div>

            <div class="detailRow">
              <div class="detailKey">DATE</div>
              <div class="detailValue gray">{{ project.date.toUpperCase() }}</div>
            </div>

            <div class="detailRow">
              <div class="detailKey">LINK</div>
              <div class="detailValue">
                <a class="gray" :href="project.url" target="_blank">{{ project.url }}</a>
              </div>
            </div>
          </div>

          <div class="med content">{{ project.statement }}</div>

          <div class="navigationRow">
            <div class="button" @click="closePanel">BACK</div>
          </div>
        </div>

        <div class="projectImageCol">
          <div class="blurredBackground" :style="{ backgroundImage: `url(${project.image})` }"></div>
          <div class="clearImageContainer" :class="{ 'mobile': isMobileProject }">
            <img class="clearImage" :src="project.image" :style="{ aspectRatio: aspectRatio }" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<style scoped lang="scss">
.projectPanel {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 4rem);
  height: calc(100% - 4rem);
  background-color: white;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 2rem 2rem 2rem;
}

.panelContent {
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 800px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.projectContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  height: 500px;
  margin-top: 3rem;
}

.projectInfoCol {
  display: flex;
  flex-direction: column;
}

.projectDetails {
  border-top: 1px solid black;
}

.detailRow {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid black;
}

.tag{
margin-top: 0;
}

.detailValue a {
  text-decoration: none;
}

.detailValue a:hover {
  text-decoration: underline;
  color: black;
  transition: 0.3s;
}

.content {
  margin: 2rem 0;
}

.navigationRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid black;
}

.projectImageCol {
  position: relative;
  overflow: hidden;
}

.blurredBackground {
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

.clearImageContainer {
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

.clearImage {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
}

/* For standard projects (16:9 aspect ratio) */
.clearImageContainer:not(.mobile) .clearImage {
  width: 100%; /* Make image flush with left and right sides */
  height: auto;
}

/* For mobile projects (9:16 aspect ratio) */
.clearImageContainer.mobile .clearImage {
  height: 100%; /* Make image flush with top and bottom sides */
  width: auto;
}
</style>
