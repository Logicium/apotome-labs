<script setup lang="ts">
import { ref, computed } from 'vue';
import data from "@/data/data.ts";

// Enhanced testimonials data with case study details
const caseStudyTestimonials = [
  {
    id: "01",
    name: "Zach Stormant",
    company: "Stormant Designs",
    location: "Trinidad, CO",
    projectType: "Website & Booking System",
    duration: "3 Months",
    image: "/clients/zach.jpg",
    quote: "They transformed our online presence completely, taking us from an outdated website to a modern digital platform that our customers love.",
    testimonial: "Apotome Labs delivered beyond our expectations. Their team was professional, responsive, and brought creative solutions to every challenge. The new website has significantly improved our customer engagement and sales. What impressed me most was their attention to detail and willingness to go above and beyond.",
    results: [
      "300% increase in online bookings",
      "Reduced customer inquiry response time",
      "Streamlined business operations",
      "Modern, professional brand presence"
    ]
  },
  {
    id: "02",
    name: "Tom Murphy",
    company: "Eternal Float Spa & Wellness Center",
    location: "Southern Colorado",
    projectType: "E-commerce & Digital Strategy",
    duration: "4 Months",
    image: "/clients/tom.jpg",
    quote: "Outstanding technical expertise and customer service - their team went above and beyond to understand our unique needs and deliver exactly what we wanted.",
    testimonial: "Working with Apotome Labs was a game-changer for our startup. They not only built us a beautiful website but also provided valuable insights into digital strategy. Their attention to detail and commitment to quality is exceptional. The ongoing support has been invaluable.",
    results: [
      "Launch of comprehensive wellness platform",
      "Integrated booking and payment system",
      "Enhanced customer experience design",
      "Strategic digital marketing foundation"
    ]
  },
  {
    id: "03",
    name: "Margaret Hunt",
    company: "Margaret Hunt Gallery",
    location: "Trinidad, CO",
    projectType: "Art Gallery Website",
    duration: "2 Months",
    image: "/clients/hunt.jpg",
    quote: "The best decision we made for our business! Their expertise and dedication to quality helped us achieve results we didn't think were possible.",
    testimonial: "From the initial consultation to the final launch, Apotome Labs demonstrated exceptional professionalism. They understood our vision perfectly and created a website that perfectly represents our brand. The ongoing support has been invaluable, and the results speak for themselves.",
    results: [
      "Sophisticated digital gallery showcase",
      "Improved artwork presentation online",
      "Streamlined client communication",
      "Professional brand elevation"
    ]
  }
];

const currentTestimonialIndex = ref(0);

const currentTestimonial = computed(() => caseStudyTestimonials[currentTestimonialIndex.value]);

const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % caseStudyTestimonials.length;
};

const previousTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value - 1 + caseStudyTestimonials.length) % caseStudyTestimonials.length;
};

const goToTestimonial = (index) => {
  currentTestimonialIndex.value = index;
};
</script>

