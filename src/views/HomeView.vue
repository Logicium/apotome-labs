<script setup lang="ts">

import data from "@/data/data.ts";
import Footer from "@/components/Footer.vue";
import router from "../router";

const dateObj = new Date(Date.now());
const date = " " + (dateObj.getMonth() + 1) + " / " + dateObj.getDate() + " "
const route = function (route:string){
  router.push(route);
}

</script>

<template>
  <div class="home">
    <div class="title">
      <div class="titleText">{{ `apotome labs`.toUpperCase() }}</div>
    </div>
    <div class="subtitle">{{ data.about1 }}</div>

    <div class="imagegrid">

      <div class="titleImage1" @click="route('/projects')">
        <div class="reverse"> 004+</div>
        <div class="imageText"> PROJECTS</div>
      </div>
      <div class="titleImage2" @click="route('/about')">
        <div class="reverse"> est.24'</div>
        <div class="imageText"> ABOUT</div>
      </div>
    </div>

  </div>

  <div class="section2">
    <div class="imagegrid2">
      <div class="titleImage3" @click="route('/pricing')">
        <div class="reverse"> $99 / mo </div>
        <div class="imageText"> PRICING</div>
      </div>
      <div class="titleImage4" @click="route('/contact')">
        <div class="reverse">{{date}}</div>
        <div class="imageText"> CONTACT</div>
      </div>
    </div>

    <div class="titleWrap">
      <div class="subtitle2">
        <p>{{ data.about4.split('.')[0] + ". " + data.about4.split('.')[1] }}.</p>
        <p class="margin-top">{{ data.about4.split('.')[2] + ". " + data.about4.split('.')[3] }}.</p>
        <!--        <p class="margin-top">{{data.about3}}</p>-->
      </div>
      <!--      <div class="subtitle3">{{data.about4}}</div>-->
      <div class="titleText2">{{ `Connect`.toUpperCase() }}</div>
    </div>
  </div>

  <Footer/>


</template>

<style scoped>

.titleWrap {
  display: flex;
  width: 75%;
  flex-direction: column;
}

.section2 {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-top: 4rem;
}

.imageText {
  margin-top: auto;
  margin-left: auto;
  font-weight: 500;
  white-space: break-spaces;
}

@keyframes expand-big {
  from {
    height: 33%;
    opacity: 0;
  }
  to {
    height: 77%;
    opacity: 1;
  }
}

@keyframes expand-small {
  from {
    height: 77%;
    opacity: 0;
  }
  to {
    height: 33%;
    opacity: 1;
  }
}

.imagegrid {
  height: 100%;
  margin-left: auto;
  width: 25%;
  display: flex;
  flex-direction: column;
}

.imagegrid2 {
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.titleImage1 {
  cursor: pointer;
  display: flex;
  margin-top: 4rem;
  width: 100%;
  height: 33%;
  background-position: 100% 100%;
  background-size: cover;
  background-image: url("../../public/abstract/home12.jpg");
  animation: expand-big ease-in-out 1.5s forwards;
  border: solid black 1px;

}

.titleImage2 {
  cursor: pointer;
  display: flex;
  margin-top: 2rem;
  height: 77%;
  width: 100%;
  background-position: 100% 100%;
  background-size: cover;
  background-image: url("../../public/abstract/home15.jpg");
  animation: expand-small ease-in-out 1.5s forwards;
  border: solid black 1px;
}

.titleImage3 {
  cursor: pointer;
  display: flex;
  margin-top: 2rem;
  height: 77%;
  width: 100%;
  background-position: 100% 100%;
  background-size: cover;
  background-image: url("../../public/abstract/home16.jpg");
  animation: expand-small ease-in-out 1.5s forwards;
  border: solid black 1px;
}

.titleImage4 {
  cursor: pointer;
  display: flex;
  margin-top: 2rem;
  height: 33%;
  width: 100%;
  background-position: 100% 100%;
  background-size: cover;
  background-image: url("../../public/abstract/home13.jpg");
  animation: expand-big ease-in-out 1.5s forwards;
  border: solid black 1px;

}

.titleImage5 {
  cursor: pointer;
  display: flex;
  margin-top: 2rem;
  height: 33%;
  width: 100%;
  background-position: 100% 100%;
  background-size: cover;
  background-image: url("../../public/abstract/home13.jpg");
}

.reverse {
  background-color: black;
  color: #f1f1f1;
  height: 2rem;
  white-space: break-spaces;
}

.home {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-top: 10vh;
}

.title {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 50%;
}

.title2 {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
}

.titleText {
  margin-top: 3rem;
  font-size: 8rem;
  line-height: 8rem;
}

.titleText2 {
  position: relative;
  margin-top: auto;
  font-size: 8rem;
  line-height: 8rem;
  margin-left: auto;

}

.subtitle {
  width: 33%;
  margin-top: auto;
  font-size: 1.2rem;
}

.subtitle2 {
  width: 45%;
  margin-top: 2rem;
  margin-left: auto;
  font-size: 1.2rem;
  text-align: right;
}

.margin-top {
  margin-top: 2rem;
}

.subtitle3 {
  width: 50%;
  margin-top: auto;
  margin-left: auto;
  font-size: 1.2rem;
  text-align: right;

}


</style>
