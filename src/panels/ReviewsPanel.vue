<script setup lang="ts">

import data from "../data/data.ts";
import {computed, reactive, ref} from "vue";
import LeftIcon from "@/assets/icons/LeftIcon.vue";
import RightIcon from "@/assets/icons/RightIcon.vue";

const reviewIndex = ref(0);

const reviewData = ref(data.reviews.list);

const imageUrl = computed(()=> reviewData.value[reviewIndex.value].image);

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
        <transition name="fade" mode="out-in">
          <div class="med quote" :key="reviewIndex">"{{data.reviews.list[reviewIndex].quote}}"</div>
        </transition>
        <div>
          <transition name="fade" mode="out-in">
            <div class="small content" :key="reviewIndex">"{{data.reviews.list[reviewIndex].content}}"</div>
          </transition>
          <div class="reviewerRow">
            <transition name="fade" mode="out-in">
              <img class="reviewerImage image" :key="reviewIndex" :src="imageUrl" alt="Reviewer" />
            </transition>
            <transition name="fade" mode="out-in">
              <div class="reviewerInfo" :key="reviewIndex">
                <div class="">{{data.reviews.list[reviewIndex].name.toUpperCase()}}</div>
                <div class="gray">{{data.reviews.list[reviewIndex].company.toUpperCase()}}</div>
              </div>
            </transition>
            <div class="buttons flex">
              <div class="button" @click="decrementReviews">
                <
              </div>
              <div class="button" @click="incrementReviews">
                >
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

.reviewerRow{
  display: flex;
  padding-top: 1rem;
  border-top: 1px solid black;
}

.reviewerImage{
  width: 150px;
  min-width: 150px;
  height: 150px;
  margin-right: 1rem;
  background-color: #a8a8a8;
  object-fit: cover;
  filter: grayscale(1);
}

.buttons{
  padding-left: 1rem;
  margin-left: auto;
  gap: 1rem;
  font-weight: 200;
  font-size: 1.8rem;
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