<template>
  <div class="panel">
    <div class="testimonialHeader">
      <div class="big title">Client Success Stories</div>
      <div class="small subtitle">Real projects, real results, real testimonials from businesses we've helped transform their digital presence in Trinidad and southern Colorado.</div>
    </div>

    <div class="caseStudyContainer">
      <!-- Navigation Dots -->
      <div class="testimonialNav">
        <div class="navDots">
          <div
            v-for="(testimonial, index) in caseStudyTestimonials"
            :key="testimonial.id"
            class="navDot"
            :class="{ 'active': index === currentTestimonialIndex }"
            @click="goToTestimonial(index)"
          >
            {{ testimonial.id }}
          </div>
        </div>

        <div class="navControls">
          <div class="button navButton" @click="previousTestimonial">
            <
          </div>
          <div class="button navButton" @click="nextTestimonial">
            >
          </div>
        </div>
      </div>

      <!-- Case Study Content -->
      <transition name="fade" mode="out-in">
        <div class="caseStudyContent" :key="currentTestimonialIndex">
          <div class="caseStudyGrid">
            <!-- Left Column: Client Info & Quote -->
            <div class="clientColumn">
              <div class="clientHeader">
                <img
                  class="clientImage"
                  :src="currentTestimonial.image"
                  :alt="currentTestimonial.name"
                />
                <div class="clientInfo">
                  <div class="clientName">{{ currentTestimonial.name.toUpperCase() }}</div>
                  <div class="clientCompany gray">{{ currentTestimonial.company.toUpperCase() }}</div>
                  <div class="clientLocation small gray">{{ currentTestimonial.location }}</div>
                </div>
              </div>

              <div class="projectDetails">
                <div class="projectDetail">
                  <div class="detailLabel small">PROJECT TYPE</div>
                  <div class="detailValue">{{ currentTestimonial.projectType }}</div>
                </div>
                <div class="projectDetail">
                  <div class="detailLabel small">DURATION</div>
                  <div class="detailValue">{{ currentTestimonial.duration }}</div>
                </div>
              </div>

              <div class="mainQuote">
                <div class="big quoteText">"{{ currentTestimonial.quote }}"</div>
              </div>
            </div>

            <!-- Right Column: Testimonial & Results -->
            <div class="contentColumn">
              <div class="testimonialText">
                <div class="med sectionTitle">The Experience</div>
                <div class="testimonialContent">{{ currentTestimonial.testimonial }}</div>
              </div>

              <div class="resultsSection">
                <div class="med sectionTitle">Key Results</div>
                <div class="resultsList">
                  <div
                    v-for="result in currentTestimonial.results"
                    :key="result"
                    class="resultItem small"
                  >
                    <div class="resultDot"></div>
                    {{ result }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  padding-top: 100px;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 3rem;
}

.testimonialHeader {
  .title {
    width: 70%;
    margin-bottom: 1rem;
  }

  .subtitle {
    width: 60%;
  }
}

.caseStudyContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 600px;
}

.testimonialNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.navDots {
  display: flex;
  gap: 1rem;
}

.navDot {
  width: 3rem;
  height: 3rem;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: black;
    color: white;
  }

  &.active {
    background-color: black;
    color: white;
  }
}

.navControls {
  display: flex;
  gap: 1rem;
}

.navButton {
  cursor: pointer;
  width: 45px;
  padding: 0;
  font-weight: 200;
  font-size: 1.8rem;
  transition: 0.5s;

  &:hover {
    background-color: black;
    color: white;
  }
}

.caseStudyContent {
  flex: 1;
}

.caseStudyGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  height: 100%;
}

.clientColumn {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.clientHeader {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.clientImage {
  width: 80px;
  height: 80px;
  object-fit: cover;
  filter: grayscale(100%);
  flex-shrink: 0;
}

.clientInfo {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.clientName {
  font-weight: 500;
  font-size: 1.1rem;
}

.clientCompany {
  font-size: 0.9rem;
}

.clientLocation {
  font-size: 0.8rem;
}

.projectDetails {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.projectDetail {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.detailLabel {
  color: #666;
  font-weight: 500;
}

.detailValue {
  font-weight: 500;
  text-align: right;
}

.mainQuote {
  margin-top: auto;
}

.quoteText {
  line-height: 1.3;
  font-style: italic;
  color: #333;
}

.contentColumn {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.sectionTitle {
  margin-bottom: 1rem;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
}

.testimonialText {
  .testimonialContent {
    line-height: 1.6;
    color: #444;
  }
}

.resultsSection {
  margin-top: auto;
}

.resultsList {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resultItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #555;
}

.resultDot {
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
  flex-shrink: 0;
}

// Fade transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

// Mobile responsiveness
@media (max-width: 768px) {
  .panel {
    gap: 2rem;
  }

  .testimonialHeader {
    .title {
      width: 100%;
      font-size: 2.5rem !important;
      line-height: 2.5rem !important;
    }

    .subtitle {
      width: 100%;
    }
  }

  .testimonialNav {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .navDots {
    justify-content: center;
  }

  .navControls {
    justify-content: center;
  }

  .caseStudyGrid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .clientHeader {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .projectDetails {
    .projectDetail {
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }

    .detailValue {
      text-align: center;
    }
  }

  .mainQuote {
    margin-top: 0;
    text-align: center;

    .quoteText {
      font-size: 1.3rem !important;
      line-height: 1.4 !important;
    }
  }
}
</style>
