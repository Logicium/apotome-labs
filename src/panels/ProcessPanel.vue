<script setup lang="ts">
import { ref, computed } from 'vue';

// Process stages focused on methodology
const processStages = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and unique challenges through comprehensive consultation and research.",
    details: [
      "Stakeholder interviews and goal alignment",
      "Market and competitor research",
      "Technical requirements assessment",
      "Timeline and budget planning"
    ],
    deliverable: "Project roadmap and strategy document"
  },
  {
    number: "02",
    title: "Strategy",
    description: "We develop a comprehensive digital strategy tailored to your brand, audience, and business objectives.",
    details: [
      "Information architecture design",
      "User journey mapping",
      "Technology stack selection",
      "Content strategy development"
    ],
    deliverable: "Technical specifications and wireframes"
  },
  {
    number: "03",
    title: "Design",
    description: "Our team creates beautiful, functional designs that reflect your brand identity and enhance user experience.",
    details: [
      "Brand identity and visual design",
      "User interface and experience design",
      "Interactive prototypes",
      "Design system creation"
    ],
    deliverable: "Complete design mockups and style guide"
  },
  {
    number: "04",
    title: "Development",
    description: "We build your digital solution using cutting-edge technology, ensuring performance, security, and scalability.",
    details: [
      "Frontend and backend development",
      "Database architecture and setup",
      "Third-party integrations",
      "Quality assurance testing"
    ],
    deliverable: "Fully functional digital platform"
  },
  {
    number: "05",
    title: "Launch",
    description: "We handle the complete launch process, ensuring a smooth transition and providing training for your team.",
    details: [
      "Production environment setup",
      "Performance optimization",
      "Team training and documentation",
      "Go-live support and monitoring"
    ],
    deliverable: "Live website and training materials"
  },
  {
    number: "06",
    title: "Support",
    description: "Our partnership continues with maintenance, updates, and continuous optimization of your digital presence.",
    details: [
      "Regular security and performance monitoring",
      "Content updates and feature enhancements",
      "Analytics reporting and optimization",
      "Technical support and consultation"
    ],
    deliverable: "Ongoing maintenance and growth strategies"
  }
];

const currentStageIndex = ref(0);

const currentStage = computed(() => processStages[currentStageIndex.value]);

const nextStage = () => {
  currentStageIndex.value = (currentStageIndex.value + 1) % processStages.length;
};

const previousStage = () => {
  currentStageIndex.value = (currentStageIndex.value - 1 + processStages.length) % processStages.length;
};

const goToStage = (index) => {
  currentStageIndex.value = index;
};
</script>

<template>
  <div class="panel">
    <div class="processHeader">
      <div class="big title">See How We Work</div>
      <div class="small subtitle">From concept to production, we follow a systematic approach that ensures every project delivers exceptional results and exceeds expectations.</div>
    </div>

    <div class="processGrid">
      <!-- Left Column: Progress and Navigation -->
      <div class="progressColumn">
        <!-- Progress Bar -->
        <div class="progressBar">
          <div
            class="progressFill"
            :style="{ width: ((currentStageIndex + 1) / processStages.length) * 100 + '%' }"
          ></div>
        </div>

        <!-- Stage Navigation -->
        <div class="stageNavigation">
          <div
            v-for="(stage, index) in processStages"
            :key="index"
            class="navItem"
            :class="{ 'active': index === currentStageIndex }"
            @click="goToStage(index)"
          >
            <span class="stageNumber">{{ stage.number }}</span>
            <span class="stageName">{{ stage.title }}</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Stage Information (spans 2 columns) -->
      <div class="infoColumn">
        <transition name="fade" mode="out-in">
          <div class="stageInfo" :key="currentStageIndex">
            <div class="stageHeader">
              <div class="med stageTitle">{{ currentStage.title }}</div>
              <div class="stageDescription small">{{ currentStage.description }}</div>
            </div>

            <div class="detailsSection">
              <div class="med sectionTitle">What We Do</div>
              <div class="detailsList">
                <div
                  v-for="detail in currentStage.details"
                  :key="detail"
                  class="detailItem small"
                >
                  <div class="checkboxCustom checkboxSelected"></div>
                  {{ detail }}
                </div>
              </div>
            </div>

            <div class="deliverableSection">
              <div class="med sectionTitle">Key Deliverable</div>
              <div class="detailItem small">
                <div class="checkboxCustom checkboxSelected"></div>
                <div>{{ currentStage.deliverable }}</div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 3rem;
}

.processHeader {
  .title {
    width: 70%;
    margin-bottom: 1rem;
  }

  .subtitle {
    width: 60%;
  }
}

.processGrid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  min-height: 500px;
}

// Left Column: Progress and Navigation
.progressColumn {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  grid-column: 2;
}

.progressBar {
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  margin-bottom: 1rem;
}

.progressFill {
  height: 100%;
  background-color: black;
  transition: width 0.5s ease;
}

.stageNavigation {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.navItem {
  background-color: #e0e0e0;
  color: black;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: black;
    color: white;
  }

  &.active {
    color: white;
    background-color: black;
    font-weight: 500;
  }
}

.stageNumber {
  font-weight: 500;
  min-width: 1.5rem;
}

.stageName {
  text-transform: uppercase;
}

// Right Column: All Info (spans 2 columns)
.infoColumn {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  grid-column: 1;
  grid-row: 1;
}

.stageHeader {
  .stageTitle {
    text-transform: uppercase;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .stageDescription {
    line-height: 1.5;
  }
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
}

.detailsSection {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
}

.sectionTitle {
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.detailsList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detailItem {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  line-height: 1.5;
}

.checkboxCustom {
  width: 1rem;
  height: 1rem;
  border: 1px solid black;
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.checkboxSelected {
  background-color: black;
}

.deliverableSection {
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid black;
}

.deliverable {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  font-weight: 500;
  line-height: 1.4;
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

  .processHeader {
    .title {
      width: 100%;
      font-size: 2.5rem !important;
      line-height: 2.5rem !important;
    }

    .subtitle {
      width: 100%;
    }
  }

  .processGrid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .detailsSection,
  .deliverableSection {
    border-top: 1px solid #e0e0e0;
    padding-top: 1rem;
  }

  .stageNavigation {
    flex-direction: row;
    overflow-x: auto;
    gap: 1rem;
    padding-bottom: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .navItem {
    flex-direction: column;
    min-width: 80px;
    text-align: center;
    padding: 0.5rem;
  }
}
</style>
