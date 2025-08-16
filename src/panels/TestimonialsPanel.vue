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

      <!-- Desktop client image -->
      <transition name="fade">
        <div class="image imgSmall1" :key="testimonialIndex" :style="{backgroundImage: `url(${clientImageUrl})`}"/>
      </transition>

      <!-- Desktop controls -->
      <div class="buttons flex">
        <div class="button" @click="decrementTestimonials">
          <
        </div>
        <div class="button" @click="incrementTestimonials">
          >
        </div>
      </div>

      <!-- Client image and controls row for mobile only -->
      <div class="clientControlsRow">
        <transition name="fade">
          <div class="image imgSmall1Mobile" :key="testimonialIndex" :style="{backgroundImage: `url(${clientImageUrl})`}"/>
        </transition>

        <div class="buttons flex mobileButtons">
          <div class="button" @click="decrementTestimonials">
            <
          </div>
          <div class="button" @click="incrementTestimonials">
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

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

.clientControlsRow {
  display: none; // Hidden on desktop
}

.imgSmall1Mobile {
  display: none; // Hidden on desktop
}

.mobileButtons {
  display: none; // Hidden on desktop
}

/* Mobile Styles */
@media (max-width: 768px) {
  .panel{
    height: fit-content;
  }

  .title {
    width: 100% !important;
    font-size: 2.5rem !important;
    line-height: 2.5rem !important;
  }

  .subtitle {
    width: 100% !important;
  }

  .grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
  }

  // Hide desktop elements on mobile
  .imgSmall1 {
    display: none !important;
  }

  .buttons:not(.mobileButtons) {
    display: none !important;
  }

  // Show mobile elements
  .clientControlsRow {
    display: flex !important;
  }

  .imgSmall1Mobile {
    display: block !important;
  }

  .mobileButtons {
    display: flex !important;
  }

  // Mobile layout: Image first, then client controls row, then content
  .imgBig {
    order: 1;
    height: 250px;
    width: 100%;
  }

  // Client image and controls row
  .clientControlsRow {
    order: 2;
    gap: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;
  }

  .imgSmall1Mobile {
    height: 200px;
    width: 200px;
    flex-shrink: 0;
    overflow: hidden;
    border: 1px solid #e0e0e0;
    background-size: cover;
    background-position: center;
    filter: grayscale(100%);
  }

  .mobileButtons {
    gap: 1rem;
    flex: 1;
  }

  .content {
    order: 3;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }

  .testimonyCard {
    padding: 1rem 0;
    border-bottom: 1px solid #e0e0e0;
  }

  .top {
    margin-bottom: 0.5rem;
    font-size: 0.9rem !important;
    color: #666;
  }

  .button {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* Small phone adjustments */
@media (max-width: 480px) {
  .title {
    font-size: 2rem !important;
    line-height: 2rem !important;
  }

  .imgBig {
    height: 200px;
  }

  .clientControlsRow {
    gap: 1rem;
    padding-bottom: 1rem;
  }

  .imgSmall1Mobile {
    width: 150px;
    height: 150px;
  }

  .testimonyCard {
    padding: 0.75rem 0;
  }

  .content {
    gap: 1rem;
  }

  .button {
    width: 45px;
    height: 45px;
  }
}

</style>
