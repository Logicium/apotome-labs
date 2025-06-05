<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

interface Props {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Apotome Labs | Web & App Development in Trinidad, CO',
  description: 'Apotome Labs is a digital agency in Trinidad, Colorado specializing in web development, mobile apps, UI/UX design, e-commerce, SEO, and AI solutions.',
  keywords: 'web development, mobile app development, UI/UX design, e-commerce solutions, Trinidad CO, southern Colorado',
  ogTitle: 'Apotome Labs | Web & App Development in Trinidad, CO',
  ogDescription: 'Apotome Labs is a digital agency in Trinidad, Colorado specializing in web development, mobile apps, UI/UX design, e-commerce, SEO, and AI solutions.',
  ogImage: '/agency/agency1.jpg',
  ogUrl: 'https://apotomelabs.com'
})

const metaTitle = computed(() => `${props.title}`)

useHead({
  title: metaTitle,
  meta: [
    { name: 'description', content: props.description },
    { name: 'keywords', content: props.keywords },
    { property: 'og:title', content: props.ogTitle },
    { property: 'og:description', content: props.ogDescription },
    { property: 'og:image', content: props.ogImage },
    { property: 'og:url', content: props.ogUrl },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.ogTitle },
    { name: 'twitter:description', content: props.ogDescription },
    { name: 'twitter:image', content: props.ogImage },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

<template>
  <!-- This component doesn't render anything -->
</template>
