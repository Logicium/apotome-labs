<script setup lang="ts">
import { ref, computed } from 'vue';

// Process stages focused on methodology
const processStages = [
  {
    stage: "01 Discovery",
    title: "Understanding Your Vision",
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
    stage: "02 Strategy",
    title: "Crafting the Blueprint",
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
    stage: "03 Design",
    title: "Bringing Ideas to Life",
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
    stage: "04 Development",
    title: "Building Your Digital Solution",
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
    stage: "05 Launch",
    title: "Going Live Successfully",
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
    stage: "06 Support",
    title: "Ongoing Partnership",
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
      <!-- Timeline Navigation -->
      <div class="timelineNav">
        <div class="timeline">
          <div
            v-for="(stage, index) in processStages"
            :key="index"
            class="timelineItem"
            :class="{ 'active': index === currentStageIndex, 'completed': index < currentStageIndex }"
            @click="goToStage(index)"
          >
            <div class="timelineNumber">{{ stage.stage.split(' ')[0] }}</div>
            <div class="timelineName">{{ stage.stage.split(' ')[1] }}</div>
            <div v-if="index < processStages.length - 1" class="timelineConnector"></div>
          </div>
        </div>

      </div>

      <!-- Content Area -->
      <div class="processContent">
        <transition name="slide" mode="out-in">
          <div class="stageDetail" :key="currentStageIndex">
            <div class="stageHeader">
              <div class="stageNumber big">{{ currentStage.stage.split(' ')[0] }}</div>
              <div class="stageTitleGroup">
                <div class="stageTitle big">{{ currentStage.title }}</div>
                <div class="stageDescription">{{ currentStage.description }}</div>
              </div>
            </div>

            <div class="stageContent">
              <div class="detailsSection">
                <div class="med sectionTitle">What We Do</div>
                <div class="detailsList">
                  <div
                    v-for="detail in currentStage.details"
                    :key="detail"
                    class="detailItem"
                  >
                    <div class="detailBullet"></div>
                    <div class="detailText small">{{ detail }}</div>
                  </div>
                </div>
              </div>

              <div class="deliverableSection">
                <div class="med sectionTitle">Key Deliverable</div>
                <div class="deliverable">
                  <div class="deliverableIcon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14,2 14,8 20,8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10,9 9,9 8,9"></polyline>
                    </svg>
                  </div>
                  <div class="deliverableText">{{ currentStage.deliverable }}</div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Process Summary -->
    <!--    <div class="processSummary">-->
    <!--      <div class="summaryContent">-->
    <!--        <div class="med summaryTitle">The Result</div>-->
    <!--        <div class="small summaryText">-->
    <!--          Through this proven 6-step process, we've successfully delivered over 20 projects for clients across Trinidad and southern Colorado.-->
    <!--          Each stage builds upon the last, ensuring no detail is overlooked and every project exceeds expectations.-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="summaryStats">-->
    <!--        <div class="stat">-->
    <!--          <div class="big statNumber">6</div>-->
    <!--          <div class="small statLabel">Process Stages</div>-->
    <!--        </div>-->
    <!--        <div class="stat">-->
    <!--          <div class="big statNumber">20+</div>-->
    <!--          <div class="small statLabel">Projects Delivered</div>-->
    <!--        </div>-->
    <!--        <div class="stat">-->
    <!--          <div class="big statNumber">100%</div>-->
    <!--          <div class="small statLabel">Client Satisfaction</div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<style scoped lang="scss">
.panel {
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 4rem;
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
  grid-template-columns: 300px 1fr;
  gap: 4rem;
  min-height: 500px;
}

.timelineNav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timelineItem {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f8f8f8;
  }

  &.active {
    background-color: black;
    color: white;
  }

  &.completed .timelineNumber {
    background-color: #4CAF50;
    color: white;
    border-color: #4CAF50;
  }
}

.timelineNumber {
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid currentColor;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

.timelineName {
  font-weight: 500;
  text-transform: uppercase;
}

.timelineConnector {
  position: absolute;
  left: 2.25rem;
  bottom: -1px;
  width: 2px;
  height: 2rem;
  background-color: #e0e0e0;
}

.timelineControls {
  display: flex;
  gap: 1rem;
  justify-content: center;
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

.processContent {
  position: relative;
  overflow: hidden;
}

.stageDetail {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: 100%;
}

.stageHeader {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.stageNumber {
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.stageTitleGroup {
  flex: 1;
}

.stageTitle {
  margin-bottom: 1rem;
  line-height: 1.2;
}

.stageDescription {
  line-height: 1.5;
  color: #666;
}

.stageContent {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  flex: 1;
}

.sectionTitle {
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
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
}

.detailBullet {
  width: 6px;
  height: 6px;
  background-color: black;
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.detailText {
  line-height: 1.5;
  color: #555;
}

.deliverable {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  background-color: #f9f9f9;
}

.deliverableIcon {
  flex-shrink: 0;
  color: #666;
}

.deliverableText {
  font-weight: 500;
  line-height: 1.4;
}

.processSummary {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  padding-top: 3rem;
  border-top: 1px solid black;
}

.summaryTitle {
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.summaryText {
  line-height: 1.6;
  color: #555;
}

.summaryStats {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat {
  text-align: center;
}

.statNumber {
  color: #666;
  margin-bottom: 0.5rem;
}

.statLabel {
  text-transform: uppercase;
  color: #888;
}

// Slide transition
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

// Mobile responsiveness
@media (max-width: 768px) {
  .processGrid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .timeline {
    flex-direction: row;
    overflow-x: auto;
    gap: 0.5rem;
    padding-bottom: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .timelineItem {
    flex-direction: column;
    min-width: 100px;
    padding: 1rem 0.5rem;
    text-align: center;
  }

  .timelineConnector {
    display: none;
  }

  .stageHeader {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
  }

  .stageContent {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .processSummary {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .summaryStats {
    justify-content: space-around;
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
}
</style>
