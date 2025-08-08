<script setup lang="ts">
import AllBlogsPanel from "@/panels/AllBlogsPanel.vue";
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";
import FeaturedBlogsPanel from "@/panels/FeaturedBlogsPanel.vue";
</script>

<template>
  <div>
    <SEO
      title="Blog | Web Development Insights | Apotome Labs Trinidad CO"
      description="Read the latest insights on web development, design trends, and digital marketing from Apotome Labs. Expert tips for businesses in Trinidad, Colorado and beyond."
      keywords="web development blog, design trends, digital marketing tips, Trinidad CO tech blog, web design insights, business technology"
    />
    <FeaturedBlogsPanel/>
    <AllBlogsPanel />
    <FooterPanel />
  </div>
</template>

<style scoped>

</style>
