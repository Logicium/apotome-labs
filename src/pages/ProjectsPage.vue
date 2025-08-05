<script setup lang="ts">
import FeaturedProjectsPanel from "@/panels/FeaturedProjectsPanel.vue";
import ProjectsListPanel from "@/panels/ProjectsListPanel.vue";
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";
</script>

<template>
  <div>
    <SEO
      title="Our Projects | Apotome Labs | Web & App Development Trinidad CO"
      description="Explore our portfolio of web development, mobile app, and e-commerce projects. See how Apotome Labs has helped businesses in Trinidad, CO and southern Colorado succeed online."
      keywords="web development portfolio, mobile app projects, e-commerce websites Trinidad CO, web design examples, southern Colorado web projects"
    />
<!--    <FeaturedProjectsPanel />-->
    <ProjectsListPanel />
    <FooterPanel />
  </div>
</template>

<style scoped>
/* Styles moved to respective panel components */
</style>
