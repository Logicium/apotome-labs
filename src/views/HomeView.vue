<script setup lang="ts">

import data from "../data/data";
</script>

<template>
  <div class="home">
    <div class="title">
      <div class="titleText">{{`apotome labs /`.toUpperCase()}}</div>
    </div>
    <div class="subtitle">{{data.about1.toLowerCase()}}</div>
    <div class="imagegrid">
      <div class="titleImage1">
        <div class="reverse">004+</div>
        <div class="imageText">PROJECTS</div>
      </div>
      <div class="titleImage2">
        <div class="reverse">est.24'</div>
        <div class="imageText">ABOUT</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.imageText{
  margin-top: auto;
  margin-left: auto;
  font-weight: 500;
}

@keyframes expand-big {
  from{
    height: 33%;
    opacity: 0;
  }
  to{
    height: 77%;
    opacity: 1;
  }
}

@keyframes expand-small {
  from{
    height: 77%;
    opacity: 0;
  }
  to{
    height: 33%;
    opacity: 1;
  }
}

  .imagegrid{
    height: 100%;
    margin-left: auto;
    width: 25%;
    display: flex;
    flex-direction: column;
  }

  .titleImage1{
    cursor: pointer;
    display: flex;
    margin-top: 4rem;
    width: 100%;
    height: 33%;
    background-position: 100% 100%;
    background-size: cover;
    background-image: url("../../public/home12.jpg");
    animation: expand-big ease-in-out 1.5s forwards;

  }
  .titleImage2{
    cursor: pointer;
    display: flex;
    margin-top: 2rem;
    height: 77%;
    width: 100%;
    background-position: 100% 100%;
    background-size: cover;
    background-image: url("../../public/home15.jpg");
    animation: expand-small ease-in-out 1.5s forwards;
  }

  .reverse{
    background-color: black;
    color: #f1f1f1;
    height: 2rem;
  }

  .home{
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 2rem;
  }

  .title{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 50%;
  }

  .titleText{
    margin-top: 3rem;
    font-size: 8rem;
    line-height: 8rem;

  }

  .subtitle{
    width: 33%;
    margin-top: auto;
    font-size: 1.3rem;
  }


</style>
