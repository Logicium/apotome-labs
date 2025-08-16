<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';
import DoubleImage from '../components/DoubleImage.vue';

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
          <DoubleImage :image="project.image" :aspect-ratio="aspectRatio" :is-mobile="isMobileProject" />
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
  margin-top: 2rem;
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

@media (max-width: 768px) {
  .projectContainer {
    grid-template-columns: 1fr;
  }
  .projectImageCol {
    grid-row: 1;
    height: 100px;
  }
}

/* These styles have been moved to the DoubleImage component */
</style>
