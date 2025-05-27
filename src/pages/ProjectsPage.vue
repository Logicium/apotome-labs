<script setup lang="ts">
import FeaturedProjectsPanel from "@/panels/FeaturedProjectsPanel.vue";
import ProjectsListPanel from "@/panels/ProjectsListPanel.vue";
import FooterPanel from "@/panels/FooterPanel.vue";
</script>

<template>
  <div>
    <FeaturedProjectsPanel />
    <ProjectsListPanel />
    <FooterPanel />
  </div>
</template>

<style scoped>
/* Styles moved to respective panel components */
</style>
