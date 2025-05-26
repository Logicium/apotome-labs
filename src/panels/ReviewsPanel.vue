<script setup lang="ts">

import data from "../data/data.ts";
import {ref} from "vue";
import LeftIcon from "@/assets/icons/LeftIcon.vue";
import RightIcon from "@/assets/icons/RightIcon.vue";

const reviewIndex = ref(0);

const incrementReviews = () => {
  reviewIndex.value = (reviewIndex.value + 1) % data.reviews.list.length;
}

const decrementReviews = () => {
  reviewIndex.value = (reviewIndex.value - 1 + data.reviews.list.length) % data.reviews.list.length;
}

</script>

<template>

  <div class="panel">
    <div>
      <div class="big title">Our Success Stories</div>
      <div class="small subtitle">{{data.reviews.intro}}</div>
    </div>
    <div class="grid">
      <div class="infoCol">
        <div class="med quote">"{{data.reviews.list[reviewIndex].quote}}"</div>
        <div>
          <div class="small content">"{{data.reviews.list[reviewIndex].content}}"</div>
          <div class="reviewerRow">
            <div class="reviewerImage image">

            </div>
            <div class="reviewerInfo">
              <div class="">{{data.reviews.list[reviewIndex].name.toUpperCase()}}</div>
              <div class="gray">{{data.reviews.list[reviewIndex].company.toUpperCase()}}</div>
            </div>
            <div class="buttons flex med">
              <div class="button" @click="decrementReviews">
                <LeftIcon/>
              </div>
              <div class="button" @click="incrementReviews">
                <RightIcon/>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="imageCol image">

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
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 2rem;
}

.imageCol{
  height: 100%;
  background-image: url("/agency/agency3.jpg");
}

.infoCol{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.quote,.content{
  margin-bottom: 1rem;
}

.content{
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
}

.reviewerRow{
  display: flex;
}

.reviewerImage{
  width: 150px;
  height: 150px;
  margin-right: 1rem;
  background-color: #a8a8a8;
  background-image: url("/clients/zach.jpg");
  filter: grayscale(1);
}

.buttons{
  margin-left: auto;
  gap: 1rem;
}

.button{
  cursor: pointer;
  width: 45px;
  padding: 0;
  transition: 0.5s;
}

.button:hover{
  background-color: black;
  color: white;
  transition: 0.5s;
}


</style>
