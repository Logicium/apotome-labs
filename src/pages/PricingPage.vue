<script setup lang="ts">
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";
import MaintenancePanel from "@/panels/MaintenancePanel.vue";
import PricingFullPanel from "@/panels/PricingFullPanel.vue";
</script>

<template>
  <div>
    <SEO
      title="Pricing & Packages | Web Development Services | Apotome Labs"
      description="Explore our affordable web development, app design, and digital marketing packages. Apotome Labs offers transparent pricing for businesses in Trinidad, CO and beyond."
      keywords="web development pricing, app design packages, affordable website design Trinidad CO, web services cost, digital marketing packages southern Colorado"
    />
    <PricingFullPanel />
    <MaintenancePanel />
    <FooterPanel/>
  </div>
</template>

<style scoped>
/* All styles have been moved to their respective panel components */
</style>
