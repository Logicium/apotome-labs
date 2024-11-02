<script setup lang="ts">
import data from "@/data/data.ts";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <div class="wrap">
    <div class="titleWrap">
      <div class="title">PROJECTS</div>
      <div class="subtitle">{{data.projects.intro}}</div>
    </div>
    <div class="imageGrid">

      <div class="col">
        <div class="image1">
          <div class="reverse"> 01 </div>
          <div class="imageText"> PORTFOLIO / KISORA </div>
        </div>
        <div class="image2">
          <div class="reverse"> 02 </div>
          <div class="imageText"> WEBSITE / FLORA </div>
        </div>
      </div>
      <div class="col">

      </div>
      <div class="col">
        <div class="image4">
          <div class="reverse"> 03 </div>
          <div class="imageText"> APP / PLANTAE </div>
        </div>
        <div class="image5">
          <div class="reverse"> 04 </div>
          <div class="imageText"> WEBSITE / FLORACIA </div>
        </div>
      </div>

      <div class="col3">
        <div class="image3">
          <div class="reverse"> 05 </div>
          <div class="imageText"> AI / FUERA </div>
        </div>
      </div>
    </div>
  </div>
<!--  <Footer/>-->
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

.imageGrid{
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding-bottom: 2rem;
}

.col{
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-right: 2rem;
}

.col2{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 2rem;
}

.col3{
  display: flex;
  flex-direction: column;
  width: 25%;
}

.image1,.image2,.image3,.image4,.image5{
  background-position: 100% 100%;
  background-size: cover;
  background-image: url("../../public/home13.jpg");
  border: solid black 1px;
  display: flex;
  cursor: pointer;
}

.image1{
  height: calc(40%);
}

.image2{
  height: 20%;
  margin-top: 2rem;
}

.image3{
  height: calc(100%);
}

.image4{
  height: 20%;
}
.image5{
  height: 60%;
  margin-top: 2rem;
}

.imageText {
  margin-top: auto;
  margin-left: auto;
  font-weight: 500;
  white-space: break-spaces;
}

</style>
