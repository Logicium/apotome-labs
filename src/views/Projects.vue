<script setup lang="ts">
import data from "@/data/data.ts";
import Footer from "@/components/Footer.vue";
import router from "@/router";

const route = function (route:string){
  router.push(route);
}

</script>

<template>
  <div class="wrap">
    <div class="titleWrap">
      <div class="title">PROJECTS</div>
      <div class="subtitle">{{data.projects.intro}}</div>
    </div>
    <div class="imageGrid">

      <div class="col">
        <div class="image1" style="background-image: url('../../public/flora.png')">
          <a href="https://flora-a8fzk070t-kisorathomas-projects.vercel.app/" target="_blank"/>
          <div class="reverse"> 01 </div>
          <div class="imageText reverse"> E-STORE / FLORA </div>
        </div>
        <div class="image2">
          <a href="https://beta-ui-one.vercel.app/" target="_blank"/>
          <div class="reverse"> 02 </div>
          <div class="imageText reverse"> DESIGN / BETA  </div>
        </div>
      </div>
      <div class="col">

      </div>
      <div class="col">
        <div class="image5">
          <a href="https://gamma-ui-phi.vercel.app/" target="_blank"/>
          <div class="reverse"> 03 </div>
          <div class="imageText reverse"> DESIGN / GAMMA </div>
        </div>

      </div>

      <div class="col3">

        <div class="image3" style="background-image: url('../../public/floracia.png')">
          <a href="https://floracia.vercel.app/" target="_blank"/>
          <div class="reverse"> 04 </div>
          <div class="imageText reverse"> WEBSITE / FLORACIA </div>
        </div>
<!--        <div class="image3">-->
<!--          <div class="reverse"> 05 </div>-->
<!--          <div class="imageText"> AI / FUERA </div>-->
<!--        </div>-->

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
  position: relative;
  background-position: 100% 100%;
  background-size: cover;
  background-image: url("../../public/home13.jpg");
  border: solid black 1px;
  display: flex;
  cursor: pointer;
}

a{
position: absolute;
  height: 100%;
  width: 100%;
}

.image1{
  height: calc(40%);
}

.image2{
  height: 20%;
  margin-top: 2rem;
  background-image: url("../../public/beta.png");
}

.image3{
  height: calc(100%);
}

.image4{
  height: 20%;
  background-image: url("../../public/gamma.png");
}
.image5{
  height: 60%;
  //margin-top: 2rem;
  background-image: url("../../public/gamma.png");
}

.imageText {
  margin-top: auto;
  margin-left: auto;
  font-weight: 500;
  white-space: break-spaces;
}

</style>
