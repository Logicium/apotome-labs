<script setup lang="ts">

import data from "../data/data.ts";
</script>

<template>
  <div class="panel">

    <div class="aboutRow">
      <div class="big title">{{data.about.intro}}</div>
      <div class="infoRow">
        <div class="small aboutInfo">{{data.about.story}}</div>
        <div class="tag"> ABOUT OUR MISSION </div>
      </div>
    </div>

    <div class="image img1"></div>
    <div class="image img2"></div>
    <div class="image img3"></div>
  </div>
</template>

<style scoped>

.panel{
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 50%;
  grid-gap: 2rem;
}

.tag{
  margin-top: 0;
}

.title{
  width: 70%;
}

.aboutInfo{
  width: 50%;
}

.infoRow{
  display: flex;
  justify-content: space-between;

}

.aboutRow{
  grid-column: span 3;
}

.story{
  margin-top: auto;
}

.img1{
  background-image: url("/agency/agency6.jpg");
}

.img2{
  background-image: url("/agency/agency8.jpg");
}

.img3{
  background-image: url("/agency/agency7.jpg");
}

@media (max-width: 768px) {
  .panel{
    min-height: fit-content;
    height: fit-content;
    grid-template-rows: auto 200px 1fr;
    grid-template-columns: 1fr 1fr;
  }

  .aboutRow{
    grid-column: span 2;
    height: fit-content;
  }

  .img1{
    display: none;
  }

  .infoRow{
    display: grid;
  }

  .aboutInfo{
    width: 100%;
  }

  .tag{
    grid-row:1;
    margin-bottom: 1rem;
  }

}

</style>
