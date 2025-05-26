<script setup lang="ts">

import data from "../data/data.ts";
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">Our Recent Work</div>
      <div class="small subtitle">{{data.projects.intro}}</div>
    </div>

    <div class="grid">
      <div class="imageWrap">
        <div class="projectCard">
          <div class="projectImage image img1"></div>
          <div class="projectInfo">
            <div>
              <div class="med">BETA STUDIO</div>
              <div class="tag"> TEMPLATE </div>
            </div>

            <div>
              <div class="small">A full booking and rewards system built with Square payments.</div>
              <div class="button">VIEW PROJECT</div>
            </div>
          </div>
        </div>

        <div class="projectCard">
          <div class="projectImage image img3"></div>
          <div class="projectInfo">
            <div>
              <div class="med">STORMANT DESIGNS</div>
              <div class="tag"> WEBSITE </div>
            </div>
            <div>
              <div class="small">A full booking and rewards system built with Square payments.</div>
              <div class="button">VIEW PROJECT</div>
            </div>
          </div>
        </div>

        <div class="projectCard">
          <div class="projectImage image img4"></div>
          <div class="projectInfo">
            <div>
              <div class="med">FLORACIA</div>
              <div class="tag"> WEBSITE </div>
            </div>

            <div>
              <div class="small">A full booking and rewards system built with Square payments.</div>
              <div class="button">VIEW PROJECT</div>
            </div>
          </div>
        </div>

        <div class="projectCard">
          <div class="projectImage image img2"></div>
          <div class="projectInfo">
            <div>
              <div class="med">MARGARET HUNT GALLERY</div>
              <div class="tag"> WEBSITE </div>
            </div>
            <div>
              <div class="small">A full booking and rewards system built with Square payments.</div>
              <div class="button">VIEW PROJECT</div>
            </div>
          </div>
        </div>

      </div>



    </div>

  </div>
</template>

<style scoped>

.panel{
  display: grid;
  grid-template-rows: auto 1fr;
}

.grid{
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
  margin-top: 2rem;
}

.grid::-webkit-scrollbar {
  display: none;
}

.imageWrap{
  height: 100%;
  width: 100%;
  display: flex;
  gap: 2rem;
}

.projectCard{
  width: 40vw;
  display: grid;
  grid-template-rows: 1fr 1fr;
  position: relative;
}

.projectInfo{
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid black;
}

.image{
  background-position: 50% 0%;
  transition: 0.5s;
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
}

.button{
  margin-top: 1rem;
  width: fit-content;
}

.img1{
  background-image: url("/projects/beta.png");
}

.img2{
  background-image: url("/projects/margaret.png");
}

.img3{
  background-image: url("/projects/stormant.png");
}

.img4{
  background-image: url("/projects/floracia.png");
}

</style>
