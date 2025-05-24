<script setup lang="ts">

import data from "../data/data.ts";
import PlusIcon from "@/assets/icons/PlusIcon.vue";
import ServiceCard from "@/components/cards/ServiceCard.vue";
</script>

<template>
<div class="panel">
  <div>
    <div class="big title">Digital Agency Services</div>
    <div class="small subtitle">{{data.services.intro}}</div>
  </div>

  <div class="serviceGrid">

    <div class="services">
      <ServiceCard
        v-for="service in data.services.list"
        :key="service.number"
        :number="service.number"
        :name="service.name"
        :desc="service.desc"
        :tags="service.tags"
      />
    </div>

    <div class="image serviceImage">

    </div>

  </div>


</div>
</template>

<style scoped>

.panel{
  display: grid;
  grid-template-rows: auto 1fr;
}

.serviceGrid{
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

.services{
  display: flex;
  flex-direction: column;
}

.serviceImage{
  background-image: url("/agency/agency2.jpg");
}

</style>
