<script setup lang="ts">
import data from "@/data/data.ts";
import SEO from "@/components/SEO.vue";
</script>

<template>
  <div class="wrap">
    <SEO
      title="About Us | Apotome Labs | Digital Agency in Trinidad, CO"
      description="Learn about Apotome Labs, a leading digital agency in Trinidad, Colorado with 7+ years of experience in web development, app design, and digital marketing solutions."
      keywords="digital agency Trinidad CO, web development company, about Apotome Labs, experienced web designers Trinidad, southern Colorado digital experts"
    />
    <div class="titleWrap">
      <div class="title">ABOUT</div>
      <div class="subtitle">{{data.about.intro}}</div>
    </div>
  </div>
</template>

<style scoped>

.wrap{
  padding: 2rem;
  padding-top: 10vh;
  height: calc(90vh - 2rem);
}

.titleWrap{
  display: flex;
  border-bottom: solid black 1px;
}

.title{
  font-size: 7rem;
  line-height: 7rem;
}

.subtitle{
  margin-top: auto;
  margin-left: auto;
  font-size: 1.2rem;
  width: 33%;
  text-align: right;
}


</style>
