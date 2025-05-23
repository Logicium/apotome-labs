<script setup lang="ts">

import data from "../data/data.ts";
import PlusIcon from "@/assets/icons/PlusIcon.vue";
</script>

<template>
<div class="panel">
  <div>
    <div class="big title">Digital Agency Services</div>
    <div class="small subtitle">{{data.services.intro}}</div>
  </div>

  <div class="serviceGrid">

    <div class="services">

      <div class="service">
        <div class="small num">01</div>
        <div class="med">USER INTERFACE DESIGN</div>
        <div class="control big">+</div>
      </div>

      <div class="service">
        <div class="small num">02</div>
        <div class="med">WEB & MOBILE APP DEVELOPMENT</div>
        <div class="control big">+</div>
      </div>

      <div class="service">
        <div class="small num">03</div>
        <div class="med">ECOMMERCE SOLUTIONS</div>
        <div class="control big">+</div>
      </div>

      <div class="service">
        <div class="small num">04</div>
        <div class="med">SEARCH ENGINE OPTIMIZATION</div>
        <div class="control big">+</div>
      </div>

      <div class="service">
        <div class="small num">05</div>
        <div class="med">DIGITAL MARKETING</div>
        <div class="control big">+</div>
      </div>

      <div class="service">
        <div class="small num">06</div>
        <div class="med">ARTIFICIAL INTELLIGENCE</div>
        <div class="control big">+</div>
      </div>



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

.service{
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid black;
}

.serviceImage{
  background-image: url("/agency/agency2.jpg");
}

.control{
  margin-left: auto;
  line-height: 1.5rem;
  font-weight: 200;
  cursor: pointer;
}

.num{
  color: #a8a8a8;
}

</style>
