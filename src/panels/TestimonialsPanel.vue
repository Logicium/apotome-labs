<script setup lang="ts">
import DoubleImage from '../components/DoubleImage.vue';
import TestimonialCard from '@/components/cards/TestimonialCard.vue';
import {computed, ref} from 'vue';
import data from "@/data/data.ts";

const testimonialIndex = ref(0);

const testimonialData = ref(data.testimonials.list);

const clientImageUrl = computed(()=> testimonialData.value[testimonialIndex.value].clientImage);
const projectImageUrl = computed(()=> testimonialData.value[testimonialIndex.value].projectImage);

const incrementTestimonials = () => {
  testimonialIndex.value = (testimonialIndex.value + 1) % data.testimonials.list.length;
}

const decrementTestimonials = () => {
  testimonialIndex.value = (testimonialIndex.value - 1 + data.testimonials.list.length) % data.testimonials.list.length;
}

// Track which testimonial card is currently active
const activeTestimonialTitle = ref(null);

// Function to handle toggle events from TestimonialCard components
const handleToggle = (testimonialTitle) => {
  // If the clicked card is already active, deactivate it
  if (activeTestimonialTitle.value === testimonialTitle) {
    activeTestimonialTitle.value = null;
  } else {
    // Otherwise, make the clicked card active
    activeTestimonialTitle.value = testimonialTitle;
  }
};
</script>

<template>
  <div class="panel">
    <div>
      <div class="big title">Hear From Our Clients</div>
      <div class="small subtitle">{{data.testimonials.intro}}</div>
    </div>
    <div class="grid">

      <transition name="fade">
      <div class="content" :key="testimonialIndex">
        <div class="testimonyCard">
          <div class="med top">CLIENT</div>
          <div class="small">{{testimonialData[testimonialIndex].client}}</div>
        </div>

        <div class="testimonyCard">
          <div class="med top">IMPACT</div>
          <div class="small">"{{testimonialData[testimonialIndex].impact}}"</div>
        </div>

        <div class="testimonyCard">
          <div class="med top">STARTING POINT</div>
          <div class="small">"{{testimonialData[testimonialIndex].startingPoint}}"</div>
        </div>

        <div class="testimonyCard">
          <div class="med top">TESTIMONY</div>
          <div class="small">"{{testimonialData[testimonialIndex].testimony}}"</div>
        </div>
      </div>
      </transition>
      <div class="imgBig">
          <DoubleImage :key="testimonialIndex" :image="projectImageUrl" />
      </div>
      <transition name="fade">
        <div class="image imgSmall1" :key="testimonialIndex" :style="{backgroundImage: `url(${clientImageUrl})`}"/>
      </transition>

      <div class="buttons flex">
        <div class="button" @click="decrementTestimonials">
          <
        </div>
        <div class="button" @click="incrementTestimonials">
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.panel{
  padding-top: 100px;
  display: grid;
  grid-template-rows: auto 1fr;
}

.grid{
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
}

.testimonyCard{
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
}

.top{
  margin-bottom: 1rem;
}

.content{
  grid-row: 2;
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  height: fit-content;
}

.image {
  background-size: cover;
  background-position: center;
}

.imgSmall1{
  grid-row: 1;
  grid-column: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  filter: grayscale(100%);
}

.clientImg {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  filter: grayscale(100%);
}
.imgSmall2{
  background-image: url('/public/projects/stormant2.png');
  border: 1px solid black;
}
.imgSmall3{
  background-image: url('/public/projects/stormant3.png');
  border: 1px solid black;
}

.imgBig{
  grid-row: 1 / 2;
  grid-column: 1/3;
  position: relative;
  height: 100%;
}

.buttons{
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

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
