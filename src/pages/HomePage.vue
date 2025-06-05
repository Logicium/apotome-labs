<script setup lang="ts">
import HeroPanel from "@/panels/HeroPanel.vue";
import ServicesPanel from "@/panels/ServicesPanel.vue";
import ProjectsPanel from "@/panels/ProjectsPanel.vue";
import ReviewsPanel from "@/panels/ReviewsPanel.vue";
import PricingPanel from "@/panels/PricingPanel.vue";
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";

</script>

<template>
  <div>
    <SEO
      title="Apotome Labs | Web & App Development in Trinidad, CO"
      description="Apotome Labs is a digital agency in Trinidad, Colorado specializing in web development, mobile apps, UI/UX design, e-commerce, SEO, and AI solutions for local businesses."
      keywords="web development Trinidad CO, mobile app development, UI/UX design, e-commerce solutions, digital agency Trinidad Colorado, southern Colorado web developer"
    />
    <HeroPanel/>
    <ServicesPanel/>
    <ProjectsPanel/>
    <ReviewsPanel/>
    <PricingPanel/>
    <FooterPanel/>
  </div>

</template>

<style scoped>

</style>
