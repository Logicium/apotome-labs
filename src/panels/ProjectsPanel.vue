<script setup lang="ts">
import data from "../data/data.ts";
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
import ProjectCard from "@/components/cards/ProjectCard.vue";

// Filter featured projects
const featuredProjects = data.projects.list.filter(project => project.featured);
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">Our Recent Work</div>
      <div class="small subtitle">{{data.projects.intro}}</div>
    </div>

    <div class="grid">
      <div class="imageWrap">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.name"
          :name="project.name"
          :type="project.type"
          :description="project.description"
          :image="project.image"
          :featured="project.featured"
        />
      </div>
    </div>

  </div>
</template>

<style scoped>

.panel{
  display: grid;
  grid-template-rows: auto 1fr;
  //width: calc(100vw - 2rem);
}

.grid{
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  margin-top: 2rem;
}

.grid::-webkit-scrollbar {
  display: none;
}

.imageWrap{
  height: 100%;
  width: 100%;
  display: flex;
  gap: 2rem;
}

@media (max-width: 768px) {

  .panel{
    min-height: fit-content;
    height: fit-content;
  }

  .title,.subtitle{
    width: 100%;
  }

}

</style>
