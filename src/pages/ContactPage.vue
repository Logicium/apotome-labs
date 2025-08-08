<script setup lang="ts">
import BookingPanel from "@/panels/BookingPanel.vue";
import FooterPanel from "@/panels/FooterPanel.vue";
import SEO from "@/components/SEO.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div>
    <SEO
      title="Contact Us | Book a Free Consultation | Apotome Labs Trinidad CO"
      description="Contact Apotome Labs in Trinidad, Colorado for a free consultation about your web development, app design, or digital marketing project. We're here to help your business grow online."
      keywords="contact web developer Trinidad CO, book consultation, web design quote, hire digital agency Trinidad, southern Colorado web services"
    />
    <BookingPanel/>
    <FooterPanel :nocta="true"/>
  </div>
</template>

<style scoped>

</style>
