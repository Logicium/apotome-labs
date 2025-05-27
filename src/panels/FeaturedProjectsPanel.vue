<script setup lang="ts">
import data from "@/data/data.ts";
import { ref, computed } from "vue";

// State for featured project scrolling
const featuredProjectIndex = ref(0);
const featuredProjects = computed(() => data.projects.list.filter(project => project.featured));

// Increment and decrement functions for featured projects
const incrementFeaturedProject = () => {
  featuredProjectIndex.value = (featuredProjectIndex.value + 1) % featuredProjects.value.length;
};

const decrementFeaturedProject = () => {
  featuredProjectIndex.value = (featuredProjectIndex.value - 1 + featuredProjects.value.length) % featuredProjects.value.length;
};
</script>

<template>
  <div class="panel featuredPanel">
    <div>
      <div class="big title">Featured Projects</div>
      <div class="small subtitle">Explore our highlighted work showcasing our expertise and creativity.</div>
    </div>

    <div class="featuredContainer">
      <transition name="fade" mode="out-in">
        <div class="featuredProject" :key="featuredProjectIndex">
          <div class="projectImageCol image"
               :style="{ backgroundImage: `url(${featuredProjects[featuredProjectIndex].image})` }">
          </div>
          <div class="projectInfoCol">
            <div class="med">{{ featuredProjects[featuredProjectIndex].name }}</div>
            <div class="tag">&nbsp;{{ featuredProjects[featuredProjectIndex].type }}&nbsp;</div>
            <div class="small content">{{ featuredProjects[featuredProjectIndex].description }}</div>
            <div class="navigationRow">
              <div class="button">VIEW PROJECT</div>
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
        </div>
      </transition>
    </div>
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

.featuredContainer {
  margin-top: 2rem;
}

.featuredProject {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  height: 500px;
}

.projectImageCol {
  background-position: center;
  background-size: cover;
}

.projectInfoCol {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid black;
}

.content {
  margin: 2rem 0;
}

.navigationRow {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid black;
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
