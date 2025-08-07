<script setup lang="ts">
import DoubleImage from '../components/DoubleImage.vue';
import TestimonialCard from '@/components/cards/TestimonialCard.vue';
import { ref } from 'vue';

// Sample testimonial data
const testimonials = [
  {
    title: "CLIENT",
    desc: "Zach Stormant, 28, Founder of Stormant Designs, LLC."
  },
  {
    title: "STARTING POINT",
    desc: "\"We were looking for a partner who could help us transform our digital presence and create a more engaging user experience for our customers.\""
  },
  {
    title: "IMPACT",
    desc: "\"The new website has significantly improved our online presence, resulting in a 40% increase in user engagement and a 25% increase in conversion rates.\""
  },
  {
    title: "TESTIMONY",
    desc: "\"Working with Apotome Labs was a great experience. Their team was professional, responsive, and delivered exactly what we needed on time and within budget.\""
  }
];

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
      <div class="small subtitle">We are happy to share the reviews from our clients.</div>
    </div>
    <div class="grid">
      <div class="content">

        <div v-for="item in testimonials" class="testimonyCard">
          <div class="med top">{{item.title}}</div>
          <div class="small">{{item.desc}}</div>
        </div>

<!--        <TestimonialCard-->
<!--          v-for="testimonial in testimonials"-->
<!--          :key="testimonial.title"-->
<!--          :title="testimonial.title"-->
<!--          :desc="testimonial.desc"-->
<!--          :is-active="activeTestimonialTitle === testimonial.title"-->
<!--          @toggle="handleToggle"-->
<!--        />-->


      </div>
      <div class="imgBig">
        <DoubleImage image="/public/projects/stormant.png" />
      </div>
      <div class="image imgSmall1"/>
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
  background-image: url('/public/clients/zach.jpg');
  filter: grayscale(100%);
  background-position: 50% 30%;
  grid-row: 1;
  grid-column: 3;
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
  grid-column: 1 / 3;
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

</style>
