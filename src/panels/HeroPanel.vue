<script setup lang="ts">

import data from "../data/data.ts";
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
</script>

<template>
  <div class="panel">

    <div>
      <div class="big title">Your Local Partner in Web and App Development</div>
      <div class="infoRow">
        <div class="subtitle small">{{data.about2}}</div>
        <div class="buttons">
          <div class="button">View Projects</div>
          <div class="button cta">Get Started <ArrowIcon/></div>
        </div>
      </div>
    </div>

    <div class="imageRow">
      <div class="image"></div>
    </div>

    <div class="aboutWrap">
      <div class="aboutRow">
        <div class="cards">

          <div class="card">
            <div class="big num">20+</div>
            <div>PROJECTS COMPLETED</div>
          </div>

          <div class="card">
            <div class="big num">5+</div>
            <div>CLIENTS</div>
          </div>

          <div class="card">
            <div class="big num">7+</div>
            <div>YEARS OF EXPERIENCE</div>
          </div>

        </div>
        <div class="about small">
          {{data.about3}}
        </div>
      </div>



    </div>


  </div>
</template>

<style scoped>

.panel{
  padding-top: 100px;
  height: calc(100vh - 100px - 2rem);
  grid-template-rows: auto 2fr 1fr;
  display: grid;
  grid-gap: 2rem;
}

.title{
  margin-bottom: 2rem;
  width: 70%;
}
.subtitle{
  width: 50%;
}

.image{
  width: 100%;
  height: 100%;
  background-image: url("/public/agency/agency1.jpg");
}

.infoRow{
  display: flex;
  justify-content: space-between;
}

.aboutRow{
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 2rem;
}


.buttons{
  display: flex;
  gap: 2rem;
  white-space: break-spaces;
}

.cards{
  display: flex;
  justify-content: space-between;
}

.card{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}

.num{
  color: #a8a8a8;
}


</style>
