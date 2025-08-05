<script setup lang="ts">
import data from "@/data/data.ts";
import { ref, computed } from "vue";
import ProjectPanel from "@/panels/ProjectPanel.vue";

// State for featured project scrolling
const featuredProjectIndex = ref(0);
const featuredProjects = computed(() => data.projects.list.filter(project => project.featured));

// State for project panel
const showProjectPanel = ref(false);
const selectedProject = ref(null);

// Increment and decrement functions for featured projects
const incrementFeaturedProject = () => {
  featuredProjectIndex.value = (featuredProjectIndex.value + 1) % featuredProjects.value.length;
};

const decrementFeaturedProject = () => {
  featuredProjectIndex.value = (featuredProjectIndex.value - 1 + featuredProjects.value.length) % featuredProjects.value.length;
};

// Function to open project panel
const openProjectPanel = () => {
  selectedProject.value = featuredProjects.value[featuredProjectIndex.value];
  showProjectPanel.value = true;
};

// Function to close project panel
const closeProjectPanel = () => {
  showProjectPanel.value = false;
};
</script>

<template>
  <div class="panel featuredPanel">
    <div>
      <div class="big title">Featured Projects</div>
      <div class="small subtitle">Explore our highlighted work showcasing our expertise and creativity.</div>
    </div>

    <div class="featuredContainer">

        <div class="featuredProject">

          <transition name="fade" mode="out-in">
            <div class="projectImageCol" :key="featuredProjectIndex">
              <div class="blurredBackground" :style="{ backgroundImage: `url(${featuredProjects[featuredProjectIndex].image})` }"></div>
              <div class="clearImageContainer">
                <img class="clearImage" :src="featuredProjects[featuredProjectIndex].image" style="aspect-ratio: 16/9;" />
              </div>
            </div>
          </transition>

          <div class="projectInfoCol">
            <div class="projectNameAndButtons">
              <div class="projectNameSection">
                <div class="big">{{ featuredProjects[featuredProjectIndex].name }}</div>
              </div>
              <div class="buttonsSection">
                <div class="buttons flex">
                  <div class="button navButton" @click="decrementFeaturedProject">
                    <
                  </div>
                  <div class="button navButton" @click="incrementFeaturedProject">
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="contentWrap">
              <div class="content">{{ featuredProjects[featuredProjectIndex].statement }}</div>
              <div class="button fit" @click="openProjectPanel">VIEW PROJECT</div>
            </div>

          </div>

        </div>

    </div>

    <!-- Project Panel -->
    <ProjectPanel
      :project="selectedProject"
      :show="showProjectPanel"
      @close="closeProjectPanel"
    />
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: grid;
  grid-template-rows: auto 1fr;
  padding-bottom: 4rem;
}

.featuredPanel {
  padding-top: 100px;
}

.fit{
  width: fit-content;
  margin-left: auto;
}

.featuredContainer {
  margin-top: 2rem;
}

.featuredProject {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  height: 100%;
}

/* This ensures the image container maintains a 16:9 aspect ratio */
.projectImageCol {
  position: relative;
  width: 100%;
  overflow: hidden;

  background-color: #f0f0f0; /* Light background color while image loads */
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
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
}

.projectInfoCol {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.projectNameAndButtons {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid black;
}

.projectNameSection {
  width: 100%;
}

.buttonsSection {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

.contentWrap {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
}

.content {
  width: 50%;
}

.buttons {
  display: flex;
  gap: 1rem;
  font-weight: 200;
  font-size: 1.8rem;
}

.navButton {
  cursor: pointer;
  width: 45px;
  padding: 0;
  transition: 0.5s;
}

.navButton:hover {
  background-color: black;
  color: white;
  transition: 0.5s;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
